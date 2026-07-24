
document.getElementById("btn").onclick= function(){
    randomno = Math.floor(Math.random() *10001);
    document.getElementById("number").textContent = randomno;
}
