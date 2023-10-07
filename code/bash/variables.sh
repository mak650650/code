#!/bin/bash

a=10
name="Akash"
age=28

echo $name has $a rupees and his age is $age years

name="paul"

echo $name has $a rupees and his age is $age years

#VARIABLE to store the output of a command

HOSTNAME=$(hostname)
echo "Name of the machine is" $HOSTNAME

# CONTSANT VARIABLE
readonly COLLEGE="IITM"

echo "My college name  is $COLLEGE"

COLLEGE="IITB"

echo "My college name  is $COLLEGE"
