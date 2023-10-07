#!/bin/bash

myVar="Hello World!"
x="Akash Mishra"

upper=${x^^}
lower=${x,,}
replace=${myVar/World!/Buddy!}
length=${#myVar}
slice=${myVar:6}

echo "${length}"
echo "${upper}"
echo "${lower}"
echo "${replace}"
echo "${slice}"

