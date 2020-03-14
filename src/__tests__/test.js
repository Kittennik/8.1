import ErrorRepository from '../js/app';

const error = new ErrorRepository();

test('Имеющаяся ошибка', () => {
  expect(error.translate(400)).toBe('Bad Request');
});

test('Неизвестная ошибка', () => {
  expect(() => error.translate(201)).toThrow('Unknown error');
});
