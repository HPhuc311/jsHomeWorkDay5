function taxofIncome(){
    var name = document.getElementById("name").value;
    var totalofIncome = +document.getElementById("totalofIncome").value;
    var memberofDependent = +document.getElementById("memberofDependent").value;
    var tax = totalofIncome - 4e+6 - memberofDependent * 16e+5;
    if(tax <= 60e+6){
        income = tax * 0.05
    }else if(tax >= 60e+6 && tax <= 120e+6){
        income = 60e+6 * 0.05 + (tax - 60e+6) * 0.1;     
    }else if(tax >= 120e+6 && tax <= 210e+6){
        income = 60e+6 * 0.05 + 60e+6 * 0.1 + (tax - 120e+6) * 0.15;
    }else if(tax >= 210 && tax <= 384){
        income = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (tax - 210e+6) * 0.2;
    }else if(tax >= 384 && tax <= 624){
        income = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (tax - 384e+6) * 0.25;
    }else if(tax >= 624 && tax <= 960){
        income = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (tax - 624e+6) * 0.3;
    }else{
        income = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (tax - 960e+6) * 0.35;
    }

    document.getElementById('results1').innerHTML = "Tên khách hàng:" + name
    document.getElementById('results2').innerHTML = "Thuế thu nhập cá nhân của bạn là:" + new Intl.NumberFormat('vn-VN').format(income) + "VND"
}

document.getElementById("btnofResults").onclick = taxofIncome;