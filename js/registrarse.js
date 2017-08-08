function registrar(){
	var a;
	var b;
	var c;
	var arroba;
	arroba=/@/;
	var puntito;
	puntito=/./;
	a=document.getElementById("nombre").value;
	b=document.getElementById("correo").value;
	c=document.getElementById("contra").value;
	if(a!=""&&b!=""&&c!=""){
			if((puntito.test(b)!=false)&&(arroba.test(b)!=false)){
					alert("funciono");
			}else{
				alert("Ingrese correctamente el correo electrónico");
			}
	}else{
		alert("Verifique que los campos esten completados");
	}
}