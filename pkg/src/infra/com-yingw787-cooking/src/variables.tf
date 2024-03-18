# Terraform variables, accessed by the prefix `var.$VARIABLE_NAME`.

variable "aws_region" {
  type        = string
  description = "The AWS region to put the bucket into"
  default     = "us-east-1"
}

variable "domain_name" {
  type        = string
  description = "The domain name for this website."
}

variable "custom_acm_certificate_arn" {
  type        = string
  description = "The Amazon Resource Number (ARN) for the wildcard SSL certificate *yingw787.com already provisioned via AWS Certificate Manager (ACM). No default as this should be set via .tfvars only!"
}

variable "hosted_zone_id" {
  type        = string
  description = "The ID of the AWS Route 53 hosted zone for yingw787.com."
}
