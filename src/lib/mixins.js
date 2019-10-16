import Enum from './enum';

// Mixins for props start with P

let mixins = { };

// mixin with prop for social websites
mixins.PSocial = {
  props: {
    social: {
      type: [Boolean, String],
      description: `Design for social websites (${Enum.Social.str()}).`,
      validator: (value) => {
        return value === false || Enum.Social.check(value);
      },
      default: false,
    },
  },
  methods: {
    getClassesSocial: function () {
      return [this.social];
    },
  },
};

// generic Boolean mixin
mixins.getMixinOfBools = function (name, props) {
  let m = {
    props: { },
    methods: { },
  };
  m.methods['getClasses' + name] = function () {
    return [
      (this.primary && 'primary') ||
      (this.secondary && 'secondary')
    ];
  };
  for (let prop in props) {
    if (typeof prop === 'string') {
      m.props[prop] = {
        type: Boolean,
        description: '',
      };
    } else {
      const k = Object.keys(prop)[0];
      m.props[k] = {
        type: Boolean,
        description: prop[k],
      };
    }
  }
  return m;
};

// left/center/right aligned, justified
mixins.PLRJAlignment = {
  props: {
    leftAligned: {
      type: Boolean,
      description: 'Left aligned',
    },
    rightAligned: {
      type: Boolean,
      description: 'Right aligned',
    },
    centerAligned: {
      type: Boolean,
      description: 'Center aligned',
    },
    justified: {
      type: Boolean,
      description: 'Justified',
    },
  },
  methods: {
    getClassesLRJAlignment: function () {
      return [
        (this.leftAligned && 'left aligned') ||
        (this.rightAligned && 'right aligned') ||
        (this.centerAligned && 'center aligned') ||
        (this.justified && 'justified')
      ];
    },
  },
};

// country
mixins.PCountry = {
  props: {
    country: {
      type: String,
      description: 'Country (2 leller or code, e.g. ch or switzerland)',
      validator: (value) => {
        return !value || Enum.Country.check(value);
      },
      default: '',
      required: true,
    },
  },
  methods: {
    getClassesCountry: function () {
      return [
        this.country,
      ];
    },
  },
};

// headel level
mixins.PHeaderLevel = {
  props: {
    useDiv: {
      type: Boolean,
      description: 'Use div instead of h1, ..., h5',
    },
    level: {
      type: String,
      description: 'Headel level (???)',
      validator: (value) => {
        return Enum.HeaderLevel.check(value);
      },
      default: '',
      required: true,
    },
  },
  methods: {
    gTag: function () {
      if (this.useDiv) {
        return 'div';
      } else {
        return Enum.HeaderLevel.value(this.level).tag;
      }
    },
    getClassesHeaderLevel: function () {
      if (this.useDiv) {
        return [Enum.HeaderLevel.value(this.level).tag];
      } else {
        return [];
      }
    },
  },
};

// size
mixins.PSize = {
  props: {
    size: {
      type: [Boolean, String],
      description: `Size of the element (${Enum.Size.str()}).`,
      validator: (value) => {
        return value === false || Enum.Size.check(value);
      },
      default: false,
    },
  },
  computed: {
    getClassesSize: function () {
      return [
        this.size,
      ];
    },
  },
};

// header: ['', 'top', 'bottom'], ''
// button: ['top', 'bottom', 'left', 'right'], null
// buttons: ['top', 'bottom'], null
// label: ['top', 'bottom', 'top right', 'bottom right', 'top left', 'bottom left', ]
// menu: ['top', 'bottom'], null
// message: ['', 'bottom'], ''
// rail: ['left', 'right', 'left internal', 'right internal'], null
// segment: ['', 'top', 'bottom'], ''
// steps: ['top', 'bottom'], null
mixins.getMixinAttached = function (values, def) {
  const e = Enum.Enum.fromArray(values);
  return {
    props: {
      attached: {
        type: [Boolean, String],
        description: `The element is attached to the parent container (${e.str()})`,
        validator: (value) => {
          return (!value && def != null) || e.check(value);
        },
        default: false,
      },
    },
    methods: {
      getClassesAttached: function () {
        return [
          this.attached === true && def,
          this.attached !== true && this.attached,
          this.attached && 'attached',
        ];
      },
    },
  };
};

// possible tag's
mixins.getMixinTag = function (values, def) {
  const e = Enum.Enum.fromArray(values);
  return {
    props: {
      tag: {
        type: [Boolean, String],
        description: `Possible alternative tags: ${e.str()}` +
          (def != null ? ` (default value: '${def}')` : '') + '.',
        validator: (value) => {
          return (!value && def != null) || e.check(value);
        },
        default: false,
      },
    },
    methods: {
      gTag: function () {
        return (this.tag === false && def) ||
          (this.tag && this.tag != true && this.tag);
      },
    },
  };
};

// mixin for color
mixins.PColor = {
  props: {
    color: {
      type: [Boolean, String],
      description: `Predefined colors (${Enum.Color.str()}).`,
      validator: (value) => {
        return value === false || Enum.Color.check(value);
      },
      default: false,
    },
  },
  computed: {
    getClassesColor: function () {
      return [this.color];
    },
  },
};

export default mixins;
