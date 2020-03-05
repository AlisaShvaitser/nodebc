let tempOut,prNum;
prNum=Math.floor((Math.random()*10)+1);
// tempOut=document.getElementById("temp=out");
// tempOut.innerHTML=prNum;
function f1(){
   let num,out;
    num=document.getElementById("mynum").value;
    out=document.getElementById("out");
    if (num==prNum) {out.innerHTML="You right!!!";}
    else if (num>prNum) {out.innerHTML="Your number is too big";}
    else {out.innerHTML="Your number is too small";}
}