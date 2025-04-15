cash = window.prompt("😏تدفع كام");
if (cash >= 100){
  document.write("<h1 class='statement' id='statement-id'>👌أنت شخص مش منوفي</h1>");
}else{
  document.write("<h1 class='statementm' id='statement-id'>😒أنت شخص منوفي</h1>");
}
// if (cash >= 100){
//   document.getElementById("statement-id").innerHTML="👌أنت شخص مش منوفس";
// }else{
//   document.getElementById("statement-id").innerHTML="😁أنت شخص منوفس";
// }
