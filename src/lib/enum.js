let Enum = {};

Enum.Emphasis = {
  check: (value) => {
    [
      'primary',
      'secondary',
      'tertiary',
    ].indexOf(value) !== -1;
  },
};

export default Enum;
