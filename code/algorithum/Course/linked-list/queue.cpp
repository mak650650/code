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
class singlyLinkedList{
    public:
        Node* head;
        singlyLinkedList(){
            head = nullptr;
        }
        void insertAtHead(int);
        void printSinglyLinkedList(int);
};
void singlyLinkedList::insertAtHead(int data){
    Node* newNode = new Node(data);
    if(head == NULL){
        head = newNode;
        return ;
    };
    Node* temp  = head;
    newNode->next = temp;
    head = newNode;
};
void singlyLinkedList::printSinglyLinkedList(int number){
    Node* temp = head;
    for (int i = 0; i < number-1; i++)
    {
        cout << temp->data << endl;
        temp = temp->next;
    }
    
    cout << temp->data;
}

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    int number,data;
    cin >> number;
    singlyLinkedList list;
    for(int i = 0; i < number; i++){
        cin >> data;
        list.insertAtHead(data);
    };

    list.printSinglyLinkedList(number);
    return 0;
}
