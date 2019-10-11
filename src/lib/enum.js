class Enumer {
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

const Enum = {
  Size: new Enumer('mini', 'tiny', 'small', 'large', 'big',
    'huge', 'massive'),
  Rotation: new Enumer('clockwise', 'counterclockwise'),
  Color: new Enumer('primary', 'secondary', 'red', 'orange', 'yellow',
    'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown',
    'grey', 'black'),
  CornerIconPosition: new Enumer('top left', 'top right', 'bottom left',
    'bottom right'),
  PointingLabel: new Enumer('above', 'below', 'left', 'right'),
  LeftRight: new Enumer('left', 'right'),
  Attached: new Enumer('top', 'bottom', 'top right', 'top left',
    'bottom right', 'bottom left'),
  AttachedLRTB: new Enumer('top', 'bottom', 'right', 'left'),
  AttachedTB: new Enumer('top', 'bottom'),
  Number: new Enumer(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen'),
};

export default Enum;
