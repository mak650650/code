declare -a lower
declare -a upper
arr=(`ls`)
egrep '[[:upper:]]' ${arr[@]}


#upper+=(`${arr[@]} | egrep '^[[:alnum:]]{4}[[:xdigit:]]{6}$' | egrep '[[:lower:]]'`)
