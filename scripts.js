function Converter(){
  var valorEmDólar = parseFloat(document.getElementById("valor").value);
  var valorEmReal = valorEmDólar * 5.24;
  var valorEmEuro = valorEmDólar * 0.85;
  var valorEmBitcoin = valorEmDólar * 0.000021;

  var valorConvertidoEmReais = document.getElementById("valorConvertidoEmReais");
  valorConvertidoEmReais.innerHTML = "O valor convertido em reais é: R$ " + valorEmReal.toFixed(2);

  var valorConvertidoEmEuros = document.getElementById("valorConvertidoEmEuros");
  valorConvertidoEmEuros.innerHTML = "O valor convertido em euros é: € " + valorEmEuro.toFixed(2);

  var valorConvertidoEmBitcoin = document.getElementById("valorConvertidoEmBitcoin");
  valorConvertidoEmBitcoin.innerHTML = "O valor convertido em bitcoins é: BTC " + valorEmBitcoin;
}