$(document).ready(function(){
$.ajax({
    url:"http://localhost:8300/api",

}).done(function(newdata){
    data=newdata;
    console.log(data);
    $("#maindiv").show();
        data.forEach(i => {
            $("#maindiv").append(`<div id="jobResults" style="border-bottom: 1px solid">
            <p><span style="color:black">User Name : </span><span>${i.Username}</span></p>
            <p><span style="color:black">Phone : </span><span>${i.Mobile}</span></p>
            <p><span style="color:black">City : </span><span>${i.City}</span></p>
            <p><span style="color:black">Pin : </span><span>${i.Pin}</span></p>
            <p><span style="color:black">Car Model : </span><span>${i.Car}</span></p>
            <p><span style="color:black">Model Year : </span><span>${i.Modelyear}</span></p>
            <p><span style="color:black">KMs : </span><span>${i.Kms}</span></p>
            <p><span style="color:black">Insurance : </span><span>${i.Insurance}</span></p>
            <p><span style="color:black">Woners : </span><span>${i.Woners}</span></p>
        </div>`)
        });
        
    
})
})
