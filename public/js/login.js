$("#btn").click(function(data){
    var email = $("#email").val();
    var password = $("#password").val();
    $.ajax({
        url: "/pj1/login",
        type: "post",
        data: {
            email: email,
            password: password
        }
    }).then(function(data){
        if(data.error){
            alert(data.message) 
        }else{
            // alert(data.message) 
            window.location.href = "/pj1/index" 
        }
    });
});