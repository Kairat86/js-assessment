exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        return arr.reduce(function (previousVal, nextVal) {
            return previousVal + nextVal;
        });
    },

    remove: function (arr, item) {
        while (arr.includes(item)) {
            arr.splice((arr.indexOf(item)), 1);
        }
        return arr;
    },

    removeWithoutCopy: function (arr, item) {
        while (arr.includes(item)) {
            arr.splice((arr.indexOf(item)), 1);
        }
        return arr
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
        return arr.filter(function (value) {
            return item === value;
        }).length;
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
