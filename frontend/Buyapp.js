$(document).ready(function(){
$.ajax({
    url:"http://localhost:8300/api/allcars",

}).done(function(newdata){
    data=newdata;
    console.log(data);
    $("#maindiv").show();
        data.forEach(i => {
        $("#maindiv").append(`<ul class="list-group mb-4 shadow-sm">
        <li class="list-group-item bg-dark text-light font-weight-bold">${i.car}</li>
        <li class="list-group-item">User Name: ${i.username}</li>
        <li class="list-group-item">Phone: ${i.mobile}</li>
        <li class="list-group-item">City: ${i.city}</li>
        <li class="list-group-item">Pin: ${i.pin}</li>  
        <li class="list-group-item">Model Year: ${i.modelyear}</li>    
        <li class="list-group-item">KMs: ${i.kms}</li>
        <li class="list-group-item">Insurance: ${i.insurance}</li>
        <li class="list-group-item">Owners: ${i.owners}</li>
      </ul> `)
        });
        
    
})
})
