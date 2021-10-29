var a;
var b;
const audio = document.createElement("audio");
audio.preload = "auto";
audio.src = "recursos/61.mp3";
document.body.appendChild(audio);
function empezar() {
	document.getElementById("mensaje").removeAttribute("hidden");
	document.getElementById("mensaje").removeAttribute("style");
	document.getElementById("compuertas").removeAttribute("hidden");
	document.getElementById("siguiente").setAttribute("hidden","");
	}
function atras(){
window.history.back(empezar());
}

function or_encender() {
	document.getElementById("or_img").src="recursos/OR_encendido.png";
	document.getElementById("mensaje").innerHTML="<p class='titulo'>Compuerta OR</p><br><p>La compuerta O lógica o compuerta OR es una las compuertas más simples dentro de la Electrónica Digital</p>";

}
function or_apagar() {
	document.getElementById("or_img").src="recursos/OR_estandar.png";
	document.getElementById("mensaje").innerHTML="";
}
function and_encender() {
	document.getElementById("and_img").src="recursos/AND_encendido.png"
	document.getElementById("mensaje").innerHTML="<p class='titulo'>Compuerta AND</p><br><p>La compuerta AND o Y lógica es una de las compuertas más simples dentro de la Electrónica Digital.</p>";

}

function and_apagar() {
	document.getElementById("and_img").src="recursos/AND_estandar.png"
	document.getElementById("mensaje").innerHTML="";
}
function xor_encender() {
	document.getElementById("xor_img").src="recursos/XOR_encendido.png"
	document.getElementById("mensaje").innerHTML="<p class='titulo'>Compuerta XOR</p><br><p>En la electrónica digital hay unas compuertas que no son comunes.Una de ellas es la compuerta XOR ó compuerta O exclusiva ó compuerta O excluyente</p>";

}
function xor_apagar() {
	document.getElementById("xor_img").src="recursos/XOR_estandar.png"
	document.getElementById("mensaje").innerHTML="";
}
function nand_encender() {
	document.getElementById("nand_img").src="recursos/NAND_encendido.png"
	document.getElementById("mensaje").innerHTML="<p class='titulo'>Compuerta NAND</p><br><p>Una compuerta NAND (NO Y) de dos entradas se puede implementar con la concatenación de una compuerta AND o \"Y\" u una compuerta NOT o \"No\" o inversora</p>";

}
function nand_apagar() {
	document.getElementById("nand_img").src="recursos/NAND_estandar.png"
	document.getElementById("mensaje").innerHTML="";
}
function not_encender() {
	document.getElementById("not_img").src="recursos/NOT_encendido.png"
	document.getElementById("mensaje").innerHTML="<p class='titulo'>Compuerta NOT</p><br><p>En la electrónica digital, no se podrian lograr muchas cosas si no existiera la compuerta NOT, tambien llamada compuerta inversora</p>";

}
function not_apagar() {
	document.getElementById("not_img").src="recursos/NOT_estandar.png"
	document.getElementById("mensaje").innerHTML="";
}

function not(){
	a=document.getElementById("number").value;
	if (a==1) {
		document.getElementById("fila_2").removeAttribute("hidden");
		document.getElementById("result").value=0;
	}
	if (a==0) {
		document.getElementById("fila_1").removeAttribute("hidden");
		document.getElementById("result").value=1;
	}
}
function xor() {
		a=document.getElementById("number").value;
		b=document.getElementById("number2").value;
		if (a==0) {
			if (b==0) {
				document.getElementById("fila_1").removeAttribute("hidden");
				document.getElementById("result").value=0;
			}
				else{
					if (b==1) {
						document.getElementById("fila_3").removeAttribute("hidden");
						document.getElementById("result").value=1;
					}
				}
		}
		if (a==1) {
			if (b==0) {
				document.getElementById("fila_2").removeAttribute("hidden");
				document.getElementById("result").value=1;
			}
				else{
					if (b==1) {
						document.getElementById("fila_4").removeAttribute("hidden");
						document.getElementById("result").value=0;
					}
				}
		}
	// body...
}
function and() {

		a=document.getElementById("number").value;
		b=document.getElementById("number2").value;
		if (a==0) {
			if (b==0) {
				document.getElementById("fila_1").removeAttribute("hidden");
				document.getElementById("result").value=0;
			}
				else{
					if (b==1) {
						document.getElementById("fila_3").removeAttribute("hidden");
						document.getElementById("result").value=0;
					}
				}
		}
		if (a==1) {
			if (b==0) {
				document.getElementById("fila_2").removeAttribute("hidden");
				document.getElementById("result").value=0;
			}
				else{
					if (b==1) {
						document.getElementById("fila_4").removeAttribute("hidden");
						document.getElementById("result").value=1;
					}
				}
		}
	// body...
}
	// body...
function or() {

		a=document.getElementById("number").value;
		b=document.getElementById("number2").value;
		if (a==0) {
			if (b==0) {
				document.getElementById("fila_1").removeAttribute("hidden");
				document.getElementById("result").value=0;
			}
				else{
					if (b==1) {
						document.getElementById("fila_3").removeAttribute("hidden");
						document.getElementById("result").value=1;
					}
				}
		}
		if (a==1) {
			if (b==0) {
				document.getElementById("fila_2").removeAttribute("hidden");
				document.getElementById("result").value=1;
			}
				else{
					if (b==1) {
						document.getElementById("fila_4").removeAttribute("hidden");
						document.getElementById("result").value=1;
					}
				}
		}
	// body...
}
function nand() {

		a=document.getElementById("number").value;
		b=document.getElementById("number2").value;
		if (a==0) {
			if (b==0) {
				document.getElementById("fila_1").removeAttribute("hidden");
				document.getElementById("result").value=1;
			}
				else{
					if (b==1) {
						document.getElementById("fila_3").removeAttribute("hidden");
						document.getElementById("result").value=1;
					}
				}
		}
		if (a==1) {
			if (b==0) {
				document.getElementById("fila_2").removeAttribute("hidden");
				document.getElementById("result").value=1;
			}
				else{
					if (b==1) {
						document.getElementById("fila_4").removeAttribute("hidden");
						document.getElementById("result").value=0;
					}
				}
		}
	// body...
}
function sound() {

audio.play();
}
