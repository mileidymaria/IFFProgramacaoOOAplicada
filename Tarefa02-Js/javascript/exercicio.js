function adicionar() {
  var item = document.getElementById("item").value;
  var lista  = document.getElementById("lista").innerHTML;
  if (item == ""){
    alert("Input em branco! Dados não podem ser incluídos.");
  }

  else{
    lista = lista +"<li>"+item+"</li>";
    document.getElementById("lista").innerHTML = lista;
  }
}


function fatorial(){
  var fatorial = document.getElementById("numero").value;
  var limite = document.getElementById("numero").value;
  for (var i = 1; i < limite; i++) {
      fatorial *= i;
  }
  alert("O fatorial de " + limite + " é " + fatorial);
}
