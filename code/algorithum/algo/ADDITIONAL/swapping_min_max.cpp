#include<bits/stdc++.h>
using namespace std;
#define l long
#define s string
s str_as_array_1;
s str_as_array_2;

pair<int, int> swap_func(l v1, l v2) {
    l temp;
    temp = v1;
    v1 = v2;
    v2 = temp;
    pair<int ,int> p ={v1,v2};
    return p;
}

int main(){
    cin >> str_as_array_1;
    cin >> str_as_array_2;

    l str1_size = str_as_array_1.size();
    l str2_size = str_as_array_2.size();

    l arr1[str1_size];
    l arr2[str2_size];

    s value1;
    l j1 = 0;
    l n1_index =0;
    for (l i = 1;  i<str2_size; i++) {
        if(str_as_array_1[i] == ',') {
            arr1[j1] = stol(value1);
            n1_index++;
            j1++;
            value1 = "";
        }else if(str_as_array_1[i] == ']'){
            n1_index++;
            arr1[j1] = stol(value1);

            break;
        }else{
            value1 += str_as_array_1[i];
        }
    }

    s value2;
    l j2 = 0;
    l n2_index =0;
    for (l i = 1;  i<str2_size; i++) {
        if(str_as_array_2[i] == ',') {
            arr2[j2] = stol(value2);
            n2_index++;
            j2++;
            value2 = "";
        }else if(str_as_array_2[i] == ']'){
            arr2[j2] = stol(value2);
            n2_index++;
            break;
        }else{
            value2 += str_as_array_2[i];
        }
    }

    l length_arrays = n2_index;
    //CREATING HASH
    l hash_b[length_arrays + 1];
    for (int i = 0; i < length_arrays + 1; ++i) {
        hash_b[i] = 0;
    }
    // UPDATING HASH
    for (int i = 0; i < length_arrays; ++i) {
        hash_b[arr2[i]] += (arr2[i] - arr1[i]);
    }
    // GETTING SWAPPABLE VALUES
    vector<int>  swapValue;
    for (int i = 0; i < length_arrays+1; ++i) {
        if(hash_b[i] > 0){
            swapValue.emplace_back(i);
        }
    }
    // GETTING MINIMUM AMONG ALL SWAPPABLE VALUES AND PERFORMING SWAP
    if(!swapValue.empty()) {
        l min_value = swapValue[0];
        for (int i = 1; i < swapValue.size(); ++i) {
            if (min_value > swapValue[i]) {
                min_value = swapValue[i];
            }
        }

        for (int i = 0; i < n2_index; ++i) {
            if (arr2[i] >= min_value) {
                pair<int, int> p = swap_func(arr1[i], arr2[i]);
                arr1[i] = p.first;
                arr2[i] = p.second;
            }
        }
    }
    l max_1 = 0;
    l max_2 = 0;

    for (int i = 0; i < n2_index; ++i) {
        if(arr1[i] > max_1){
            max_1 = arr1[i];
        }
        if(arr2[i] > max_2){
            max_2 = arr2[i];
        }
    }
    cout<< max_1*max_2<< endl;

    return 0;

}