<template>
  <component
    :is="gTag()"
    :class="classes()"
    :tabindex="getTabindex()"
  >
    <slot />
  </component>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiButton',
  mixins: [
    Mixins.PSocial,
    Mixins.PPrimSecTer,
    Mixins.PSize,
    Mixins.getMixinTag(['div'], 'button'),
  ],
  props: {
    focusable: {
      type: Boolean,
      description: 'The button is keyboard accessible (default is focusable for button and not focusable for div).',
    },
    animated: {
      type: [Boolean, String],
      description: 'A button can animate (variations fade, vertical) to show hidden content.',
      default: false,
    },
    labeled: {
      type: String,
      description: 'A button can appear alongside a label.',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
    },
    icon: {
      type: Boolean,
      description: 'A button can have only an icon.',
    },
    labeledIcon: {
      type: [Boolean, String],
      description: 'A button can use an icon as a label.',
      validator: (value) => {
        return value === false || value === true || Enum.LeftRight.check(value);
      },
      default: false,
    },
    basic: {
      type: Boolean,
      description: 'A basic button is less pronounced.',
    },
    inverted: {
      type: Boolean,
      description: 'A button can be formatted to appear on dark backgrounds.',
    },
    active: {
      type: Boolean,
      description: 'A button can show it is currently the active user selection.',
    },
    disabled: {
      type: Boolean,
      description: 'A button can show it is currently unable to be interacted with.',
    },
    loading: {
      type: Boolean,
      description: 'A button can show a loading indicator.',
    },
    floated: {
      description: 'A button can be aligned to the left or right of its container.',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
    },
    color: {
      type: String,
      description: 'A button can have different colors.',
      default: '',
    },
    compact: {
      type: Boolean,
      description: 'A button can reduce its padding to fit into tighter spaces.',
    },
    toggle: {
      type: Boolean,
      description: 'A button can be formatted to toggle on and off.',
    },
    positive: {
      type: Boolean,
      description: 'A button can hint towards a positive consequence.',
    },
    negative: {
      type: Boolean,
      description: 'A button can hint towards a negative consequence.',
    },
    fluid: {
      type: Boolean,
      description: 'A button can take the width of its container.',
    },
    circular: {
      type: Boolean,
      description: 'A button can be circular.',
    },
    attached: {
      type: String,
      description: `A button can be attached horizontally or vertically (${Enum.AttachedLRTB.str()}).`,
      validator: (value) => {
        return !value || Enum.AttachedLRTB.check(value);
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
    getTabindex: function () {
      if (this.tag === 'div' && this.focusable) {
        return '0';
      } else {
        return false;
      }
    },
    classes: function () {
      return u.concatClasses(
        'ui',
        this.positive && 'positive',
        this.negative && 'negative',
        this.fluid && 'fluid',
        this.circular && 'circular',
        this.attached,
        this.attached && 'attached',
        this.compact && 'compact',
        this.animated === true && 'animated',
        this.animated === 'fade' && 'animated fade',
        this.animated === 'vertical' && 'vertical animated',
        this.inverted && 'inverted',
        this.color,
        ...this.getClassesEmphasis(),
        this.tertiary && 'tertiary',
        this.basic && 'basic',
        this.labeled == 'left' && this.labeled,
        this.labeled && 'labelled',
        (this.labeledIcon === true || this.labeledIcon === 'left') && 'labeled icon',
        this.labeledIcon === 'right' && 'right labeled icon',
        this.active && 'active',
        this.disabled && 'disabled',
        this.loading && 'loading',
        ...this.getClassesSocial(),
        ...this.getClassesSize(),
        this.icon && 'icon',
        this.floated,
        this.floated && 'floated',
        this.toggle && 'toggle',
        'button'
      );
    },
  },
};
</script>
