#!/bin/bash
echo What is your favorite image processor?
a="Gimp / gimp"
b="Adobe"
c="imagej"
echo 1.$a
echo 2.$b
echo 3.$c
read pname
case $pname in
	1)
		echo "\"$a\" is a good choice";;
	2)
		echo "\"$b\" is a good choice ,but you have to pay for this tool to use";;
	3)
		echo  "\"$c\" is a standard choice ,very less feature";;
	*)
		echo "I did not know \"${pname}\" could do image stuff";;
esac
