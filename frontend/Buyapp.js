$(document).ready(function(){
$.ajax({
    url:"http://localhost:8300/api",

}).done(function(newdata){
    data=newdata;
    console.log(data);
    $("#maindiv").show();
        data.forEach(i => {
        //     $("#maindiv").append(`<div id="jobResults" style="border-bottom: 1px solid">
        //     <p><span style="color:black">User Name : </span><span>${i.Username}</span></p>
        //     <p><span style="color:black">Phone : </span><span>${i.Mobile}</span></p>
        //     <p><span style="color:black">City : </span><span>${i.City}</span></p>
        //     <p><span style="color:black">Pin : </span><span>${i.Pin}</span></p>
        //     <p><span style="color:black">Car Model : </span><span>${i.Car}</span></p>
        //     <p><span style="color:black">Model Year : </span><span>${i.Modelyear}</span></p>
        //     <p><span style="color:black">KMs : </span><span>${i.Kms}</span></p>
        //     <p><span style="color:black">Insurance : </span><span>${i.Insurance}</span></p>
        //     <p><span style="color:black">Woners : </span><span>${i.Woners}</span></p>
        // </div>`)
        $("#maindiv").append(`<ul class="list-group mb-4 shadow-sm">
        <li class="list-group-item bg-dark text-light font-weight-bold">${i.Car}</li>
        <li class="list-group-item">User Name: ${i.Username}</li>
        <li class="list-group-item">Phone: ${i.Mobile}</li>
        <li class="list-group-item">City: ${i.City}</li>
        <li class="list-group-item">Pin: ${i.Pin}</li>  
        <li class="list-group-item">Model Year: ${i.Modelyear}</li>    
        <li class="list-group-item">KMs: ${i.Kms}</li>
        <li class="list-group-item">Insurance: ${i.Insurance}</li>
        <li class="list-group-item">Owners: ${i.Woners}</li>
      </ul> `)
        });
        
    
})
})
