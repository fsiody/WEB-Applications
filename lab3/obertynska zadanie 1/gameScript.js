console.log(" HELLO " );

function plusOne(){
    var curr=parseInt(document.getElementById('n').innerText,10)+1;
    var s=stp(curr,50);
    if(!s) {
        document.getElementById('n').innerHTML=curr;
        console.log(+1)
    }
    else{
        alert("You won!")
    }
}
function plusTwo(){
    var curr=parseInt(document.getElementById('n').innerText,10)+1;
    var s=stp(curr,40);
    if(!s){
        document.getElementById('n').innerHTML=curr;
        console.log(+2 )
    }
}
function plusFive(){
    var curr=parseInt(document.getElementById('n').innerText,10)+3;
    var s=stp(curr,30);
    if(!s){
        document.getElementById('n').innerHTML=curr;
        console.log(+5 )
    }
}

function stp(curr, stp){
    console.log("STOP????",curr,stp);
    if(curr>=stp) {
        window.event.stopPropagation();
        console.log("STP");
        return true;
    }
    return false;
}

function start(){
    result = prompt("What is your name?");
    alert("Ok, tets play! ]:D");
    reset();
}

function reset(){
    document.getElementById("n").innerHTML=0;
    console.log(" RESET " );
};
        
function changeIm(img){
    console.log("trying change im...");
    var imSrc=document.getElementById("im").getAttribute("src");
    if(imSrc=="files/pic1.jpg") document.getElementById("im").setAttribute("src","files/pic2.jpg");
    if(imSrc=="files/pic2.jpg") document.getElementById("im").setAttribute("src","files/pic3.jpg");
    if(imSrc=="files/pic3.jpg") document.getElementById("im").setAttribute("src","files/pic1.jpg");
    console.log("change im");
}