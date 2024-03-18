# Terraform definition for the AWS S3 bucket and configurations.

resource "aws_s3_bucket" "static_website" {
  bucket = var.domain_name
}
