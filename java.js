let x,o;
let win = false;
noOfTimes = 1;
function tlx(){
    document.getElementsByClassName("tl").innerHTML="x";
    document.getElementById("myid").innerHTML="id x"
}
function tmx(){
    document.getElementsByClassName("tm").innerHTML="x";
}
function funn(idd){
    while (!win) {
        if (noOfTimes%2 == 0) {
            document.getElementById(idd).innerHTML="O";
            console.log("O");
            document.getElementById("mass").innerHTML="دلوقتي دور&nbsp<b>X</b>";
        }else{
            document.getElementById(idd).innerHTML="X";
            console.log("X");
            document.getElementById("mass").innerHTML="دلوقتي دور&nbsp<b>O</b>";
        }
        
        
        
        if (win) {
            document.write("x win");
        }
        noOfTimes++;
        break;
    }
}
function reStart() {
    document.getElementById("tl").innerHTML="&nbsp&nbsp";
    document.getElementById("tm").innerHTML="&nbsp&nbsp";
    document.getElementById("tr").innerHTML="&nbsp&nbsp";
    document.getElementById("ml").innerHTML="&nbsp&nbsp";
    document.getElementById("mm").innerHTML="&nbsp&nbsp";
    document.getElementById("mr").innerHTML="&nbsp&nbsp";
    document.getElementById("bl").innerHTML="&nbsp&nbsp";
    document.getElementById("bm").innerHTML="&nbsp&nbsp";
    document.getElementById("br").innerHTML="&nbsp&nbsp";
}
function funnn(idd){
    // document.getElementsByClassName(clas).innerHTML="x";
    document.getElementById(idd).innerHTML="X";
}
