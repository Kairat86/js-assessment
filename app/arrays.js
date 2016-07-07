exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    var sum = 0;
    var item;
    for (item = 0; item < arr.length; item++) {
      sum += arr[item];
    }
    return sum;
  },

  remove: function (arr, item) {
    var resultArr = [];
    var i;
    var j = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] != item) {
        resultArr[j] = arr[i]
        j++;
      }
    }
    return resultArr;
  },

  removeWithoutCopy: function (arr, item) {
    var i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i = 0;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    return arr3
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var count = 0;
    arr.forEach(function (arrItem) {
      if (arrItem == item) {
        count++;
      }
    })

    return count;
  },

  duplicates: function (arr) {
    var resultArr = [];
    arr.forEach(function (item) {
      arr.shift();
      if ((arr.indexOf(item) != -1) && (resultArr.indexOf(item) == -1)) {
        resultArr.push(item);
      }
    })

    return resultArr;
  },

  square: function (arr) {
    return arr.map(function (item) {
      return item * item;
    });
  },

  findAllOccurrences: function (arr, target) {
    var resArr = [];
    arr.forEach(function (item, index) {
      if (item == target) {
        resArr.push(index);
      }

    })
    return resArr;
  }
};
