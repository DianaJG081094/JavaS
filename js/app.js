

var Calculadora = {


  zoom: function(event){
    var tecla_DOM = event.target;
    tecla_DOM.style.width="21%";
  },

  toNormal: function (event){
    var tecla_DOM = event.target;
    tecla_DOM.style.width="22%";
  },

  zoomc1: function (event){
    var tecla_DOM = event.target;
    tecla_DOM.style.width="28%";
  },

  toNormalc1: function (event){
    var tecla_DOM = event.target;
    tecla_DOM.style.width="29%";
  },

  zoomc2: function (event){
    var tecla_DOM = event.target;
    tecla_DOM.style.width="89%";
  },

  toNormalc2: function (event){
    var tecla_DOM = event.target;
    tecla_DOM.style.width="90%";
  },

  escribir: function (event){
    var pantalla = document.getElementById("display");
    var tecla = event.target;
    var id = tecla.id;
    var idInt = parseInt(id);

    var num = pantalla.innerHTML;
    var numP = parseInt(num);
    if (idInt == 0 && numP == 0){
     pantalla.innerHTML=num;
    }else if(idInt !=0  && numP == 0){
      num = id;
      pantalla.innerHTML=num;
    }else if(numP != 0 && num.length<8){
      var numn = num + id;
      pantalla.innerHTML=numn;
    }
  },

  onoff: function (){
    var pantalla = document.getElementById("display");
    pantalla.innerHTML = "0";
  },

  metodo_teclas: function(){
    for (var i = 0; i< document.getElementsByClassName("tecla").length; i++){
      if(i >= 12 && i<= 17){
        document.getElementsByClassName("tecla")[i].onmousedown= this.zoomc1;
        document.getElementsByClassName("tecla")[i].onmouseup= this.toNormalc1;
      }else if(i == 18){
        document.getElementsByClassName("tecla")[i].onmousedown= this.zoomc2;
        document.getElementsByClassName("tecla")[i].onmouseup= this.toNormalc2;
      }else{
        document.getElementsByClassName("tecla")[i].onmousedown= this.zoom;
        document.getElementsByClassName("tecla")[i].onmouseup= this.toNormal;
      }
    }
  },

  metodo_pantalla: function(){
    for (var i = 0; i< document.getElementsByClassName("tecla").length; i++){
      if(i > 3 && i != 7 && i!=11 && i<16){
      document.getElementsByClassName("tecla")[i].onclick = this.escribir;
    }
    }
  },

  metodo_prender: function(){
   document.getElementsByClassName("tecla")[0].onclick = this.onoff;
 },


 metodo_punto: function(){
   document.getElementsByClassName("tecla")[16].onclick = this.EscribirPunto;
 },

 EscribirPunto: function(){
   var pantalla = document.getElementById("display");
   var numAct = pantalla.innerHTML;
   var aux = 0;
   for(var i = 0; i<numAct.length;i++){
     if(numAct[i] == "."){
       aux = 1;
       break;
     }
   }
   if(aux == 0){
     var nnum = numAct + ".";
     pantalla.innerHTML = nnum;
   }else {
     var nnum = numAct;
     pantalla.innerHTML = nnum;
   }
 },

metodo_signo: function(){
  document.getElementsByClassName("tecla")[1].onclick = this.signo;
},

signo: function(){
  var pantalla = document.getElementById("display");
  var numAct = pantalla.innerHTML;
  var numInt = Number(numAct);
  if(numAct[0] != "-" && numInt != 0){
    var nnum = "-"+ numAct;
    pantalla.innerHTML = nnum;
  }
    else if(numAct[0] == "-" && numInt != 0){
      var nnum = numInt*(-1);
      var nnumS = nnum.toString();
      pantalla.innerHTML = nnumS;
      }
  },

  metodo_operacion: function(){
    for (var i = 0; i< document.getElementsByClassName("tecla").length; i++){
      if( i == 18 || i == 11 || i == 7 || i == 3){
        document.getElementsByClassName("tecla")[i].onclick= this.operaciones;
      }
    }
  },

  operaciones: function(event){
    var operacion = event.target.id;
    var pantalla = document.getElementById("display");
    var op1 = pantalla.innerHTML;
    sessionStorage.setItem('op1',JSON.stringify(op1));
    pantalla.innerHTML="";
    var op = 0;
    switch (operacion) {
      case "mas":
            op = 1;
      break;

      case "menos":
            op = 2;
      break;

      case "por":
            op = 3;
      break;

      case "dividido":
            op = 4;
      break;
    }
    sessionStorage.setItem('op',JSON.stringify(op));
  },

  metodo_igual: function(){
    document.getElementsByClassName("tecla")[17].onclick= this.resolver;
  },

  resolver: function(){
    var pantalla = document.getElementById("display");
    var op2 = pantalla.innerHTML;
    var op2INT = Number(op2);
    sessionStorage.setItem('op2',JSON.stringify(op2));
    var operacion = JSON.parse(sessionStorage.op);
    var op1 = JSON.parse(sessionStorage.op1);
    var op1INT = Number(op1);
    var result = 0;
    var resultF = 0;
    switch (operacion) {
      case 1:
        result = op1INT + op2INT;
        resultF = result.toString();
        var rf = "";
        if(resultF.length < 8 ){
            pantalla.innerHTML = resultF;
        }else {
          for(i = 0; i <8; i++){
            rf = rf +resultF[i];
          }
         pantalla.innerHTML = rf;
        }
      break;
      case 2:
        result = op1INT - op2INT;
        resultF = result.toString();
        var rf = "";
        if(resultF.length < 8 ){
            pantalla.innerHTML = resultF;
        }else {
          for(i = 0; i <8; i++){
            rf = rf + resultF[i];
          }
         pantalla.innerHTML = rf;
        }
      break;
      case 3:
        result = op1INT * op2INT;
        resultF = result.toString();
        var rf = "";
        if(resultF.length < 8 ){
            pantalla.innerHTML = resultF;
        }else {
          for(i = 0; i <8; i++){
            rf = rf + resultF[i] ;
          }
         pantalla.innerHTML = rf;
        }
      break;
      case 4:
        result = op1INT / op2INT;
        resultF = result.toString();
        var rf = "";
        if(resultF.length < 8 ){
            pantalla.innerHTML = resultF;
        }else {
          for(i = 0; i <8; i++){
            rf = rf+ resultF[i] ;
          }
         pantalla.innerHTML = rf;
        }
      break;

    }

  }

};

(function Init(){
 Calculadora.metodo_teclas();
 Calculadora.metodo_pantalla();
 Calculadora.metodo_pantalla();
 Calculadora.metodo_prender();
 Calculadora.metodo_punto();
 Calculadora.metodo_signo();
 Calculadora.metodo_operacion();
 Calculadora.metodo_igual();
})();
