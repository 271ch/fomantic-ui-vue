<template>
  <i :class="classes">
    <slot />
  </i>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiIcon',
  mixins: [
    Mixins.PSize,
    Mixins.getMixinOfBools(
      'Emphasis',
      {
        primary: 'Format showing a higher level of emphasis.',
        secondary: 'Format showing a lower level of emphasis.',
      }
    ),
    Mixins.getMixinAligned(['middle'], null),
  ],
  props: {
    name: {
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
      type: [Boolean, String],
      description: 'An icon can be flipped.',
      validator: (value) => {
        return value === true || value === false || value === 'horizontally' || value === 'vertically';
      },
      default: false,
    },
    rotated: {
      type: [Boolean, String],
      description: 'An icon can be rotated ().',
      validator: (value) => {
        return value === false || Enum.Rotation.check(value);
      },
      default: false,
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
      type: [Boolean, String],
      description: `An icon can be displayed as a smaller corner icon with its colors inverted for contrast (${Enum.CornerIconPosition.str()}).`,
      validator: (value) => {
        return value === true || value === false || Enum.CornerIconPosition.check(value);
      },
      default: false,
    },
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  computed: {
    classes: function () {
      return u.concatClasses(
        this.disabled && 'disabled',
        this.fitted && 'fitted',
        ...this.getClassesSize,
        this.flipped !== true && this.flipped,
        this.flipped && 'flipped',
        this.rotated,
        this.rotated && 'rotated',
        this.circular && 'circular',
        this.bordered && 'bordered',
        this.inverted && 'inverted',
        ...this.getClassesEmphasis,
        this.color,
        this.corner !== true && this.corner,
        this.corner && 'corner',
        this.name,
        ...this.getClassesAligned,
        this.loading && 'loading',
        this.link && 'link',
        'icon'
      );
    },
  },
};
</script>
