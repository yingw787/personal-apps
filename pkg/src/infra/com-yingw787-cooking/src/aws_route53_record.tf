# TTL must be omitted from alias records
resource "aws_route53_record" "a_record" {
  zone_id = var.hosted_zone_id
  name    = var.domain_name
  type    = "A"
  alias {
    name = aws_cloudfront_distribution.s3_distribution.domain_name
    # NOTE that for the HostedZoneId of the alias target, it must be the
    # specific hosted zone of CloudFront, not the hosted zone for the Route53
    # record set. See: https://stackoverflow.com/a/57894862/1497211
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# TTL must be omitted from alias records
resource "aws_route53_record" "aaaa_record" {
  zone_id = var.hosted_zone_id
  name    = var.domain_name
  type    = "AAAA"
  alias {
    name = aws_cloudfront_distribution.s3_distribution.domain_name
    # NOTE that for the HostedZoneId of the alias target, it must be the
    # specific hosted zone of CloudFront, not the hosted zone for the Route53
    # record set. See: https://stackoverflow.com/a/57894862/1497211
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
