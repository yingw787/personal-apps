# Terraform definition for the AWS S3 bucket and configurations.

# S3 Bucket Creation (aws_s3_bucket): This resource defines the primary storage
# location, named after var.bucket_name, for our website's static content like
# HTML, CSS, and JavaScript files.
resource "aws_s3_bucket" "static_website" {
  bucket = var.domain_name
}

# Website Configuration (aws_s3_bucket_website_configuration): This
# configuration sets up the S3 bucket to behave like a web server. When someone
# accesses the root of our domain, they’re served the index.html file. If
# there's an error, we redirect them back to the main page.
resource "aws_s3_bucket_website_configuration" "website_bucket" {
  bucket = aws_s3_bucket.static_website.id
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

# S3 bucket access control list (ACL) definitions.
#
# Bucket Ownership Controls (aws_s3_bucket_ownership_controls): This establishes
# that the default owner of objects uploaded to our bucket, unless specified
# otherwise, will be the bucket owner.
resource "aws_s3_bucket_ownership_controls" "website_bucket" {
  bucket = aws_s3_bucket.static_website.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# Public Access Restrictions (aws_s3_bucket_public_access_block): For security,
# this configuration ensures that our bucket is not publicly accessible. It
# blocks public ACLs, policies, and restricts public access to ensure our
# content remains private.
resource "aws_s3_bucket_public_access_block" "website_bucket" {
  bucket                  = aws_s3_bucket.static_website.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Bucket Access Control List (ACL) (aws_s3_bucket_acl): This resource, which
# depends on the aforementioned ownership and public access controls, confirms
# that the overall access level for the bucket is set to “private”, reinforcing
# our data security.
resource "aws_s3_bucket_acl" "website_bucket" {
  depends_on = [
    aws_s3_bucket_ownership_controls.website_bucket,
    aws_s3_bucket_public_access_block.website_bucket,
  ]
  bucket = aws_s3_bucket.static_website.id
  acl    = "private"
}
