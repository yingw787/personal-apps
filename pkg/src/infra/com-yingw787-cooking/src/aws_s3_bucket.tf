# Terraform definition for the AWS S3 bucket and configurations.

resource "aws_s3_bucket" "static_website" {
  bucket = var.domain_name
}

resource "aws_s3_bucket_website_configuration" "website_bucket" {
  bucket = aws_s3_bucket.static_website.id
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}
