exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak: function (fn, obj) {
        greeting = obj.greeting;
        name = obj.name;
        return fn();
    },


    functionFunction: function (str) {
        var myFunction = function (otherStr) {
            return str + ', ' + otherStr;
        };
        return myFunction;
    },

    makeClosures: function (arr, fn) {
        return arr.map(function (item) {
            var closure = function () {
                return fn(item);
            };
            return closure;
        });
    },

    partial: function (fn, str1, str2) {

    },

    useArguments: function () {

    },

    callIt: function (fn) {

    },

    partialUsingArguments: function (fn) {

    },

    curryIt: function (fn) {

    }
};
