#!/bin/bash

echo "Hey choose an option"
echo "a = To see the current date"
echo "b = List all the files in current dir"
echo "c = See present working directory"
echo "d = Longlisting formate"

read choice

case $choice in
	a)
		echo "Today's date is"
		date;;
	b)ls -a;;
	c)pwd;;
	d)ls -l;;
	*) echo "Non a valid input,Please provide valid input"

esac
