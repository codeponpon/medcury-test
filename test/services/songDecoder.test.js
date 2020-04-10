const songDecoder = require('../../app/services/songDecoder');
describe('test songDecoder function', () => {
  test('add AWUBBWUBC to equal A B C. So that, WUB should be replaced by 1 space', () => {
    str = 'AWUBBWUBC';
    expect(songDecoder(str)).toBe('A B C');
  });

  test('add AWUBWUBWUBBWUBWUBWUBC to equal A B C. So that, multiples WUB should be replaced by only 1 space', () => {
    str = 'AWUBWUBWUBBWUBWUBWUBC';
    expect(songDecoder(str)).toBe('A B C');
  });

  test('add WUBAWUBBWUBCWUB to equal A B C. So that, heading or trailing spaces should be removed', () => {
    str = 'WUBAWUBBWUBCWUB';
    expect(songDecoder(str)).toBe('A B C');
  });
});
