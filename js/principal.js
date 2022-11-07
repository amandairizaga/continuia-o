var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (i=0; i<pacientes.length; i++) {

    var paciente = pacientes[i];
   
   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;
   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;

   var pesoEhValido = true;
   var alturaEhValida = true;

   if (peso <= 0 || peso >=1000) {
        pesoEhValido = false;
        tdPeso.textContent = "Peso inválido";
        tdPeso.classList.add("paciente-invalido");
        /*paciente.classList.add("paciente-invalido");*/
    }
    if (altura <= 0 || altura >=3.00) {
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida";
        tdAltura.classList.add("paciente-invalido");
        /*paciente.classList.add("paciente-invalido");*/
    }
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc.toFixed(2);
    }

}

var titulo = document.querySelector("h2");
titulo.addEventListener("click", function(){
    console.log("Fui clicado");

});


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("Um novo paciente foi adicionado");

});



   
   