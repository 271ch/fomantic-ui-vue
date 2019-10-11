<template>
  <div :class="classes()">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';

export default {
  name: 'FuiButton',
  props: {
    focusable: { // TODO: not clear how to implement focusable, yet
      type: Boolean,
      description: 'The button is keyboard accessible.',
    },
    primary: {
      type: Boolean,
      description: 'A button can be formatted to show different levels of emphasis.',
    },
    secondary: {
      type: Boolean,
      description: 'A button can be formatted to show different levels of emphasis.',
    },
    tertiary: {
      type: Boolean,
      description: 'An none bordered less important button.',
    },
    emphasis: { // TODO: or switch to 3 separate Boolean props?
      type: String,
      description: `A button can be formatted to show different levels of emphasis (${Enum.Emphasis.str()}).`,
      validator: (value) => {
        return !value || Enum.Emphasis.check(value);
      },
      default: '',
    },
    animated: {
      type: Boolean,
      description: 'A button can animate to show hidden content.',
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
      type: String,
      description: 'A button can use an icon as a label.',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
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
    social: {
      type: String,
      description: 'A button can be formatted to link to a social website.',
      default: '',
    },
    size: {
      type: String,
      description: 'A button can have different sizes.',
      validator: (value) => {
        return !value || Enum.Size.check(value);
      },
      default: '',
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
    classes: function () {
      return u.concatClasses(
        this.positive && 'positive',
        this.negative && 'negative',
        this.fluid && 'fluid',
        this.circular && 'circular',
        'ui',
        this.attached,
        this.attached && 'attached',
        this.compact && 'compact',
        this.animated && 'animated',
        this.icon && 'icon',
        this.inverted && 'inverted',
        this.color,
        this.primary && 'primary',
        this.secondary && 'secondary',
        this.tertiary && 'tertiary',
        this.basic && 'basic',
        this.labeled == 'left' && this.labeled,
        this.labeled && 'labelled',
        this.labelledIcon == 'right' && this.labelledIcon,
        this.labelledIcon && 'labeled icon',
        this.active && 'active',
        this.disabled && 'disabled',
        this.loading && 'loading',
        this.social,
        this.size,
        this.floated,
        this.floated && 'floated',
        this.toggle && 'toggle',
        'button'
      );
    },
  },
};
</script>
