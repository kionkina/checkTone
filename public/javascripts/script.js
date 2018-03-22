$("#messageForm").submit(function(event) {
    let rawFormInput = $("#text").val();
    console.log(rawFormInput);
    if(rawFormInput.length == 0) {
        $("#error").html("You have not filled in any hashtags.");
        $("#errorDiv").addClass("show");
        setTimeout(() => $("#errorDiv").removeClass("show"), 4000);
    }
    else {
        $("#submitMessage").attr('disabled', 'disabled');
        $.post("/", $("#messageForm").serialize(), function(data) {
            console.log(data);
            // if(data.message){
            //     $("#message").html(data.message);
            //     $("#message").append(`<br><br><button type="button" class="btn btn-outline-primary"><a class ="continue" href = '${data.url}'>Continue</a></button>`);
            //     $("#authDiv").addClass("show");
            // }
            // if(data.action){
            //     window.location.href = '/success';
            // }
        });
    }
    event.preventDefault();
});