import Enum from './enum';

// Mixins for props start with P

let mixins = { };

// mixin with prop for social websites
mixins.PSocial = {
  props: {
    social: {
      type: String,
      description: `Design for asocial websites (${Enum.Social.str()}).`,
      validator: (value) => {
        return !value || Enum.Social.check(value);
      },
      default: '',
    },
  },
  methods: {
    getClassesSocial: function () {
      return [this.social];
    },
  },
};

// primary econdary
mixins.PPrimSec = {
  props: {
    primary: {
      type: Boolean,
      description: 'Format showing a higher level of emphasis.',
    },
    secondary: {
      type: Boolean,
      description: 'Format showing a lower level of emphasis.',
    },
  },
  methods: {
    getClassesEmphasis: function () {
      return [
        (this.primary && 'primary') ||
          (this.secondary && 'secondary')
      ];
    },
  },
};

// primary secondary tertiary (merge)
mixins.PPrimSecTer = Object.assign({},
  mixins.PPrimSec,
  {
    props: {
      tertiary: {
        type: Boolean,
        description: 'A none bordered less important button.',
      },
    },
    methods: {
      getClassesEmphasis: function () {
        return [
          (this.primary && 'primary') ||
            (this.secondary && 'secondary') ||
            (this.tertiary && 'tertiary')
        ];
      },
    },
  }
);

export default mixins;
