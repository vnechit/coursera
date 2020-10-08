/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {

    var splittedString = tweet.split(' ');
    var result = [];

    for (var i = 0; i < splittedString.length; i++){
        if (splittedString[i].startsWith('#')){
            result.push(splittedString[i].slice(1, splittedString[i].length));
        }
    }

    return result;

};
