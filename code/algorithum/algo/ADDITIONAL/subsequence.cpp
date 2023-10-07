#include<bits/stdc++.h>
using namespace std;
#define l long
#define s string

int main(){
    s str;
    cin >> str;
    s S[str.size()];
    for (int i = 0; i < str.size(); ++i) {
        S[i] = str[i];
    }
    unsigned l S_l = sizeof(S)/sizeof(S[0]);
    s subString;
    vector<s> subStringContainer;
//    for (int i = 0; i < S_l; ++i) {
//        subString = S[i];
//        subStringContainer.emplace_back(subString);
//    }
    subString = "";
//    unsigned l n = S_l / 2;
//    unsigned l index = 1;
    for (int i = 0; i <= S_l; ++i) {
        subString = S[i];
        subStringContainer.emplace_back(subString);
        subString = "";
    }


    unsigned l len = subStringContainer.size();
    cout << len << endl <<endl;
    for (int i = 0; i < len; ++i) {
        cout << subStringContainer[i] << endl;
    }

    return 0;
}