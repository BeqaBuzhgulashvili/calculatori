var cnum = document.getElementsByClassName('c-num')[0];
var cope = document.getElementsByClassName('c-operator')[0];
var intom = document.getElementById('intop');
var inbottom = document.getElementById('inbottom');
var newinbottom;
var newinbottom2;
var sign;

document.getElementById('numid0').style.order = "1";
function puton(numb){
		inbottom.value += numb	
}
function ans(answer){
		if(inbottom.value ==''){
		   alert('type input');
		   }else if(sign == "plus"){
		newinbottom2 = inbottom.value;
		intom.value = inbottom.value;
			inbottom.value = parseInt(newinbottom) + parseInt(newinbottom2);   
	}else if(sign == "minus"){
			 newinbottom2 = inbottom.value;
		intom.value = inbottom.value;
			inbottom.value = newinbottom - newinbottom2;
			 }else if(sign == "divi"){
				newinbottom2 = inbottom.value;
		intom.value = inbottom.value;
			inbottom.value = newinbottom / newinbottom2;
			 }else if(sign == "mul"){
				newinbottom2 = inbottom.value;
		intom.value = inbottom.value;
			inbottom.value = newinbottom * newinbottom2;
			 }
			
			sign ='';
	
}
function opr(opra){
	if(sign != '' && sign != undefined){
		ans();
	}
	else if(opra == "clr"){
			 	intom.value =''
			 	inbottom.value ='';
				newinbottom='';
				newinbottom='';
			 	sign ='';
			 }
	else if(opra == "plus"){
	newinbottom = inbottom.value;
	intom.value = inbottom.value;
	inbottom.value = '';
		sign = "plus";
	}else if(opra == "minus"){
	newinbottom = inbottom.value;
	intom.value = inbottom.value;
	inbottom.value = '';
			 sign = "minus";
			 }else if(opra == "divi"){
	 newinbottom = inbottom.value;
	intom.value = inbottom.value;
	inbottom.value = '';
				sign = "divi";
			 }else if(opra == "mul"){
 	newinbottom = inbottom.value;
	intom.value = inbottom.value;
	inbottom.value = '';
				sign = "mul";
			 }
}
	