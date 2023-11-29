const qrText = document.getElementById("qr-text");
const qrBox = document.getElementById("qr-box");
const qrImg = document.getElementById("qr-img");
let interval =0;
function generateCode(){

    if(qrText.value.length >0){
        qrImg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + qrText.value;

        qrBox.classList.add('show-img');
    }else{
       qrText.classList.add("error");
        let interval= setInterval(()=>{
            qrText.classList.remove("error");
            clearInterval(interval);
        },1000)
    }
   
}