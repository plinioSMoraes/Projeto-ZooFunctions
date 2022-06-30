const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se retornas os horarios corretos se nao houver argumentos', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    expect(actual).toStrictEqual(expected);
  });
  it('Verifica se ao passar um dia e hora retorna "The zoo is closed"', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Monday', '09:00-AM');
    expect(actual).toStrictEqual(expected);
  });
  it('Verifica se ao passar um dia e hora retorna "The zoo is open', () => {
    const expected = 'The zoo is open';
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    expect(actual).toStrictEqual(expected);
  });
  it('Verifica se lança um erro ao digitar algo diferente de AM ou PM', () => {
    expect(() => { getOpeningHours('Monday', '09:00-DM'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Verifica se lança um erro ao digitar um dia nao valido', () => {
    expect(() => { getOpeningHours('fdsaf', '09:00-AM'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Verifica se lança um erro ao digitar uma hora errada', () => {
    expect(() => { getOpeningHours('Monday', '20:00-AM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Verifica se lança um erro ao digitar os minutos errados', () => {
    expect(() => { getOpeningHours('Monday', '09:60-AM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('Verifica se lança um erro ao digitar uma hora, os digitos sao numéricos', () => {
    expect(() => { getOpeningHours('Monday', 'AA:60-AM'); }).toThrowError(new Error('Monday', '0a:00-AM'));
  });
});
