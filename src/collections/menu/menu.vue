<template>
  <div :class="classes">
    <div
      v-if="header"
      class="header"
    >
      {{ header }}
    </div>
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiMenu',
  mixins: [
    Mixins.PSize,
    Mixins.PColor,
    Mixins.getMixinAttached(['top', 'bottom'], null),
  ],
  props: {
    n: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.Number.check(value);
      },
      default: false,
    },
    sub: {
      type: Boolean,
      description: '', // TODO: descr
    },
    header: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value !== true;
      },
      default: false,
    },
    vertical: {
      type: Boolean,
      description: '', // TODO: descr
    },
    right: {
      type: Boolean,
      description: '', // TODO: descr
    },
    borderless: {
      type: Boolean,
      description: '', // TODO: descr
    },
    fluid: {
      type: Boolean,
      description: '', // TODO: descr
    },
    compact: {
      type: Boolean,
      description: '', // TODO: descr
    },
    inverted: {
      type: Boolean,
      description: '', // TODO: descr
    },
    stackable: {
      type: Boolean,
      description: '', // TODO: descr
    },
    tabular: {
      type: Boolean,
      description: '', // TODO: descr
    },
    text: {
      type: Boolean,
      description: '', // TODO: descr
    },
    pointing: {
      type: Boolean,
      description: '', // TODO: descr
    },
    secondary: {
      type: Boolean,
      description: '', // TODO: descr
    },
    pagination: {
      type: Boolean,
      description: '', // TODO: descr
    },
    icon: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || value === 'labeled';
      },
      default: false,
    },
    fixed: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.FixedMenu.check(value);
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
        !this.sub && 'ui',
        ...this.getClassesSize,
        ...this.getClassesColor,
        this.fluid && 'fluid',
        this.n,
        this.n && 'item',
        this.inverted && 'inverted',
        this.secondary && 'secondary',
        this.pointing && 'pointing',
        this.compact && 'compact',
        this.fixed,
        this.fixed && 'fixed',
        this.vertical && 'vertical',
        this.stackable && 'stackable',
        this.right && 'right',
        ...this.getClassesAttached,
        this.borderless && 'borderless',
        this.tabular && 'tabular',
        this.icon,
        this.icon && 'icon',
        this.pagination && 'pagination',
        this.text && 'text',
        'menu'
      );
    },
  },
};
</script>
