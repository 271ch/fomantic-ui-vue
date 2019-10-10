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
  Emphasis: new Enumer('primary', 'secondary', 'tertiary'),
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
};

export default Enum;
