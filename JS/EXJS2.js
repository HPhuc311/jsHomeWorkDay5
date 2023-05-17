function paymentofMoney(){
    var name = document.getElementById('nameofElectricity').value;
    var number = +document.getElementById('electricityConsumption').value;
    var energyofMoney;
    if(number <= 50){
        energyofMoney = number * 500
    }else if(number >50 && number <= 100){
        energyofMoney = number * 500 + (number - 50) * 150;
    }else if(number >= 100 && number <= 200){
        energyofMoney = number * 500 + (number - 50) * 150 + (number - 100) * 200;
    }else if(number >= 200 && number <= 350){
        energyofMoney = number * 500 + (number - 50) * 150 + (number - 100) * 200 + (number - 200) * 250;
    }else{
        energyofMoney = number * 500 + (number - 50) * 150 + (number - 100) * 200 + (number - 200) * 250 + (number - 350) * 200;
    }

    document.getElementById("results1").innerHTML = "Tên khách hàng: " + name
    document.getElementById("results2").innerHTML = new Intl.NumberFormat('vn-VN').format(energyofMoney) + "VND";
}


document.getElementById("btnofResults").onclick = paymentofMoney;