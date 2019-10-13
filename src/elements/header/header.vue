<template>
  <component
    :is="tag()"
    :class="classes()"
  >
    <slot />
  </component>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiHeader',
  mixins: [
    Mixins.PHeaderLevel,
    Mixins.getMixinAttached(['', 'top', 'bottom'], '')
  ],
  props: {
    icon: {
      type: Boolean,
      description: 'A header can be formatted to emphasize an icon',
    },
    sub: {
      type: Boolean,
      description: 'Headers may be formatted to label smaller or de-emphasized content.',
    },
    disabled: {
      type: Boolean,
      description: 'A header can show that it is inactive.',
    },
    dividing: {
      type: Boolean,
      description: 'A header can be formatted to divide itself from the content below it.',
    },
    block: {
      type: Boolean,
      description: 'A header can be formatted to appear inside a content block.',
    },
    /*
    prop1: { // TODO: Component FuiHeader
      type: Boolean,
      description: '',
    },
    prop2: {
      type: String,
      description: '',
      default: '',
    },
    prop3: {
      type: String,
      description: '',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
    },
    */
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  methods: {
    tag: function () {
      if (this.level !== '')
        return Enum.HeaderLevel.value(this.level).tag;
      else
        return 'div';
    },
    classes: function () {
      return u.concatClasses(
        'ui',
        this.icon && 'icon',
        this.sub && 'sub',
        this.disabled && 'disabled',
        this.dividing && 'dividing',
        this.block && 'block',
        ...this.getClassesAttached(),
        'header'
      );
    },
  },
};
</script>
