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
        return function (str3) {
            return fn.apply(null, [str1, str2, str3]);
        }
    },

    useArguments: function () {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt: function (fn) {
        return fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments: function (fn) {
        var slice = Array.prototype.slice,
            holderArray = slice.call(arguments, 1);
        return function () {
            var newArgs = slice.call(arguments),
                args = holderArray.concat(newArgs);
            return fn.apply(null, args);
        };
    },

    curryIt: function (fn) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 1);
        return function curry(a) {
            args = args.concat(slice.call(arguments, 0));
            if (fn.length === args.length) {
                return fn.apply(null, args);
            }
            return curry;
        };
    }

};
