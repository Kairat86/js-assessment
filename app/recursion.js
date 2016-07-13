exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        var fileList = [];
        if (dirName !== undefined) {
            assignSubdirToData(data, dirName);
        }

        function assignSubdirToData(obj, name) {
            if (obj.dir === name) {
                data = obj;
            } else {
                obj.files.forEach(function (item) {
                    if (typeof item === 'object') {
                        assignSubdirToData(item, name);
                    }
                });
            }
        }

        function list(obj) {
            obj.files.forEach(function (item) {
                if (typeof item === 'object') {
                    list(item);
                } else {
                    fileList.push(item);
                }
            });
        };
        list(data);
        return fileList;
    },

    permute: function (arr) {
        var resultArr = [];
        var usedElms = [];

        function myPermute(inputArr) {
            var i, j;
            for (i = 0; i < inputArr.length; i++) {
                j = inputArr.splice(i, 1)[0];
                usedElms.push(j);
                if (inputArr.length == 0) {
                    resultArr.push(usedElms.slice());
                }
                myPermute(inputArr);
                inputArr.splice(i, 0, j);
                usedElms.pop();
            }
            return resultArr
        }

        return myPermute(arr)
    }
    ,

    fibonacci: function (n) {
        var result = 1;
        var start = 0;
        var sequenceElmIndex = 1;

        function getFibonacci(begin) {
            if (sequenceElmIndex === n) {
                return;
            } else {
                sequenceElmIndex++;
                var temp = result;
                result = result + begin;
                begin = temp;
                getFibonacci(begin);
            }
        }

        getFibonacci(start);
        return result;
    },

    validParentheses: function (n) {

        var parentheses = '((()))';
        var arr = parentheses.split('');
        var permutedArr = [];
        var usedElms = [];

        function permute(inputArr) {
            var i, j;
            for (i = 0; i < inputArr.length; i++) {
                j = inputArr.splice(i, 1)[0];
                usedElms.push(j);
                if (inputArr.length == 0) {
                    permutedArr.push(usedElms.slice());
                }
                permute(inputArr);
                inputArr.splice(i, 0, j);
                usedElms.pop();
            }
            return permutedArr
        }

        permute(arr);

        var filteredArr = permutedArr.filter(function (item) {
            var copyArr = item.slice();
            return isValid(copyArr);
        });

        function isValid(array) {
            var l = array.length - 1;
            var i = 0;
            var chHolder = [];
            if (array[0] == ')' || array[array.length - 1] == '(') {
                return false;
            }
            while (i < l) {
                var ch = array[i];
                if (ch == '(') {
                    chHolder.push(ch);
                } else {
                    if (chHolder.length) {
                        chHolder.pop();
                    } else {
                        return false;
                    }
                }
                i++;
            }
            return true;
        }

        var stringifiedArr = filteredArr.map(function (item) {
            return item.toString();
        });

        var duplicatesRemovedArr = [];

        stringifiedArr.forEach(function (item) {
            var processedItem = item.replace(/,/g, '');
            if (duplicatesRemovedArr.indexOf(processedItem) == -1) {
                duplicatesRemovedArr.push(processedItem);
            }

        });

        return duplicatesRemovedArr;

    }
}
;
