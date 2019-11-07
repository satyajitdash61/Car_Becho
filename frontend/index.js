let CarModel;
let CarYear;
let CarKm;
let CarInsurance;
let CarWoner;

// validating
function Check(){
    let carModel=document.getElementById("carModel");
    CarModel=carModel.options[carModel.selectedIndex].value;
    if(CarModel==="none"){
        $("#ModelRequired").show();
    }
    else{
        $("#ModelRequired").hide();
        CY();
    }
    }
    function CY(){
    let carYear=document.getElementById("carYear");
    CarYear=carYear.options[carYear.selectedIndex].value;
    if(CarYear==="none"){
        $("#YearRequired").show();
    }
    else{
        $("#YearRequired").hide();
        kms();
    }
    }
    function kms(){
    let carKm = document.getElementById("carKm");
    CarKm =  carKm.options[carKm.selectedIndex].value;
    if(CarKm==="none"){
        $("#KmRequired").show();
    }
    else{
        $("#KmRequired").hide();
        insu();
    }
    }
    function insu(){
    let carInsurance = document.getElementById("carInsurance");
    CarInsurance = carInsurance.options[carInsurance.selectedIndex].value;
    if(CarInsurance==="none"){
        $("#InsRequired").show();
    }
    else{
        $("#InsRequired").hide();
        ownernum();
    }
    }
    function ownernum(){
    let carWoner = document.getElementById("carWoner");
    CarWoner = carWoner.options[carWoner.selectedIndex].value;
    if(CarWoner==="none"){
        $("#OwnerRequired").show();
    }
    else{
        $("#OwnerRequired").hide();
        fun();
    }
    }
sending data to backend
    function fun(){
// appending all data in a object
    let b = {};
    b.car = CarModel;
    b.Car_Year = CarYear;
    b.Car_Km = CarKm;
    b.Car_Insurance = CarInsurance;
    b.Car_Owner = CarWoner;
    b = JSON.stringify(b);
    // b = "hello";
    $.ajax({
        type: "GET",
        // dataType: "json",
        url: "http://localhost:8300/api/calculation/"+b,
        
        success: function(g) {
            let price=parseInt(g.price)
            console.log(price);
            document.getElementById("inner_div").style.display="none";
            document.getElementById("outputbox").style.display="block";    
            document.getElementById("showPrice").innerHTML="&#x20b9"+" "+price+" - "+(price+29560);
        },
        error:function(err){
            console.log("fail")
            alert("check your Internet Connection")
    }
    })
    
}
