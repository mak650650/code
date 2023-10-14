#!bin/bash/ 
echo Which file extention you want to change?
read current_ext
echo To which you want to change
read new_ext

declare -a files
files=(`ls`)
for (( i=0 ; i<=${#files[@]}-1 ; i++ ));
do
	x=${files[i]#*.}
	if [[ $x == $current_ext ]]
	then
		echo `mv  ${files[i]} ${files[i]%.*}.$new_ext`
	else
		echo "NO"
	fi
done
