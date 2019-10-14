<template>
  <div :class="classes()">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiButtonGroup',
  mixins: [Mixins.PSize],
  props: {
    focusable: {
      type: Boolean,
      description: 'The button is keyboard accessible.',
    },
    primary: {
      type: Boolean,
      description: 'A button can be formatted to show different levels of emphasis.',
    },
    icon: {
      type: Boolean,
      description: 'Button groups can show groups of icons.',
    },
    labelledIcon: {
      type: Boolean,
      description: 'Button groups can be formatted as labeled icons.',
    },
    attached: {
      type: String,
      description: `A group of buttons can be attached vertically (${Enum.AttachedTB.str()}).`,
      validator: (value) => {
        return !value || Enum.AttachedLRTB.check(value);
      },
      default: '',
    },
    vertical: {
      type: Boolean,
      description: 'Groups can be formatted to appear vertically.',
    },
    color: {
      type: String,
      description: 'Button groups can have a shared color.',
      default: '',
    },
    equalWidth: {
      type: String,
      description: `Button groups can have their widths divided evenly.`,
      validator: (value) => {
        return !value || Enum.Number.check(value);
      },
      default: '',
    },
    basic: {
      type: Boolean,
      description: 'Button groups can be less pronounced.',
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
        this.equalWidth,
        'ui',
        ...this.getClassesSize(),
        this.color,
        this.attached,
        this.attached && 'attached',
        this.icon && 'icon',
        this.vertical && 'vertical',
        this.labelledIcon && 'labelled icon',
        this.basic && 'basic',
        'buttons'
      );
    },
  },
};
</script>
