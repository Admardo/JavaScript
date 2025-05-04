function calcular() {
   
      var altura = document.calculoIMC.altura.value;      
      var peso = Number(document.calculoIMC.peso.value);      
      var i = peso / (altura * altura);
      imc = i.toFixed(2);
      var resultado = 'Seu IMC é ' + imc;

      resultado += '<p />';
      
      if (imc < 18.5) {
          resultado += 'Atenção! Você está abaixo do peso Ideal';
      } else if (imc < 25) {
          resultado += 'Parabéns! Você está em seu peso Normal!';
      } else if (imc < 30) {
          resultado += 'Você está Acima de seu Peso (Sobrepeso)';
      } else if (imc < 35) {
          resultado += 'Você está com Obesidade Grau I';
      } else if (imc < 40) {
          resultado += 'Você está com Obesidade Grau II';
      } else {
          resultado += 'Você está com Obesidade Grau III';
      }
              
      document.getElementById('resultado').innerHTML = resultado;
  }

function recalcular() {
  location.reload();
  document.getElementById('altura').value='';
  document.getElementById('peso').value='';
}
