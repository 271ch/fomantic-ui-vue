<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiButtons',
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
    labeledIcon: {
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
      type: [Boolean, String],
      description: `Button groups can have their widths divided evenly.`,
      validator: (value) => {
        return value === false || Enum.Number.check(value);
      },
      default: false,
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
  computed: {
    classes: function () {
      return u.concatClasses(
        'ui',
        this.equalWidth,
        ...this.getClassesSize,
        this.color,
        this.attached,
        this.attached && 'attached',
        this.vertical && 'vertical',
        this.basic && 'basic',
        this.icon && 'icon',
        this.labeledIcon && 'labeled icon',
        'buttons'
      );
    },
  },
};
</script>
