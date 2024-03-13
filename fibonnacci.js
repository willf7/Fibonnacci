function fibonnacci(num) {
  let fibo1 = 0;
  let fibo2 = 1;

  for (let i = 0; fibo1 <= num; i++) {
    if (fibo1 === num) {
      return true;
    }

    let proxFibo = fibo1 + fibo2;

    fibo1 = fibo2;
    fibo2 = proxFibo;
  }

  return false;
}

let numInformado = parseInt(
  prompt(
    "Digite um número para verificar se pertence à sequência de Fibonacci:"
  )
);

if (fibonnacci(numInformado)) {
  console.log(`${numInformado} pertence à sequência`);
} else {
  console.log(`${numInformado} não pertence à sequência`);
}
