let xWin,oWin;
let win = false;
noOfTimes = 1;
let player = "x";
let owin = "O فاز!", xwin = "X فاز!";
let xtl = false, xtm = false , xtr = false;
let xml = false, xmm = false , xmr = false;
let xbl = false, xbm = false , xbr = false;
let otl = false, otm = false , otr = false;
let oml = false, omm = false , omr = false;
let obl = false, obm = false , obr = false;
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
            switch (idd) {
            case "tl":
                otl = true;
                break;
            case "tm":
                otm = true;
                break;
            case "tr":
                otr = true;
                break;
            case "ml":
                oml = true;
                break;
            case "mm":
                omm = true;
                break;
            case "mr":
                omr = true;
                break;
            case "bl":
                obl = true;
                break;
            case "bm":
                obm = true;
                break;
            case "br":
                obr = true;
                break;
        }
            document.getElementById("mass").innerHTML="دلوقتي دور&nbsp<b>X</b>";
        }else{
            document.getElementById(idd).innerHTML="X";
            console.log("X");
            switch (idd) {
            case "tl":
                xtl = true;
                break;
            case "tm":
                xtm = true;
                break;
            case "tr":
                xtr = true;
                break;
            case "ml":
                xml = true;
                break;
            case "mm":
                xmm = true;
                break;
            case "mr":
                xmr = true;
                break;
            case "bl":
                xbl = true;
                break;
            case "bm":
                xbm = true;
                break;
            case "br":
                xbr = true;
                break;
        }
            document.getElementById("mass").innerHTML="دلوقتي دور&nbsp<b>O</b>";
        }
        ///////////////////////////////
        if (xtl == true && xtm == true && xtr == true) {
            win == true;
            document.getElementById("mass").innerHTML="xxxxxxxxx";
        }
        if (xml == true && xmm == true && xmr == true) {
            win == true;
            document.getElementById("mass").innerHTML=xwin;
        }
        if (xbl == true && xbm == true && xbr == true) {
            win == true;
            document.getElementById("mass").innerHTML=xwin;
        }
        ////////////////////////////////
        if (xtl == true && xml == true && xbl == true) {
            win == true;
            document.getElementById("mass").innerHTML=xwin;
        }
        if (xtm == true && xmm == true && xbm == true) {
            win == true;
            document.getElementById("mass").innerHTML=xwin;
        }
        if (xtr == true && xmr == true && xbr == true) {
            win == true;
            document.getElementById("mass").innerHTML=xwin;
        }
        /////////////////////////////////
        if (xtl == true && xmm == true && xbr == true) {
            win == true;
            document.getElementById("mass").innerHTML=xwin;
        }
        if (xbl == true && xmm == true && xtr == true) {
            win == true;
            document.getElementById("mass").innerHTML=xwin;
        }
        /////////////      O     //////////////////
        if (xtl == true && otm == true && otr == true) {
            win == true;
            document.getElementById("mass").innerHTML=owin;
        }
        if (oml == true && omm == true && omr == true) {
            win == true;
            document.getElementById("mass").innerHTML=owin;
        }
        if (obl == true && obm == true && obr == true) {
            win == true;
            document.getElementById("mass").innerHTML=owin;
        }
        ////////////////////////////////
        if (otl == true && oml == true && obl == true) {
            win == true;
            document.getElementById("mass").innerHTML=owin;
        }
        if (otm == true && omm == true && obm == true) {
            win == true;
            document.getElementById("mass").innerHTML=owin;
        }
        if (otr == true && omr == true && obr == true) {
            win == true;
            document.getElementById("mass").innerHTML=owin;
        }
        /////////////////////////////////
        if (otl == true && omm == true && obr == true) {
            win == true;
            document.getElementById("mass").innerHTML=owin;
        }
        if (obl == true && omm == true && otr == true) {
            win == true;
            document.getElementById("mass").innerHTML=owin;
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
    noOfTimes = 1;
    document.getElementById("mass").innerHTML="ابدأ تاني!&nbspدور&nbsp<b>X</b>";
}
function funnn(idd){
    // document.getElementsByClassName(clas).innerHTML="x";
    document.getElementById(idd).innerHTML="X";
}
