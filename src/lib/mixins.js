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
    computed: { },
  };
  m.computed['getClasses' + name] = function () {
    let c = [];
    for (let prop in props) {
      if (this[prop]) c.push(prop);
    }
    return c;
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

// fitted segment
mixins.PFitted = {
  props: {
    fitted: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === true || value === false || Enum.Fitted.check(value);
      },
      default: false,
    },
  },
  computed: {
    getClassesFitted: function () {
      return [
        this.fitted,
        this.fitted && 'fitted',
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
      type: [Boolean, String],
      description: 'Headel level (???)',
      validator: (value) => {
        return value === false || Enum.HeaderLevel.check(value);
      },
      default: false,
    },
  },
  computed: {
    gTag: function () {
      if (this.useDiv || this.level === false) { // TODO: false => prop 'sub' required
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
          return value === false || value === true || e.check(value);
        },
        default: false,
      },
    },
    computed: {
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

mixins.getMixinAligned = function (values, def) {
  const e = Enum.Enum.fromArray(values);
  return {
    props: {
      aligned: {
        type: [Boolean, String],
        description: `The element is aligned (${e.str()})`,
        validator: (value) => {
          return value === false || e.check(value);
        },
        default: false,
      },
    },
    computed: {
      getClassesAligned: function () {
        return [
          this.aligned === true && def,
          this.aligned !== true && this.aligned,
          this.aligned && this.aligned !== 'justified' && 'aligned',
        ];
      },
    },
  };
};

mixins.getMixinFloated = function (values, def) {
  const e = Enum.Enum.fromArray(values);
  return {
    props: {
      floated: {
        type: [Boolean, String],
        description: `The element is floated (${e.str()})`,
        validator: (value) => {
          return value === false || e.check(value);
        },
        default: false,
      },
    },
    computed: {
      getClassesFloated: function () {
        return [
          this.floated === true && def,
          this.floated !== true && this.floated,
          this.floated && 'floated',
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
    computed: {
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

// mixin for only display
mixins.PDisplayOnly = {
  props: {
    only: {
      type: [Boolean, String, Array],
      description: ``,
      validator: (value) => {
        return value === false || (typeof value === 'string' && Enum.Display.check(value)) || value.every(v => (typeof v === 'string' && Enum.Display.check(v)));
      },
      default: false,
    },
  },
  computed: {
    getClassesDisplayOnly: function () {
      if (this.only === false) return [];
      if (typeof this.only === 'string') return [this.only, 'only'];
      return [...this.only, 'only'];
    },
  },
};

export default mixins;
