
let userName;
let mobile;
let city;
let pin;
let car;
let modelYear;
let KMs;
let insurance;
let woners;
function updatedb(){
    userName=document.getElementById("inputName").value;
    console.log(userName);
    if(userName===""){
        $("#UserNameRequired").show();
    }
    else{
        $("#UserNameRequired").hide();
        mob();
    }
}
function mob(){
    mobile=document.getElementById("inputMobile").value;
    console.log(mobile);
    if(mobile===""){
        $("#MobileRequired").show();
    }
    else{
        $("#MobileRequired").hide();
        cityName();
    }
}
function cityName(){
    city=document.getElementById("inputCity").value;
    console.log(city);
    if(city===""){
        $("#CityRequired").show();
    }
    else{
        $("#CityRequired").hide();
        pinNumber();
    }
}
function pinNumber(){
    pin=document.getElementById("inputPin").value;
    console.log(pin);
    if(pin===""){
        $("#PinRequired").show();
    }
    else{
        $("#PinRequired").hide();
        carName();
    }
}
function carName(){
    car=document.getElementById("inputCar").value;
    console.log(car);
    if(car===""){
        $("#selectCarRequired").show();
    }
    else{
        $("#selectCarRequired").hide();
        year();
    }
}
function year(){
    // modelYear=document.getElementById("inputYear").value;
    let my = document.getElementById("inputYear");
    modelYear = my.options[my.selectedIndex].value;
    console.log(modelYear);
    if(modelYear==="none"){
        $("#modelYearRequired").show();
    }
    else{
        $("#modelYearRequired").hide();
        kelometers();
    }
}
function kelometers(){
    KMs=document.getElementById("inputKM").value;
    console.log(KMs);
    if(KMs===""){
        $("#KMsRequired").show();
    }
    else{
        $("#KMsRequired").hide();
        insuranceValidate();
    }
}
function insuranceValidate(){
    let ins = document.getElementById("inputInsurance");
    insurance = ins.options[ins.selectedIndex].value;
    // insurance=document.getElementById("inputInsurance").value;
    console.log(insurance);
    if(insurance==="none"){
        $("#InsuranceRequired").show();
    }
    else{
        $("#InsuranceRequired").hide();
        hands();
    }
}
function hands(){
    let hnd = document.getElementById("inputWoners");
    woners = hnd.options[hnd.selectedIndex].value;
    // woners=document.getElementById("inputWoners").value;
    console.log(woners);
    if(woners==="none"){
        $("#wonership").show();
    }
    else{
        $("#wonership").hide();
        MongoUpdate();
    }
}
function MongoUpdate(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:8300/api/",
        data:{
            Username:userName,
             Mobile:mobile,
             City:city,
             Pin:pin,
             Car:car,
             Modelyear:modelYear,
             Kms:KMs,
             Insurance:insurance,
             Woners:woners,  
        },
        success: function(g) {
            console.log("Success")
            javascipt:document.getElementById('gif').style.display = "flex";
            javascipt:document.getElementById('fullscreen').style.display = "none";
        },
        error:function(err){
            console.log("fail")
            alert("check your Internet Connection")
    }
    })
}
