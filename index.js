const T1 = parseFloat(prompt('Informe a temperatura inicial, em °C'))
const T2 = parseFloat(prompt('Informe a temperatura final, em °C'))
const L1 = parseFloat(prompt('Qual o comprimento inicial do objeto, em metros?'))
const material = prompt('O objeto é feito de vidro, aço, cobre ou alumínio?')

console.log('Material = ', material)
console.log('Lo = ',L1, 'metros')

const variacaoTemp = (T1, T2) => {return T2-T1}
console.log ('∆T = ', variacaoTemp(T1, T2), '°C')

const deltaL = (T1, T2, L1, material) => {
    if (material === 'vidro' || material === 'Vidro'){    
    return L1*3* Math.pow(10,-6)*variacaoTemp(T1, T2)}
    else if (material === 'aço' || material === 'aco' || material === 'Aco' || material === 'Aço'){
    return L1*11* Math.pow(10,-6)*variacaoTemp(T1, T2)}
    else if (material === 'cobre' || material === 'Cobre'){
    return L1*17* Math.pow(10,-6)*variacaoTemp(T1, T2)}
    else if (material === 'alumínio' || material === 'aluminio' || material === 'Alumínio' || material === 'Aluminio'){
    return L1*22* Math.pow(10,-6)*variacaoTemp(T1, T2)}
    else {console.log('Você não escolheu um material válido. Tente novamente.')}
}

console.log('∆L = ',deltaL(T1, T2, L1, material), 'metros')

const comprimentoFinal = (L1, deltaL) => {return L1+deltaL}
console.log ('Comprimento final = ', comprimentoFinal(L1, deltaL(T1, T2, L1, material)), 'metros')
