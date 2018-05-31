
var Calculadora = {
  init: function(){
    this.metodo_teclas();
    this.metodo_pantalla();
    this.metodo_prender();
    this.metodo_punto();
    this.metodo_signo();
  },

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
    }else if(numP != 0){
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
  }


}