function Check(){
    let carModel=document.getElementById("carModel");
    let CarModel=carModel.options[carModel.selectedIndex].value;

    let carYear=document.getElementById("carYear");
    let CarYear=carYear.options[carYear.selectedIndex].value;
    
    let carKm = document.getElementById("carKm");
    let CarKm =  carKm.options[carKm.selectedIndex].value;

    let carInsurance = document.getElementById("carInsurance");
    let CarInsurance = carInsurance.options[carInsurance.selectedIndex].value;
    
    let carWoner = document.getElementById("carWoner");
    let CarWoner = carWoner.options[carWoner.selectedIndex].value;
    
    const arr = [{ car: "Hyundai i20", price: 600000},
                 { car: "Toyota Corola", price: 900000}, 
                 { car: "Scoda Rapid", price: 1100000},
                 { car: "Ford Endevour", price: 2100000},
                 { car: "Jeep Compas", price: 1600000}
                ];

    let op=arr.filter((a)=>a.car===CarModel);
    let price = op[0].price;
    if(CarYear==2015){
        price-=price*0.1;
    }
    if(CarYear==2013){
        price-=price*0.12;
    }
    if(CarYear==2010){
        price-=price*0.13;
    }
    if(CarKm==5000){
        price-=price*0.04;
    }
    if(CarKm==10000){
        price-=price*0.06;
    }
    if(CarKm==20000){
        price-=price*0.08;
    }
    if(CarKm==30000){
        price-=price*0.9;
    }
    if(CarInsurance=="no"){
        price-=price*0.4;
    }    
    if(CarWoner==2){
        price-=price*0.2;
    }
    document.getElementById("inner_div").style.display="none";
    document.getElementById("outputbox").style.display="block";    
    document.getElementById("showPrice").innerHTML="&#x20b9"+" "+price+" - "+(price+29560);
    console.log(price);

    let b = {}
    b.price =;
    b.year = 
    
     
}