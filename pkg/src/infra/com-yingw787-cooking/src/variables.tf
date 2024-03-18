# Terraform variables, accessed by the prefix `var.$VARIABLE_NAME`.

variable "aws_region" {
  type        = string
  description = "The AWS region to put the bucket into"
  default     = "us-east-1"
}
