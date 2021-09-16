let array = [1,2,4,8,4,5,9];
let listSize = 0;

function createLinkedList(array){
    let head = {value: array[0], next: null,};
    let currentNode = head;
    for(let i = 1; i < array.length; i++) {
        let newNode = {value: array[i], next: null}
        currentNode.next = newNode;
        currentNode = newNode;
    }
    
    return head;
}

let list = createLinkedList(array);

function countListSize(head){
    let currentNode = null;
    while(currentNode){
        listSize++;
        currentNode = currentNode.next;
    }
}

countListSize(list);
console.log(createLinkedList(array));
console.log(listSize);