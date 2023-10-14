#!bin/bash/

echo Which extension  files you want to  remove?
read rem_ext

declare -a files
files=(`ls`)

for (( i=0 ; i<=${#files[@]}-1 ; i++ ));
do
	x=${files[i]#*.}
	if [[ $x == $rem_ext ]]
	then
		echo `rm ${files[i]}`
	else
		echo NO
	fi
done

