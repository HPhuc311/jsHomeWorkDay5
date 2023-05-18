function paymentofMoney(){
    var name = document.getElementById('nameofElectricity').value;
    var number = +document.getElementById('electricityConsumption').value;
    var energyofMoney;
    if(number <= 50){
        energyofMoney = number * 500
    }else if(number > 50 && number <= 100){
        energyofMoney = 50 * 500 + (number - 50) * 650;
    }else if(number > 100 && number <= 200){
        energyofMoney = 50 * 500 + 50 * 650 + (number - 100) * 850;
    }else if(number > 200 && number <= 350){
        energyofMoney = 50 * 500 + 50 * 650 + 100 * 850 + (number - 200) * 1100;
    }else{
        energyofMoney = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (number - 350) * 1300;
    }

    document.getElementById("results1").innerHTML = "Tên khách hàng: " + name
    document.getElementById("results2").innerHTML = new Intl.NumberFormat('vn-VN').format(energyofMoney) + "VND";
}


document.getElementById("btnofResults").onclick = paymentofMoney;