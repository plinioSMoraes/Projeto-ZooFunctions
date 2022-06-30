const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Parametro vazio retorna undefined', () => {
    const expected = undefined;
    const actual = handlerElephants();
    expect(actual).toStrictEqual(expected);
  });
  it('Parametro vazio retorna undefined', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = handlerElephants({});
    expect(actual).toStrictEqual(expected);
  });
  it('Retorna null se o parametro nao for uma string válida', () => {
    const expected = null;
    const actual = handlerElephants('fdsfad');
    expect(actual).toStrictEqual(expected);
  });
  it('Retorna a quantidade de elefantes', () => {
    const expected = 4;
    const actual = handlerElephants('count');
    expect(actual).toStrictEqual(expected);
  });
  it('retorna um array com a relação dos nomes de todos os elefan', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const actual = handlerElephants('names');
    expect(actual).toStrictEqual(expected);
  });
  it('retorna a média de idade dos elefantes', () => {
    const expected = 10.5;
    const actual = handlerElephants('averageAge');
    expect(actual).toBe(expected);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');
    expect(actual).toBe(expected);
  });
  it('retorna a popularidade dos elefante', () => {
    const expected = 5;
    const actual = handlerElephants('popularity');
    expect(actual).toBe(expected);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    const actual = handlerElephants('availability');
    expect(actual).toEqual(expected);
  });
});
