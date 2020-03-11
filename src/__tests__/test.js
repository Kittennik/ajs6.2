import Character from '../js/app';

test('Жизней больше чем нанесенного урона', () => {
  const player = new Character('Kate', 'Magician');
  player.damage(100);
  expect(player.health).toEqual(40);
});

test('Жизней меньше чем нанесенного урона', () => {
  const player = new Character('Kate', 'Magician');
  player.damage(200);
  expect(player.health).toEqual(0);
});

test('Данные не введены', () => {
  const player = new Character('Kate', 'Magician');
  player.damage();
  expect(player.health).toEqual(100);
});
