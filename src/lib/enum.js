class Enum {
  constructor (...values) {
    this.values = values;
  }

  check (value) {
    return this.values.indexOf(value) !== -1;
  }

  str () {
    return this.values.join(', ');
  }
}

const enums = {
  Size: new Enum('mini', 'tiny', 'small', 'large', 'big',
    'huge', 'massive'),
  Rotation: new Enum('clockwise', 'counterclockwise'),
  Color: new Enum('primary', 'secondary', 'red', 'orange', 'yellow',
    'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown',
    'grey', 'black'),
  CornerIconPosition: new Enum('top left', 'top right', 'bottom left',
    'bottom right'),
  PointingLabel: new Enum('above', 'below', 'left', 'right'),
  LeftRight: new Enum('left', 'right'),
  Attached: new Enum('top', 'bottom', 'top right', 'top left',
    'bottom right', 'bottom left'),
  AttachedLRTB: new Enum('top', 'bottom', 'right', 'left'),
  AttachedTB: new Enum('top', 'bottom'),
  Number: new Enum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen'),
  Social: new Enum('facebook', 'twitter', 'google plus', 'vk', 'linkedin',
    'instagram', 'youtube', 'whatsapp', 'telegram'),
};

export default enums;
