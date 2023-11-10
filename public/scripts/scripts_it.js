function calcTabelaIMC(imc) {
  const validationIMCNormal = imc >= 18.5 && imc <= 24.9
  const validationIMCSobrepeso = imc >= 25 && imc <= 29.9
  const validationIMCObesidade1 = imc > 30 && imc <= 34.9
  const validationIMCObesidade2 = imc > 35 && imc <= 39.9

  return imc < 18.5
    ? 'Magrezza'
    : validationIMCNormal
    ? 'Normale'
    : validationIMCSobrepeso
    ? 'Sovrappeso'
    : validationIMCObesidade1
    ? 'Grado di obesità I'
    : validationIMCObesidade2
    ? 'Grado di obesità II'
    : imc > 40
    ? 'Grado di obesità III'
    : ''
}

module.exports = { calcTabelaIMC }