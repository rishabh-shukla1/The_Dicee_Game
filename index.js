var r=Math.floor((Math.random()*6))+1;

var selectpic="dice"+r+".png";
var image="images/"+selectpic;

var d=document.querySelectorAll("img")[0];
d.setAttribute("src",image);
var r1=Math.floor((Math.random()*6))+1;

var selectpic1="dice"+r1+".png";
var image1="images/"+selectpic1;

var d1=document.querySelectorAll("img")[1];
d1.setAttribute("src",image1);

if(r>r1)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins";

}
else if(r<r1)
{
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩Draw!🚩";
}


