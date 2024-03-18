# The aws_cloudfront_origin_access_control Terraform resource creates an AWS
# CloudFront Origin Access Control (OAC), which is a secure way to grant
# CloudFront access to your S3 bucket.
#
# OAC use AWS Identity and Access Management (IAM) role trusts to provide
# CloudFront with short-term credentials to access your S3 bucket. This is more
# secure than using a CloudFront Origin Access Identity (OAI), which is a
# deprecated resource that provided CloudFront with long-term credentials.
resource "aws_cloudfront_origin_access_control" "current" {
  name                              = "OAC ${aws_s3_bucket.static_website.bucket}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  comment    = "${var.domain_name} distribution"
  depends_on = [aws_s3_bucket.static_website]
  aliases = [
    var.domain_name,
  ]
  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]
    # Cache policy ID replaces ForwardedValues
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    compress               = true
    default_ttl            = 0
    max_ttl                = 0
    target_origin_id       = "${var.domain_name}-origin"
    viewer_protocol_policy = "redirect-to-https"
  }
  default_root_object = "index.html"
  enabled             = true
  http_version        = "http2and3"
  is_ipv6_enabled     = true
  origin {
    domain_name              = aws_s3_bucket.static_website.bucket_regional_domain_name
    origin_id                = "${var.domain_name}-origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.current.id
  }
  price_class = "PriceClass_All"
  viewer_certificate {
    acm_certificate_arn      = var.custom_acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }
}
