# Defining Local Variables
#
# Local variables in Terraform allow for intermediate computations and
# transformations within a module, ensuring cleaner code without modifying the
# primary input variables.
#
# Most of these variables are used in `aws_s3_object.tf`.

locals {
  dist_dir    = "${path.module}/../../../../../dist/pkg/src/apps/com-yingw787-dotfiles/.next"
  module_name = basename(abspath(path.module))

  content_types = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "application/javascript",
    ".json" : "application/json",
    ".xml" : "application/xml",
    ".jpg" : "image/jpeg",
    ".jpeg" : "image/jpeg",
    ".png" : "image/png",
    ".gif" : "image/gif",
    ".svg" : "image/svg+xml",
    ".webp" : "image/webp",
    ".ico" : "image/x-icon",
    ".woff" : "font/woff",
    ".woff2" : "font/woff2",
    ".ttf" : "font/ttf",
    ".eot" : "application/vnd.ms-fontobject",
    ".otf" : "font/otf"
  }
}
