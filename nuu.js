var score=0;
var PressBack = 0;
var PressForward = 0;
var PressLeft = 0;
var PressRight = 0;
var PressUp = 0;
var MouseX = 0;
var MouseY = 0;
var kek, kek2;
var koordinati =[40, 50];
var x,x2, x3;
var y,y2, y3;
var firstCoin, secondCoin, bombb;
var lose=false;
var pauss;
var time=60;
var sskin= ["car1.png", "car2.png", "logo1.png", "logo2.png"];
var timeRecreate= [7000, 3500, 3250];
var timeDel= [1750, 875, 625];
var timeCreate= [3500, 1750, 1500];
var timeDel2= [2450, 1225, 975];
var tt1, tt2, tt3, tt4;
tt1=timeRecreate[0];
tt2=timeDel[0];
tt3=timeCreate[0];
tt4=timeDel2[0];
var silka="stock/"+sskin[0];
function uploaded() {
document.location.href="#zatemnenie";
}

function start() {
timer();

pauss=false;
if(lose==false){
	let boom = setTimeout(createBomb, 3000);
	create();
}
}
function pausee() {
pauss=true;
if(bombb==true){
	var bad=document.getElementById("bad");
	var child2=document.getElementById("bomb");
	bad.removeChild(child2);
	bombb=false;
}
 if(firstCoin=true) {
	var d=document.getElementById("e");
	var child=document.getElementById("first");
	d.removeChild(child);
	firstCoin=false;
}
if(secondCoin==true){
var d=document.getElementById("e");
	var child2=document.getElementById("second");
		d.removeChild(child2);
		secondCoin=false;
}
location.href= "#zatemnenie";
alert("your score is "+score);
}
function create(){
if(pauss==false){
ran(1);
	   var d=document.getElementById("e");
    var img=document.createElement("img");
    img.id="first";
    d.appendChild(img);
    img.src="stock/oil.png";
    img.style.position="absolute";
    img.style.top=y+"vh";
    img.style.left=x+"vw";
    img.style.height=5+"vw";
    img.style.width=5+"vw";
    firstCoin=true;
let timerId = setTimeout(recreate, tt1);
}
}
function recreate() {
if(pauss==false){
    ran(2);
	var d=document.getElementById("e");
    var img=document.createElement("img");
    img.id="second";
    d.appendChild(img);
    img.src="stock/oil.png";
    img.style.position="absolute";
    img.style.top=y2+"vh";
    img.style.left=x2+"vw";
    img.style.height=5+"vw";
    img.style.width=5+"vw";
    secondCoin=true;
    let timerId = setTimeout(del, tt2);
}
}
function del(){
	var d=document.getElementById("e");
	var child=document.getElementById("first");
	d.removeChild(child);
	firstCoin=false;
	let timerId = setTimeout(create, tt3);
	let timerId2 = setTimeout(del2, tt4);
	
}
function del2() {
	var d=document.getElementById("e");
	var child2=document.getElementById("second");
		d.removeChild(child2);
		secondCoin=false;
	}
	function createBomb() {
if(pauss==false){
		ran(3);
	var father=document.getElementById("bad");
    var img=document.createElement("img");
    img.id="bomb";
    father.appendChild(img);
    img.src="stock/bomb.png";
    img.style.position="absolute";
    img.style.top=y3+"vh";
    img.style.left=x3+"vw";
    img.style.height=7+"vw";
    img.style.width=7+"vw";
    bombb=true;
   // let delBoom = setTimeout(del3, 50000);
}
	}
	function del3() {
	var bad=document.getElementById("bad");
	var child2=document.getElementById("bomb");
	bad.removeChild(child2);
	bombb=false;
createBomb();
	let recreateBomb = setTimeout(createBomb, 1500);
	}
 function move(p) {
var kek=document.getElementById("block");
switch(p){
		case 3:
		koordinati[0]-=3;
		kek.style.left= koordinati[0]+"vw";
		break;
			case 2:
		koordinati[0]+=3;
		kek.style.left= koordinati[0]+"vw";
		break;
			case 1:
		koordinati[1]-=3;
		kek.style.top= koordinati[1]+"vh";
		break;
			case 4:
		koordinati[1]+=3;
		kek.style.top= koordinati[1]+"vh";
		break;
		}
check();
	}

function check() {
				if((y3-koordinati[1]<=3)&&(y3-koordinati[1]>=1)&&(x3-koordinati[0]<=16)&&(x3-koordinati[0]>=-1)) {
took(3);
				console.log("0");
	}
		 if((y3-koordinati[1]<=12)&&(y3-koordinati[1]>=2)&&(x3-koordinati[0]<=16)&&(x3-koordinati[0]>=-2)) {
				console.log("1");
took(3);
	}
		 if((y3-koordinati[1]<=11)&&(y3-koordinati[1]>=5)&&(x3-koordinati[0]>=-4)&&(x3-koordinati[0]<=0)) {
		took(3);
		console.log("2");
}
	 	 if((y3-koordinati[1]<=5)&&(y3-koordinati[1]>=2)&&(x3-koordinati[0]>=-4)&&(x3-koordinati[0]<=-1)) {
	 	took(3);
	 	console.log("3");
	 }


//oil1
if((y-koordinati[1]<=3)&&(y-koordinati[1]>=1)&&(x-koordinati[0]<=16)&&(x-koordinati[0]>=-1)) {
took(1);
				console.log("1.0");
	}
		 if((y-koordinati[1]<=12)&&(y-koordinati[1]>=2)&&(x-koordinati[0]<=16)&&(x-koordinati[0]>=-2)) {
				console.log("1.1");
took(1);
	}
		 if((y-koordinati[1]<=11)&&(y-koordinati[1]>=5)&&(x-koordinati[0]>=-4)&&(x-koordinati[0]<=0)) {
		took(1);
		console.log("1.2");
}
	 	 if((y-koordinati[1]<=5)&&(y-koordinati[1]>=2)&&(x-koordinati[0]>=-4)&&(x-koordinati[0]<=-1)) {
	 	took(1);
	 	console.log("1.3");
	 }
//oil2
if((y2-koordinati[1]<=3)&&(y2-koordinati[1]>=1)&&(x2-koordinati[0]<=16)&&(x2-koordinati[0]>=-1)) {
took(2);
				console.log("2.0");
	}
		 if((y2-koordinati[1]<=12)&&(y2-koordinati[1]>=2)&&(x2-koordinati[0]<=16)&&(x2-koordinati[0]>=-2)) {
				console.log("2.1");
took(2);
	}
		 if((y2-koordinati[1]<=11)&&(y2-koordinati[1]>=5)&&(x2-koordinati[0]>=-4)&&(x2-koordinati[0]<=0)) {
		took(2);
		console.log("2.2");
}
	 	 if((y2-koordinati[1]<=5)&&(y2-koordinati[1]>=2)&&(x2-koordinati[0]>=-4)&&(x2-koordinati[0]<=-1)) {
	 	took(2);
	 	console.log("2.3");
	 }
}

//ÑÐŸÐ·ÐŽÐ°ÐœÐžÐµ ÑÐ°ÐœÐŽÐŸÐŒÐœÐŸÐ¹ ÐºÐŸÐŸÑÐŽÐžÐœÐ°ÑÑ 

function ran(t) {
    var rand=Math.floor(Math.random()*100);
    var rand2=Math.floor(Math.random()*100);
    if(t==1){
    x=rand;
    y=rand2;
    }
     if(t==2){
    x2=rand;
    y2=rand2;
    }
     if(t==3){
    x3=rand;
    y3=rand2;
    }
    // console.log(rand);
	// console.log(Math.random()*100+1);
}
// ÐÐ±ÑÐ°Ð±ÐŸÑÑÐžÐº ÐœÐ°Ð¶Ð°ÑÐžÑ ÐºÐ»Ð°Ð²ÐžÑ

document.addEventListener("keydown", (event) =>{
	if (event.key == "a"){
        move(3);
		PressLeft = 1;
	}
	if (event.key == "w"){
	move(1);
		PressForward = 1;
	}
	if (event.key == "d"){
	move(2);
		PressRight = 1;
	}
	if (event.key == "s"){
	move(4);
		PressBack = 1;
	}
	if (event.keyCode == 32){
		PressUp = 1;
	}
	if (event.key == "j"){
		create();
	}
	//Ð¿ÑÐŸÐ²ÐµÑÐºÐ° ÑÑÐµÐ» ÐŒÐŸÐœÐµÑÐºÑ(ÐžÐ»Ðž Ð±ÐŸÐŒÐ±Ñ) ÐžÐ»Ðž ÐœÐµÑ 
	// if((koordinati[0]-x<=9)&&(koordinati[0]-x>=-9)&&(koordinati[1]-y<=9)&&(koordinati[1]-y>=-9)&&(firstCoin=true)) {
	// 	took(1);
	// }
	// if((koordinati[0]-x2<=9)&&(koordinati[0]-x2>=-9)&&(koordinati[1]-y2<=9)&&(koordinati[1]-y2>=-9)&&(secondCoin=true)) {
	// 	took(2);
	// }

});
//ÑÑÐœÐºÑÐžÑ, ÑÑÐ°Ð±Ð°ÑÑÐ²Ð°ÑÑÐ°Ñ Ð¿ÑÐž ÑÑÐµÐŽÐ°ÐœÐžÐž ÐŒÐŸÐœÐµÑÐºÐž ÐžÐ»Ðž Ð±ÐŸÐŒÐ±Ñ
function took(wh) {
	switch(wh){
		case 1:
if(firstCoin==true){
	var child=document.getElementById("first");
	child.style.display="none";
	firstCoin=false;
score++;
}
	break;
		case 2:
if(secondCoin==true){
	var child2=document.getElementById("second");
	child2.style.display="none";
	secondCoin=false;
score++;
}
	break;
		case 3:
    alert("Âû ïðîèãðàëè");
	var bad=document.getElementById("bad");
	var child2=document.getElementById("bomb");
	bad.removeChild(child2);
	bombb=false;
location.href= "#zatemnenie";
x3=-1000;
y3=-1000;
	break;
	}
}
// ÐÐ±ÑÐ°Ð±ÐŸÑÑÐžÐº ÐŸÑÐ¶Ð°ÑÐžÑ ÐºÐ»Ð°Ð²ÐžÑ

document.addEventListener("keyup", (event) =>{
	if (event.key == "a"){
		PressLeft = 0;
	}
	if (event.key == "w"){
		PressForward = 0;
	}
	if (event.key == "d"){
		PressRight = 0;
	}
	if (event.key == "s"){
		PressBack = 0;
	}
	if (event.keyCode == 32){
		PressUp = 0;
	}
});
var levell=0;
function level() {
switch(levell) {
case 0:
var l=document.getElementById("level");
l.innerHTML="Легко";
levell=1; 
tt1=timeRecreate[0];
tt2=timeDel[0];
tt3=timeCreate[0];
tt4=timeDel2[0];
time=60;
break;
case 1:
var l=document.getElementById("level");
l.innerHTML="Нормально";
levell=2;
tt1=timeRecreate[1];
tt2=timeDel[1];
tt3=timeCreate[1];
tt4=timeDel2[1];
time=30;
break;
case 2:
var l=document.getElementById("level");
l.innerHTML="Сложно";
levell=3;
tt1=timeRecreate[2];
tt2=timeDel[2];
tt3=timeCreate[2];
tt4=timeDel2[2];
time=20;
break;
case 3:
var l=document.getElementById("level");
l.innerHTML="Легко";
tt1=timeRecreate[0];
tt2=timeDel[0];
tt3=timeCreate[0];
tt4=timeDel2[0];
time=60;
levell=1;
break;

}
}
var skinn=1;
function skin() {
switch(skinn) {
case 1:
var s=document.getElementById("skin");
s.innerHTML="BMW auto";
var k=document.getElementById("block");
k.src="stock/"+sskin[0];
skinn=2;
break;
case 2:
var s=document.getElementById("skin");
s.innerHTML="Subaru auto";
var k=document.getElementById("block");
k.src="stock/"+sskin[1];
skinn=3;
break;
case 3:
var s=document.getElementById("skin");
s.innerHTML="BMW logo";
var k=document.getElementById("block");
k.src="stock/"+sskin[2];
skinn=4;
break;
case 4:
var s=document.getElementById("skin");
s.innerHTML="Subaru logo";
var k=document.getElementById("block");
k.src="stock/"+sskin[3];
skinn=1;
break;
}
} 
var intr;
var vrema;
var u=0;
function timer(){
vrema=time;
u=0;
intr= setInterval(timer2, 1000);
}
function timer2() {
var ti=document.getElementById("timer");
vrema--;
ti.innerHTML=vrema;
u++;
if(u==time) {
pausee();
console.log("pause");
clearInterval(intr);
}
}

