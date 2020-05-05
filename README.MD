## LeetCode解题思路总结
### 1.两数之和

#### 方法一：Map

- 1.创建一个map

- 2.for循环遍历nums数组

- 3.用target减nums[i]得到key

- 4.检查map里面是否有key

- ~~~javascript
  var twoSum = function (nums, target) {
    var targetMap = new Map()
    for (var i = 0; i < nums.length; i++) {
      var key = target - nums[i]
      if (targetMap.has(key)) {
        return [targetMap.get(key), i]
      } else {
        targetMap.set(nums[i], i)
      }
    }
  }
  ~~~

### 03.无重复字符的最长子串

#### 方法一: Set

- 1.创建一个set

- 2.使两个指针指向字符串的头部

- 遍历字符串，若set里面没有是s[i]，则添加s[i]到set里面，并更新maxLeng

- 若set里面已经存在s[i]，则需要删除s[j], 并且将j向后移动(j++)，直到set里面不包含s[i]为止，**再添加s[i]到set里面**

- 返回maxLength

- ~~~javascript
  var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let i = 0, j = 0, maxLenth = 0
    for (i; i < s.length; i++) {
      if(!set.has(s[i])) {
        set.add(s[i])
        maxLenth = Math.max(maxLenth, set.size)
      }else {
        while(set.has(s[i])) {
          set.delete(s[j])
          j++
        }
        set.add(s[i])
      }
    }
    return maxLenth
  };
  ~~~

### 05最长回文子串

#### 方法一：中心向两边扩散

**思路**: 

- 1.两种情况：
  - 情况一 ："aba"有中心点的
    - 从i向两边扩散(i-1, i+1)判断
  - 情况二: "abba" 无中心点的
    - 从本身向(i,i+1)两边扩散
  - 判断 同时需要满足两个条件
    - 1.没有越界 left>=0,right<s.length
    - 2.左右两边相等 s[left] === s[right]
  - 更新**maxLenth**，并且把**start**设置为**left**
  - 返回子字符串 s.subString(start, start+maxLengtn)

