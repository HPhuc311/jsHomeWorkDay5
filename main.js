function calcArea(area){
    if(area==="A") return 2;
    else if(area==="B") return 1;
    else if(area==="C") return 0.5;
    return 0;
}
function calcObject(object){
    if(object===1) return 2.5;
    else if(object===2) return 1.5;
    else if(object===3) return 1;
    return 0;
}

function sumofSubject() {
    var benchmark = +document.getElementById('benchmark').value;
    var subjectofFitst = +document.getElementById('subjectofFitst').value;
    var subjectofSecond = +document.getElementById('subjectofSecond').value;
    var subjectofThird = +document.getElementById('subjectofThird').value;
    var areaofType = document.getElementById('areaofType').value;
    var objectofType = document.getElementById('objectofType').value;

    var areaType = calcArea(areaofType);
    var objectType = calcArea(objectofType);

    var total = subjectofFitst + subjectofSecond + subjectofThird + areaType + objectType;
    document.getElementById('results1').innerHTML = "Tổng số điểm của bạn là:" +  total;
    if(
        total >= benchmark &&
        subjectofFitst !== 0 &&
        subjectofSecond !== 0 &&
        subjectofThird !== 0
    ){
        document.getElementById('results2').innerHTML = "Chúc mừng bạn đã đậu."
    }else{
        document.getElementById('results2').innerHTML = "Hãy cố gắng hơn nhé."
    }

}


document.getElementById('btnofResults').onclick = sumofSubject;