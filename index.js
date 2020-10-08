/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

    var unreapettedHashtags = [];

    if (hashtags.length == 0){
        return '';
    }

    for (var i = 0; i < hashtags.length; i++){

        var hashtag = hashtags[i].toLowerCase();
        if (!unreapettedHashtags.includes(hashtag)){
            unreapettedHashtags.push(hashtag);
        }

    }

    return unreapettedHashtags.join(', ');

};
