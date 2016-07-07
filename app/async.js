exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        var promise = new Promise(function (resolve, reject) {
                resolve(value);
            }
        );
        return promise;
    },

    manipulateRemoteData: function (url) {
        var data;
        var promise = new Promise(function (resolve, reject) {
            data = JSON.parse(url);

        });
        alert(data.get('people')[0]);
        return promise;
    }
}
