def printLin1toN(value=1):
    if value>100:
        return
    print(value)
    value+=1
    return printLin1toN(value)
printLin1toN(1)