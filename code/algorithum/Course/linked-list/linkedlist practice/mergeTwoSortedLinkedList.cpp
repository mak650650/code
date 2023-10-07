#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

class Node{
    public:
        int data;
        Node* next;
        Node(){
            data = 0;
            next = nullptr;
        }
        Node(int data){
            this->data = data;
            this->next = nullptr;
        }
};

Node* insertNode(Node* head,int numberOfNode){
    int data;
    cin >> data;
    head->data = data;
    for (int i=0;i < numberOfNode-1; i++) {
        cin >> data;
        Node* newNode = new Node(data);
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
    return head;
};

Node* mergedList(Node* llist1, Node* llist2){
    Node* temp1 = llist1;
    Node* temp2 = llist2;
    while (temp1->next != nullptr){
        temp1 = temp1->next;
    }
    temp1->next = temp2;
    return llist1;
};
Node* sortedLinkedList(Node* mergedLinkedList, int length){
    //Bubble Sort
    for(int i=0;i<length;i++){
        Node* temp = mergedLinkedList;
        for(int j=0;j<length-i-1;j++){
            if (temp->data > temp->next->data) {
                int data = temp->data;
                temp->data = temp->next->data;
                temp->next->data = data;
            }

            temp = temp->next;
        }
    }
    return mergedLinkedList;
};

void print(Node* head){
    Node* temp = head;
    while (temp->next != nullptr) {
        cout << temp->data <<" ";
        temp = temp->next;
    }
    cout << temp->data << endl;
    return;
};

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    int tests;
    cin >> tests;
    for (int i=0;i<tests;i++) {
        Node* llist1 = new Node();
        Node* llist2 = new Node();
        Node* mergedLinkedList = new Node();
        Node* sortedList = new Node();
        
        
        int numberOfNode_1,numberOfNode_2;
        //List 1
        cin >> numberOfNode_1;
        llist1 =  insertNode(llist1,numberOfNode_1);
        
        cin >> numberOfNode_2;
        llist2 = insertNode(llist2,numberOfNode_2);
        
        // print(llist1);
        // print(llist2);
        
        mergedLinkedList = mergedList(llist1,llist2);
        
        int listLength = numberOfNode_1 + numberOfNode_2;
        sortedList = sortedLinkedList(mergedLinkedList,listLength);
        print(sortedList);
        
    }  
    return 0;
}


