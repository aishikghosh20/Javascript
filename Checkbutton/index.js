const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const Amexbtn = document.getElementById("Amexbtn");
const submit = document.getElementById("submit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

submit.onclick= function(){
    if (mycheckbox.checked){
        subresult.textContent = `You are subscribed!`;
    }
    else{
        subresult.textContent = `You are not subscribed!`;
    }

    if (visabtn.checked){
        paymentresult.textContent = `You are paid with Visa`;
    }
    else if(mastercardbtn.checked){
        paymentresult.textContent = `You are paid with MasterCard`;
    }
    else if(Amexbtn.checked){
        paymentresult.textContent = `You are paid with AMEX`;
    }
    else{
        paymentresult.textContent = `Please select a payment type`;
    }
}
