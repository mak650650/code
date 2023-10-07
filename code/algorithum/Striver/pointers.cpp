#include<bits/stdc++.h>
using namespace std;

int main(){
    int* ptr;
    int var = 7;
    int foo = 21;
    ptr = &var;
    cout<< *ptr;
    cout<< endl;
    ptr = &foo;
    cout << *ptr;
    return  0;
}