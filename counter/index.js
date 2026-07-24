let count =0;
document.getElementById("counter").textContent = count;

document.getElementById("increasebtn").onclick= function(){
    count++;
    document.getElementById("counter").textContent = count;
}
document.getElementById("decreasebtn").onclick= function(){
    if (count!=0){
    count--;
    document.getElementById("counter").textContent = count;}
}
document.getElementById("resetbtn").onclick= function(){
    count=0;
    document.getElementById("counter").textContent = count;
}