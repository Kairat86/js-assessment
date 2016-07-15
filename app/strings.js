exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {

    reduceString: function (str, amount) {

        // var gCount = 0;
        // var gString = str;
        //
        // for (var i = 0; i < gString.length - 1; i++) {
        //     var ch = gString.charAt(i);
        //     if (getOccurrenceNum(ch, gString, 0) > amount) {
        //         removeExtraCh(ch, amount);
        //     }
        // }
        //
        // function getOccurrenceNum(ch, str, substrStartIndex) {
        //     str = str.substring(substrStartIndex);
        //     substrStartIndex = str.indexOf(ch);
        //     if (substrStartIndex != -1) {
        //         gCount++;
        //         return getOccurrenceNum(ch, str, ++substrStartIndex);
        //     }
        //     var temp = gCount;
        //     gCount = 0;
        //     return temp;
        // }
        //
        // function removeExtraCh(ch, amount) {
        //     gString = gString.replace(ch, '');
        //     if (getOccurrenceNum(ch, gString, 0) > amount) {
        //         removeExtraCh(ch, amount);
        //     }
        // };


        for (var i = 0; i < str.length;) {
            var ch = str.charAt(i);
            if (shouldBeProcessed(ch, str.substring(i + 1), amount)) {
                str = str.replace(ch, '');
                i = 0;
            } else {
                i++;
            }
        }


        function shouldBeProcessed(ch, substring, amount) {
            var count = 1;
            for (var i = 0; i < substring.length; i++) {
                if (ch === substring.charAt(i)) {
                    if (++count > amount) {
                        return true;
                    }
                } else {
                    return false;
                }
            }

        }

        return str;
    },

    wordWrap: function (str, cols) {

    },

    reverseString: function (str) {
        var arr = str.split('');
        arr.reverse();
        str = arr.join('');
        return str;
    }
}
;
