# aws --endpoint-url=http://localhost:4566 ec2 describe-instances
resource "aws_instance" "app_server" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"

  tags = {
    Name = "MyNodeDDDApp"
  }
}
