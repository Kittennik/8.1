import Bowman from '../js/bowman';
import Swordsman from '../js/swordsman';
import Magician from '../js/magician';
import Daemon from '../js/daemon';
import Undead from '../js/undead';
import Zombie from '../js/zombie';

test('Bowman', () => {
  const received = new Bowman('Leila');
  const expected = {
    name: 'Leila',
    level: 1,
    health: 100,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Swordsman', () => {
  const received = new Swordsman('Gleb');
  const expected = {
    name: 'Gleb',
    level: 1,
    health: 100,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Magician', () => {
  const received = new Magician('Kate');
  const expected = {
    name: 'Kate',
    level: 1,
    health: 100,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Daemon', () => {
  const received = new Daemon('Oleg');
  const expected = {
    name: 'Oleg',
    level: 1,
    health: 100,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Undead', () => {
  const received = new Undead('Petr');
  const expected = {
    name: 'Petr',
    level: 1,
    health: 100,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Zombie', () => {
  const received = new Zombie('Anna');
  const expected = {
    name: 'Anna',
    level: 1,
    health: 100,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
