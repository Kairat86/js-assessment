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
            var xmlHttp = null;
            xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, false);
            xmlHttp.send(null);
            var json = JSON.parse(xmlHttp.responseText);
            var names = [];
            json.people.forEach(function (item) {
                names.push(item.name);
            });
            names.sort();
            resolve(names);
        });
        return promise;
    }
}
