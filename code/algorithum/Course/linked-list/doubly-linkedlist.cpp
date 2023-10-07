#include<bits/stdc++.h>
using namespace std;

class Node{
    public:
        int value;
        Node* next;
        Node* prev;
        
        Node()
        {
            value = 0;
            next = NULL;
            prev = NULL;
        };

        Node(int val)
        {
            this->value = val;
            this->next = NULL;
            this->prev = NULL;
        };
    };

class doublyLinkedList{
    public:
    Node* head;
    Node* tail;
        doublyLinkedList()
        {
            head = NULL;
            tail = NULL;
        }
        void insertNode(int);
        void printNode(char);
        void insertInMiddle(int,int,vector<int>&);
        void deleteNode(int,vector<int>&);
};

void doublyLinkedList::insertNode(int value){

    Node* newNode = new Node(value);
    if(head == NULL)
    {
        head = newNode;
        return;
    }

    Node* temp = head;
    while (temp->next != NULL)
    {
        temp = temp->next;
    }
    
    temp->next = newNode; 
    newNode->prev = temp;   
    tail = newNode; 
}

void doublyLinkedList::printNode(char order){

    if(order == 'n'){
        Node* temp = head;
        if(temp == NULL){
            cout<< "Empty"<<"\n";
            return;
        }
        while(temp != NULL){
            cout<< temp->value <<" ";
            temp = temp->next;
        }
    }else if(order == 'r'){
        Node* temp = tail;
        if(temp == NULL){
            cout<< "Empty"<<"\n";
            return;
        }
        while(temp != NULL){
            cout<< temp->value <<" ";
            temp = temp->prev;
        }
    }
}

void doublyLinkedList::insertInMiddle(int value ,int node_before_value,vector<int>& vect){

    Node* newNode = new Node(value);

    int sizeOfList = vect.size();
    Node* temp = head;
    for (int i = 0; i < sizeOfList; i++)
    {
        if(temp->value == vect[node_before_value]){ // B
            break;
        }
        temp = temp->next;
    }
    Node* nextNode = temp->next; //C
    nextNode->prev = newNode; //   F<---C
    newNode->next = nextNode;//    F--->C
    temp->next = newNode; //       B--->F
    newNode->prev = temp;//        B<---F

    vector<int>::iterator p = vect.begin();
    vect.insert(p+node_before_value+1, value);
}

void doublyLinkedList::deleteNode(int node_to_delete,vector<int>& vect){
    Node* temp = head;
    int sizeOfList = vect.size();
    for (int i = 0; i < sizeOfList; i++)
    {
        if(temp->value == vect[node_to_delete]){
            break;
        }
        temp = temp->next;
    }
    Node* prevNode = temp->prev;
    Node* nextNode = temp->next;
    nextNode->prev = prevNode;
    prevNode->next = nextNode;
    temp->next = NULL;
    temp->prev = NULL;

    vector<int>::iterator p = vect.begin()+ node_to_delete;
    vect.erase(p);  
}

int main(){
    vector<int> vect = {2,4,5,10,12}; 
    doublyLinkedList list;
    for (int i = 0; i < 5; i++)
    {
        list.insertNode(vect[i]);

    }
    // pass argument { "n" ---> normal direction } and  { "r" ---> reverse direction }
    char order = 'n';
    list.printNode(order); 
    cout<<"\n";

    // Insert between which to two node
    int value = 3;
    int node_postion_before_value = 1;

    // Insert a new node to a Linked-List
    list.insertInMiddle(value, node_postion_before_value ,vect);
    list.printNode(order);
    cout<<"\n";
   
    // Delete a Node
    int node_to_delete = 4;
    list.deleteNode(node_to_delete,vect);

    list.printNode(order);

    return 0 ;
}