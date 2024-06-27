# variable "some_bucket" {
#   description = "Remote s3 bucket name"
#   type        = string
#   validation {
#     condition     = regex("^([a-z0-9]{1}[a-z0-9-]{1,61}[a-z0-9]{1})$", var.some_bucket)
#     error_message = "Bucket name must not be empty and must follow s3 naming rules"
#   }
# }

# variable "avail_zones" {
#   type    = list(string)
#   default = ["us-east-1a", "us-east-1b", "us-east-1c"]
# }


# variable "region_avail_zones" {
#   type = map(any)
#   default = {
#     "us-east-1" = "use-east-1a"
#     "us-east-2" = "use-east-2a"
#     "us-west-1" = "use-west-1a"
#     "us-west-2" = "use-west-2a"
#   }
# }
# variable "multi_region" {
#   default = false
# }
# output "vpc_id" {
#   value = aws_vpc.nodeDDD.id
# }
