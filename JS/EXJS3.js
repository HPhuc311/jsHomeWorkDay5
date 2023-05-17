function taxofIncome(){
    var name = document.getElementById("name").value;
    var totalofIncome = +document.getElementById("totalofIncome").value;
    var memberofDependent = +document.getElementById("memberofDependent").value;
    var tax = totalofIncome - 4e+6 - memberofDependent * 16e+5;
    if(tax <= 60e+6){
        income = tax * 0.05
    }else if(tax > 60e+6 && tax <= 120e+6){
        income = tax * 0.05 + (tax - 60e+6) * 0.05;     
    }else if(tax > 120e+6 && tax <= 210e+6){
        income = tax * 0.05 + (tax - 60e+6) * 0.05 + (tax - 120e+6) * 0.05;
    }else if(tax > 210 && tax <= 384){
        income = tax * 0.05 + (tax - 60e+6) * 0.05 + (tax - 120e+6) * 0.05 + (tax - 210e+6) * 0.05;
    }else if(tax > 384 && tax <= 624){
        income = tax * 0.05 + (tax - 60e+6) * 0.05 + (tax - 120e+6) * 0.1 + (tax - 210e+6) * 0.05 + (tax - 384e+6) * 0.05;
    }else if(tax > 624 && tax <= 960){
        income = tax * 0.05 + (tax - 60e+6) * 0.05 + (tax - 120e+6) * 0.1 + (tax - 210e+6) * 0.05 + (tax - 384e+6) * 0.05 + (tax - 624e+6) * 0.05;
    }else{
        income = tax * 0.05 + (tax - 60e+6) * 0.05 + (tax - 120e+6) * 0.1 + (tax - 210e+6) * 0.1 + (tax - 384e+6) * 0.05 + (tax - 624e+6) * 0.05 + (tax - 960e+6) * 0.05;
    }

    document.getElementById('results1').innerHTML = "Tên khách hàng:" + name
    document.getElementById('results2').innerHTML = "Thuế thu nhập cá nhân của bạn là:" + new Intl.NumberFormat('vn-VN').format(income) + "VND"
}

document.getElementById("btnofResults").onclick = taxofIncome;