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
      type: Boolean,
      description: 'A button can appear alongside a label.',
    },
    icon: {
      type: Boolean,
      description: 'A button can have only an icon.',
    },
    labeledIcon: {
      type: Boolean,
      description: 'A button can use an icon as a label.',
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
        'ui',
        this.animated && 'animated',
        this.icon && 'icon',
        this.labelledIcon && 'labelled icon',
        'button'
      );
    },
  },
};
</script>
