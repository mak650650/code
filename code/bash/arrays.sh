  #!/bin/bash
# ARRAY
myArray=( 1 20 30.5 Hello "Hey man")

# echo "All the values in array ${myArray[*]}"
# echo "Value on 0th index is ${myArray[0]}"

#How to find number of values in an array
echo "Length of the array:- ${#myArray[*]}"

#How to get specific values?
echo  "value from 1st index :-${myArray[*]:1:3}"

#How to update an array?
myArray+=( New 30 40 )
echo "Values of new arrays ${myArray[*]}"

# ARRAYS --> KEY VALUE PAIR
declare -A myArr
myArr=( [name]=Akash [age]=21 [country]=India)
echo "Person name is ${myArr[name]} and their age is ${myArr[age]} and he is from ${myArr[country]}"
