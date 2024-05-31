const { calcIMC, calcTMB } = require('../../public/scripts/scripts.cjs')
const { calcTabelaIMC } = require('../../public/scripts/scripts_PT.cjs')

// Testes
describe('calcIMC', () => {
  test('aplicação possui IMC', () => {
    const imc = calcIMC()
    expect(imc)
  })

  test('aplicação retorna o cálculo do imc', () => {
    const imc = calcIMC(70, 175)
    expect(imc).toBe('22.86')
  })

  test('aplicação não permite valores nulos', () => {
    const imc = calcIMC(-70, 175)
    expect(imc).toBeNull()
  })
  test('aplicação que retorna o resultado dos calculos do TMB', () => {
    const tmb = calcTMB(70,21,171,'Masculino')
    expect(tmb[0][4]).toBe(2878.59375)
  })

  test('aplicação que retorna o resultado das tabelas do IMC', () => {
    const resultTabelaIMC = calcTabelaIMC(27)
    expect(resultTabelaIMC).toBe('Sobrepeso')
  })
})
