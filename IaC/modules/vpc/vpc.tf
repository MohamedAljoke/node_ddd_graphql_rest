resource "aws_vpc" "nodedddVPC" {
  cidr_block = local.vpc_cider
  tags       = var.vpc_tags
}
