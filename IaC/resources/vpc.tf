resource "aws_vpc" "nodedddVPC" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name    = "nodedddVPC"
    Project = "node ddd Project"
  }
}
