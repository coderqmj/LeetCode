/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  this.map.get(key)
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.map.size<this.capacity) {
      this.map.set(key, value)
      
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/