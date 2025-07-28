
function LRUCache(capacity) {
    const cache = new Map();
  class Node {
    constructor(key, value) {
      this.value = value;
      this.key = key;
      this.next = null;
      this.prev = null;
    }
  }


  let head = new Node(0,0);
  let tail = new Node(0,0);

  head.next = tail;
  tail.prev = head;


  function addNode(node){
    node.next = head.next;
    node.prev = head;
    head.next.prev = node;
    head.next = node;
  }

  function deleteNode(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  function get(key){
    if(!cache.has(key)){
        return -1;
    }
    const newNode = cache.get(key);
    deleteNode(newNode);
    addNode(newNode);
    return newNode.value;
  }

  function put(key, value){
    if(cache.has(key)){
        deleteNode(cache.get(key));
    }

    const newNode = new Node(key, value);
    addNode(newNode);
    cache.set(key, newNode);

    if(cache.size > capacity){
        let lru = tail.prev;
        deleteNode(lru);
        cache.delete(lru.key);
    }

  }
  return {get, put};

}




const lru = LRUCache(2);
lru.put(1, 1);           // cache = {1=1}
lru.put(2, 2);           // cache = {1=1, 2=2}
console.log(lru.get(1)); // return 1 → cache = {2=2, 1=1}
lru.put(3, 3);           // evicts key 2 → cache = {1=1, 3=3}
console.log(lru.get(2)); // return -1 (not found)
lru.put(4, 4);           // evicts key 1 → cache = {3=3, 4=4}
console.log(lru.get(1)); // return -1 (not found)
console.log(lru.get(3)); // return 3
console.log(lru.get(4)); 