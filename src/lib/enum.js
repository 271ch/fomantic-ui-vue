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
};

export default Enum;
