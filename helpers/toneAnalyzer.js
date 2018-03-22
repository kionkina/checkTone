var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');


const getTone = (statement) => {
    var tone_analyzer = new ToneAnalyzerV3({
        username: process.env.TONE_ANALYZER_USERNAME,
        password: process.env.TONE_ANALYZER_PASSOWRD,
        version_date: process.env.TONE_ANALYZER_VERSION_DATE
    });

    var params = {
        tone_input: statement,
        content_type: 'text/plain',
        sentences: true
    };

    return new Promise((resolve, reject) => {
        tone_analyzer.tone(params, function (error, response) {
            if (error)
                reject(Error(error));
            else
                resolve(JSON.stringify(response, null, 2));
        });

    });

};

module.exports = getTone;