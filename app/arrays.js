exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
          if (arr[i] === item) {
            arr.splice(i, 1);
            i = i - 1;
          }
        }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var joinedArray = arr1.concat(arr2);
    return joinedArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    var len   = arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] == item) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var seen       = {};
    var duplicates = [];
    var len = arr.length;

    for (var i = 0; i < len; i++) {
      // seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
      if (seen[arr[i]]) {
        seen[arr[i]] = seen[arr[i]] + 1;
      } else {
        seen[arr[i]] = 1;
      }

    }
    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        duplicates.push(parseInt(item));
      }
    }
    return duplicates;
  },

  square : function(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      arr[i] = Math.pow(arr[i], 2);
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var ret = [];
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] === target) {
        ret.push(i);
      }
    }
    return ret;
  }
};
