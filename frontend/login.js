let Fname;
let Lname;
let Email;
let password;
let rPassword;

$("#signupbtn").click(function(){
    console.log("sdjhf")
    email=$(".email").val();
    password=$(".password").val();
    passwordRepeat=$(".repeat-password").val();
    if(password!=passwordRepeat)
    {
        alert("password is not same !!!");
    }
    console.log(email);
    console.log(password);
    //$(".startquiz").css("display","flex");
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:8300/api/signup",
        data:{
            email: email,
            password:password
        },
        success: function(g) {
            console.log("Success");

        },
        error:function(err){
            console.log("fail")
    }
})
})