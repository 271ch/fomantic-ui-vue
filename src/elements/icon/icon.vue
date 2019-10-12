<template>
  <i :class="classes()">
    <slot />
  </i>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiIcon',
  mixins: [Mixins.PSize],
  props: {
    iconName: {
      type: String,
      description: 'Icon name (help, home, ...).',
      required: true,
    },
    disabled: {
      type: Boolean,
      description: 'An icon can show that it is disabled.',
    },
    loading: {
      type: Boolean,
      description: 'An icon can be used as a simple loader.',
    },
    fitted: {
      type: Boolean,
      description: 'An icon can be fitted, without any space to the left or right of it.',
    },
    link: {
      type: Boolean,
      description: 'An icon can be formatted as a link.',
    },
    flipped: {
      type: Boolean,
      description: 'An icon can be flipped.',
    },
    rotated: {
      type: String,
      description: 'An icon can be rotated ().',
      validator: (value) => {
        return !value || Enum.Loading.check(value);
      },
      default: '',
    },
    circular: {
      type: Boolean,
      description: 'An icon can be formatted to appear circular.',
    },
    bordered: {
      type: Boolean,
      description: 'An icon can be formatted to appear bordered.',
    },
    color: {
      type: String,
      description: 'An icon can be formatted with different colors.',
      validator: (value) => {
        return !value || Enum.Color.check(value);
      },
      default: '',
    },
    inverted: {
      type: Boolean,
      description: 'An icon can have its colors inverted for contrast.',
    },
    corner: {
      type: Boolean, // TODO: check that the parent is icon-group, only DEV
      description: 'An icon can be displayed as a smaller corner icon with its colors inverted for contrast.',
    },
    cornerPosition: {
      type: String,
      description: `Position of a corner icon (${Enum.CornerIconPosition.str()}).`,
      validator: (value) => {
        return !value || Enum.Color.check(value);
      },
      default: '',
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
    classes: function () {
      return u.concatClasses(
        this.disabled && 'disabled',
        this.fitted && 'fitted',
        ...this.getClassesSize(),
        this.flipped && 'flipped',
        this.rotated && [this.rotated, 'rotated'].join(' '),
        this.circular && 'circular',
        this.bordered && 'bordered',
        this.color,
        this.inverted && 'inverted',
        this.corner && this.cornerPosition,
        this.corner && 'corner',
        this.iconName,
        this.loading && 'loading',
        this.link && 'link',
        'icon'
      );
    },
  },
};
</script>
