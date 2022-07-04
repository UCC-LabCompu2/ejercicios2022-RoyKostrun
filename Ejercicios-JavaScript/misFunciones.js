/**
 * Conversion de unidades, de mettors, yardas, pies y pulgadas.
 * @method Cambiar Unidades
 * @param  {string} id - El id de los inputs de metros, yardas, pies o pulgadas.
 * @param {number} valor - El valor de los de los inputs de metros, yardas, pies o pulgadas
 * @return
 */

function cambiarUnidades( id, valor){
    var metro, pulgada, pie , yarda;

    if (valor.includes(",")){
        valor = valor.replace(",", ".");
    }
     if (isNaN(valor)){
         alert(" Dato Invalido " + id);
         /**
         document.lasUnidades.unid_metro.value = "";
         document.lasUnidades.unid_pulgada.value = "";
         document.lasUnidades.unid_pie.value = "";
         document.lasUnidades.unid_yarda.value = "";
          */
         metro = "";
         pulgada = "";
         pie = "";
         yarda = "";
     } else if (id=="metro"){
         /**
         document.lasUnidades.unid_pulgada.value = 39.3701 * valor;
         document.lasUnidades.unid_pie.value = 3.28084 * valor;
         document.lasUnidades.unid_yarda.value = 1.09361 * valor;
          */
         metro = valor;
         pulgada = 39.3701 * valor;
         pie = 3.28084 * valor;
         yarda = 1.09361 * valor;
     } else if (id=="pulgada"){
         pulgada = valor;
         metro = 0.0254 * valor;
         pie = 0.0833333 * valor;
         yarda = 0.0277778 * valor;
     } else if (id=="yarda"){
         yarda = valor;
         metro = 0.9144 * valor;
         pulgada = 36 * valor;
         pie = 3 * valor;
     } else if (id=="pie"){
         pie = valor;
         metro = 0.3048 * valor;
         pulgada = 12 * valor;
         yarda = 0.333333 * valor;
     }

    document.lasUnidades.unid_metro.value = Math.round(metro * 100) / 100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada * 100) / 100;
    document.lasUnidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda * 100) / 100;
}

function convertirGR(id){
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    } else if (id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO){
    if (valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    } else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}

function  calcularSuma(){
    var num1, num2;

    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;

    document.getElementsByName("sum_total")[0].innerHTML= Number(num1) + Number(num2);
    /** innerHTML sirve para recuperar el contenido actual de un contenedor o insertar nuevo contenido en ese contenedor */
}

function calcularResta(){
    var num1, num2;

    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;

    document.getElementsByName("res_total")[0].innerHTML = Number(num1) - Number(num2);
}

function calcularMultiplicacion(){
    var  num1, num2;

    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;

    document.getElementsByName("mul_total")[0].innerHTML = Number(num1) * Number(num2);
}

function calcularDivicion(){
    var num1, num2;

    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;

    document.getElementsByName("div_total")[0].innerHTML = Number(num1) / Number(num2);
}

function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado(){
    var urlComp, cant, unid;

    urlComp = window.location.href.split("/")[5];

    cant = urlComp.split("#")[1];
    unid = urlComp.split("#")[2];

    document.getElementById("dist").value = cant + "  " + unid;
    /** console.log(urlComp);  */
}

function guardarLocalStorage(){
    let distancia, unidad;

    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('2_web.html');
}

function  cargarLocalStorage(){
    let cant, unid;

    cant = localStorage.getItem("distanciaLS");
    unid = localStorage.getItem("unidesLS");

    document.getElementById("dist").value = cant + "  " + unid;
}

function dibujarCirculoCuadrado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    let tamCuadrado = 50;
    let margen = 10;

    ctx.fillRect(2*margen, yMax-tamCuadrado-margen, tamCuadrado, tamCuadrado);

    ctx.arc(xMax/2, yMax/2, 40, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#8a0e39";
    ctx.fill();
}


/*
function  cargargListener(){
    document.getElementById("lienzoDibujo").addEventListener("mousemove", function (event){
        let canvas = document.getElementById("lienzoDibujo");
        let ctx = canvas.getContext("2d");

        let posX = event.clientX;
        let posY = event.clientY;

        canvas.onmousedown = function (){bandera=true};
        canvas.onmouseup = function (){bandera=false};

        if(bandera){
            ctx.fillRect(posX, posY, 5, 5);
        }

    });
}
*/

var bandera;

function dibujar(event){
    let canvas = document.getElementById("lienzoDibujo");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;

    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
    }

}

function borrarCanvas(){
    let canvas = document.getElementById("lienzoDibujo");
    let ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujar(event){
    var canvas = document.getElementById("lienzoDibujo");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if (bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill();
    }
}

function dibujarCuadriculado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;

    // dibujar lineas horizontales
    ctx.beginPath();
    for (let i=0; i < yMax;i++){
        ctx.moveTo(0, i);
        ctx.lineTo(xMax, i);
        ctx.strokeStyle = "#252e85";
        ctx.stroke();

        i = i+20;
    }
    ctx.closePath()

    ctx.beginPath();
    for (let i=20; i < xMax;i++){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, yMax);
        ctx.strokeStyle = "#1a216c";
        ctx.stroke();

        i = i+20;
    }
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(0, yMax/0);
    ctx.lineTo(xMax, yMax/2);
    ctx.strokeStyle = "#de0a0a";
    ctx.stroke();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(xMax/2, 0);
    ctx.lineTo(xMax/2, yMax);
    ctx.strokeStyle = "#e01010";
    ctx.stroke();
    ctx.closePath()

}

function dibujarAuto(posX, posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png"

    console.log(posX, posY)

    img.onload = function (){
        ctx.drawImage(img, posX, posY);
        console.log("se deberia dibujar la imagen");
    }
}

x = 0;
dx = 2; // para que el auto se desplace de a dos pixeles
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png"

    img.onload = function (){
        ctx.drawImage(img, x, 100);
    }
    if ( x > canvas.width ){
        x = 0;
    }
    x += dx;
}


