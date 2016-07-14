exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
    containsNumber: function (str) {
        return /\d/.test(str);
    },

    containsRepeatingLetter: function (str) {
        return (/([a-zA-Z]).*\1+/).test(str);
    },

    endsWithVowel: function (str) {
        return /[aeoiuAEIOU]$/.test(str);
    },

    captureThreeNumbers: function (str) {
        var match = str.match(/\d{3}/);
        return match === null ? false : match[0];
    },

    matchesPattern: function (str) {
        return (/^\d{3}-\d{3}-\d{4}$/).test(str);
    },

    isUSD: function (str) {
        return /^\$\d+(,\d{3})*(\.\d{2})?$/.test(str);
    }
};
