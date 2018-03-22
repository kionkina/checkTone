const _ = require('lodash');

const formatInput = (hashTags) => {
    let cleanedHashTags = hashTags.split(" ").
    map((hashTag) => (hashTag.startsWith('#') ? hashTag : `#${hashTag}`)); //check for hashtags

    const uniqueHashTags = _.uniqWith(cleanedHashTags, _.isEqual); //make sure there are no repetitions

    return uniqueHashTags.map((hashTags) => encodeURIComponent(hashTags));
};

module.exports = formatInput;