function myFunction(){
    var selectofObject= +document.getElementById("selectofObject").value;

    if(selectofObject === 2){
        document.getElementById("connectofNumber").style.display = "block";
    }else if(selectofObject === 1){
        document.getElementById("connectofNumber").style.display = "none";
    }else{
        document.getElementById("connectofNumber").style.display = "none";
    }

}

function serveofHome(){
    var channel = +document.getElementById("channel").value;
    var invoiceofProcess = 4.5
    var serviceofBasic = 20.5
    var rentalofChannel = channel * 7.5
    var fee = invoiceofProcess + serviceofBasic + rentalofChannel
    document.getElementById("results2").innerHTML = "Tiền cáp: " + "$" + parseFloat(fee).toFixed(2);
}
function serveofBusiness(){
    var channel = +document.getElementById("channel").value;
    var number = +document.getElementById("number").value;
    var invoiceofProcess = 15
    var serviceofBasic = 75
    var rentalofChannel = channel * 50
    if(number < 10){
        var fee = invoiceofProcess + serviceofBasic + rentalofChannel
        document.getElementById("results2").innerHTML = "Tiền cáp: " + "$" + parseFloat(fee).toFixed(2);
    }else{
        var fee = invoiceofProcess + serviceofBasic + rentalofChannel + (number - 10) * 5
        document.getElementById("results2").innerHTML = "Tiền cáp: " + "$" + parseFloat(fee).toFixed(2);
    }
}

function serve(){
    var userofNumber = document.getElementById('userofNumber').value;
    var selectofObject= +document.getElementById("selectofObject").value;
    if(selectofObject === 1){
        serveofHome()
    }else if(selectofObject === 2){
        serveofBusiness()
    }else{
        alert("Vui lòng chọn loại khách hàng!")
        return;
    }
   
    document.getElementById("results1").innerHTML ="Mã khách hàng là: " + userofNumber;
}
document.getElementById("btnofResults").onclick = serve;