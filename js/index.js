window.onload=function(){
	let tou5=document.getElementsByClassName("tou5")[0];
	let tou51=document.getElementsByClassName("tou51")[0];
	tou5.onmouseenter=function(){
		tou51.style.height="98px";
		tou51.style.boxShadow="0px 2px 10px 2px rgba(0,0,0,0.3)";
		tou51.style.zIndex="1";
	}
	tou5.onmouseleave=function(){
		tou51.style.height="0px";
		tou51.style.boxShadow="none";
		tou51.style.zIndex="0";
	}
	let cd=document.getElementsByClassName("cd")[0];
	let lis=cd.getElementsByTagName("li");
	let cdd=document.getElementsByClassName("cdd");
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<lis.length;j++){
				cdd[j].style.display="none";
			}
			   cdd[i].style.display="block";	
			}
		lis[i].onmouseleave=function(){
			cdd[i].style.display="none";
		}
	}
	function xxk(a1){
	let dphs=document.getElementsByClassName("dphs")[a1];
	let a=dphs.getElementsByTagName("span");
	let dphxy=document.getElementsByClassName("dphxy")[a1];
	let b=dphxy.getElementsByTagName("ul");
	b[0].style.display="block";
	for(let i=0;i<a.length;i++){
		a[i].onmouseenter=function(){
			for(let j=0;j<a.length;j++){
				b[j].style.display="none";
			}
			b[i].style.display="block";
		}
	}
	}
	xxk(0);
	xxk(1);
	xxk(2);
	xxk(3);
	xxk(4);
	let dh1=document.getElementsByClassName("dh1")[0];
	let aa=dh1.getElementsByTagName("a");
	let dhxl=document.getElementsByClassName("dhxl");
	for(let i=0;i<aa.length;i++){
		aa[i].onmouseenter=function(){
			for(let j=0;j<aa.length;j++){
				dhxl[j].style.height="0px";
				dhxl[j].style.boxShadow="none";
				dhxl[j].style.borderTop="none";
				dhxl[i].style.zIndex="0";
			}
			   dhxl[i].style.height="240px";
			   dhxl[i].style.boxShadow="3px 5px 10px 3px rgba(0,0,0,0.2)";
			   dhxl[i].style.borderTop="1px solid #dedede";
			   dhxl[i].style.zIndex="50";
			}
		aa[i].onmouseleave=function(){
			dhxl[i].style.height="0px";
			dhxl[i].style.boxShadow="none";
			dhxl[i].style.borderTop="none";
			dhxl[i].style.zIndex="0";
		}
	}
	let li1=document.querySelectorAll(".imgbox li");
	let bn=document.querySelectorAll(".bn li");
	let banner=document.querySelector(".banner");
	let fxz=document.querySelector(".fxz");
	let fxy=document.querySelector(".fxy");
	let index=0;
	let t=setInterval(move,2000);
	li1[0].style.zIndex=10;
	bn[0].className="hot";
	function move(){
		index++;
		if(index==li1.length){
			index=0;
		}
		li1.forEach(function(v,index,obj){
			v.style.zIndex=5;
		})
		bn.forEach(function(v,index,obj){
			v.className="";
		})
		li1[index].style.zIndex=10;
		bn[index].className="hot";
	}
	function movel(){
		index--;
		if(index<0){
			index=li1.length-1;
		}
		li1.forEach(function(v,index,obj){
			v.style.zIndex=5;
		})
		bn.forEach(function(v,index,obj){
			v.className="";
		})
		li1[index].style.zIndex=10;
		bn[index].className="hot";
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	fxy.onclick=function(){
		move();
	}
	fxz.onclick=function(){
		movel();
	}
	for(let i=0;i<bn.length;i++){
		bn[i].onclick=function(){
			li1.forEach(function(v,index,obj){
				v.style.zIndex=5;
			})
			bn.forEach(function(v,index,obj){
				v.className="";
			})
			li1[i].style.zIndex=10;
			bn[i].className="hot";
			index=i;	
		}
	}
	function ssw(num){
	let hzb1=document.querySelectorAll(".hzb1")[num];
	let hzb=hzb1.querySelectorAll(".hzb");
	let nrx1=document.querySelectorAll(".nrx1")[num];
	let lbul=document.querySelectorAll(".nrx1 ul")[num];
	let lbdd=lbul.querySelectorAll("li");
	let diz=document.querySelectorAll(".diz")[num];
	let diy=document.querySelectorAll(".diy")[num];
	console.log(hzb,hzb1,lbul,nrx1,lbdd,diz,diy)
	let boxwidth=parseInt(window.getComputedStyle(hzb1,null).width);
	
	let current=0,next=0;
	let flag=true;
	lbdd[0].className="ho";
	function val1(){
		next++;
		if(next==hzb.length){
			next=0;
		}
		lbdd[current].classList.remove("ho");
		lbdd[next].classList.add("ho");
		hzb[next].style.left=boxwidth+"px";
		animate(hzb[current],{left:-boxwidth});
		animate(hzb[next],{left:0},function(){
			flag=true;
		});
		current=next;
	}
	function val2(){
		next--;
		if(next<0){
			next=hzb.length-1;
		}
		lbdd[current].classList.remove("ho");
		lbdd[next].classList.add("ho");
		hzb[next].style.left=-boxwidth+"px";
		animate(hzb[current],{left:boxwidth});
		animate(hzb[next],{left:0},function(){
			flag=true;
		});
		current=next;
	}
	lbdd.forEach(function(v,index,obj){
		v.onclick=function(){
			if(current==index){
				return
			}
			lbdd[current].classList.remove("ho");
			lbdd[index].classList.add("ho");
			if(current>index){
				hzb[index].style.left=-boxwidth+"px";
				animate(hzb[current],{left:boxwidth});
				animate(hzb[index],{left:0});
			}
			else if(current<index){
				hzb[index].style.left=boxwidth+"px";
				animate(hzb[current],{left:-boxwidth});
				animate(hzb[index],{left:0});
			}
			current=next=index;
		}
		
	})
	diz.onclick=function(){
		if(!flag){
			return;
		}
		if(next==0){
			next=0;
			return;
		}

		flag=false;

		val2();
	}
	diy.onclick=function(){
		if(!flag){
			return;
		}
		if(next==hzb.length-1){
			next=hzb.length-1;
			return;
		}
		flag=false;
		val1();
	}
}
ssw(0);
ssw(1);
ssw(2);
ssw(3);
	let sjsy1=document.querySelector(".sjsy1");
	let sjsy2=document.querySelector(".sjsy2");
	let sjx=document.querySelector(".sjx");
	let ul=document.querySelector(".sjx ul");
	
	let box=parseInt(getComputedStyle(ul,null).width)/3;
	let times=0;
	sjsy2.onclick=function(){
		times++;
			if(times==3){
				times=2;
			}
		ul.style.transform=`translateX(${-box*times}px)`;
	}
	sjsy1.onclick=function(){
		times--;
			if(times<0){
				times=0;
			}
		ul.style.transform=`translateX(${-box*times}px)`;
	}
}