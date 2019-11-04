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
    console.log(username);
    console.log(password);
    //$(".startquiz").css("display","flex");
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:8000/",
        data:{
            Username:username,
            Password:password
        },
        error:function(err){
            console.log("fail")
    }
    
    })
})