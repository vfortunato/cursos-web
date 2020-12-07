saque = parseInt(89);
saldo = saque
ced = [100, 50, 20, 10, 5, 2, 1]
console.log(saque)
if(0 < saque < 1000000){
  for(c0=0; saldo >= ced[0]; c0++){
    saldo -= ced[0]
  }
  for(c1=0; saldo >= ced[1]; c1++){
    saldo -= ced[1]
  }
  for(c2=0; saldo >= ced[2]; c2++){
    saldo -= ced[2]
  }
  for(c3=0; saldo >= ced[3]; c3++){
    saldo -= ced[3]
  }
  for(c4=0; saldo >= ced[4]; c4++){
    saldo -= ced[4]
  }
  for(c5=0; saldo >= ced[5]; c5++){
    saldo -= ced[5]
  }
  for(c6=0; saldo >= ced[6]; c6++){
    saldo -= ced[6]
  }
}
console.log(`${c0} nota(s) de R$ ${ced[0]},00\n${c1} nota(s) de R$ ${ced[1]},00\n${c2} nota(s) de R$ ${ced[2]},00\n${c3} nota(s) de R$ ${ced[3]},00\n${c4} nota(s) de R$ ${ced[4]},00\n${c5} nota(s) de R$ ${ced[5]},00\n${c6} nota(s) de R$ ${ced[6]},00\n`)