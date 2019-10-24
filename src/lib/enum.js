import country from './country';

class Enum {
  constructor (pairs) {
    this.d = {};
    for (let [name, val] of pairs)
      this.d[name] = val;
  }
  static fromArray (names) {
    return new this([...names.entries()].map(([n, v]) => [v, n]));
  }
  static from (...names) {
    return this.fromArray(names);
  }
  static fromObject (obj) {
    return new this(Object.entries(obj));
  }

  check (name) {
    return name in this.d;
  }

  value (name) {
    return (name in this.d ? (Number.isInteger(this.d[name]) ? name : this.d[name]) : null);
  }

  str () {
    return Object.keys(this.d).join(', ');
  }
}

const enums = {
  Enum: Enum,
  Size: Enum.from('mini', 'tiny', 'small', 'medium', 'large', 'big',
    'huge', 'massive'),
  Rotation: Enum.from('clockwise', 'counterclockwise'),
  Color: Enum.from('red', 'orange', 'yellow',
    'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown',
    'grey', 'black'),
  CornerIconPosition: Enum.from('top left', 'top right', 'bottom left',
    'bottom right'),
  PointingLabel: Enum.from('above', 'below', 'left', 'right'),
  LeftRight: Enum.from('left', 'right'),
  Attached: Enum.from('top', 'bottom', 'top right', 'top left',
    'bottom right', 'bottom left'),
  AttachedLRTB: Enum.from('top', 'bottom', 'right', 'left'),
  AttachedTB: Enum.from('top', 'bottom'),
  Number: Enum.from(// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen'),
  Social: Enum.from('facebook', 'twitter', 'google plus', 'vk', 'linkedin',
    'instagram', 'youtube', 'whatsapp', 'telegram'),
  Country: Enum.fromArray([].concat(...country.map(o => {
    return [o[0], o[2]];
  }))),
  HeaderLevel: Enum.fromObject({
    '1': { tag: 'h1', },
    '2': { tag: 'h2', },
    '3': { tag: 'h3', },
    '4': { tag: 'h4', },
    '5': { tag: 'h5', },
  }),
  Fitted: Enum.from('vertically', 'horizontally'),
};

export default enums;
