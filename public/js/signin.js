$("#btn").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    var age = $("#age").val();
    var isEmail = false;
    if (email == "") {
        $(".tbao").html("Bạn vui lòng nhập thông tin");
        isEmail = false;
    } else {
        $(".tbao").html("");
        isEmail = true;
    };
    var isPass = false;
    if (password == "") {
        $(".tbao2").html("Bạn vui lòng nhập thông tin");
        isPass = false;
    } else {
        $(".tbao2").html("");
        isPass = true;
    }
    if (isPass == true && isEmail == true) {
        $.ajax({
            url: "/pj1/signin",
            type: "post",
            data: {
                email: email,
                password: password,
                age: age
            }
        }).then(function(data){
            if(data.error){
                alert(data.message)
            }else{
                alert(data.message)
                window.location.href = "/pj1/home"
            }
        })
    };
});



