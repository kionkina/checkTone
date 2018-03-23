$("#hashTagForm").submit(function (event) {
    let rawFormInput = $("#hashTag").val();
    console.log(rawFormInput);
    if (rawFormInput.length == 0) {
        $("#error").html("You have not filled in any hashtags.");
        $("#errorDiv").addClass("show");
        setTimeout(() => $("#errorDiv").removeClass("show"), 4000);
    } else {
        $("#submithashTag").attr('disabled', 'disabled');
        $.post("/", $("#hashTagForm").serialize(), function (data) {
            $("#intro").empty();
            $("#results").show();
            data.document_tone.tones.forEach(element => {

                $("#tones").append(`<tr><td>${element.tone_name}%</td><td>${(element.score*100).toFixed(2)}%</td></tr>`);
            });

            data.sentences_tone.forEach(element => {

                if(element.tones.length != 0) {
                    let sentence = element.text;
                    let tones = [];
                    let scores = [];

                    for (let i = 0; i < element.tones.length; i++) {

                        tones.push(element.tones[i].tone_name);
                        scores.push((element.tones[i].score*100).toFixed(2));
                    }

                    $("#sentence_results").append(`<tr><td>${sentence}</td><td>${tones}</td><td>${scores}</td></tr>`);
                }
            });

        });
        event.preventDefault();
    }
});

$("#results").hide();