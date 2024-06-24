#!/bin/bash

terraform fmt
terraform init 
terraform validate
terraform plan
terraform apply --auto-approve
terraform state list


terraform destroy

aws configure --profile tf-developer