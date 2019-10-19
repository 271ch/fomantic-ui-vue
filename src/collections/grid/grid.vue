<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
// import Mixins from '../../lib/mixins';

export default {
  name: 'FuiGrid',
  mixins: [],
  props: {
    column: {
      type: [Boolean, String],
      descr: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.Number.check(value);
      },
      default: false,
    },
    relaxed: {
      type: [Boolean, String],
      descr: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || value === 'very';
      },
      default: false,
    },
    stackable: { // TODO:descr
      type: Boolean,
      description: '',
    },
    /*
    prop1: { // TODO: Component FuiGrid
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
  computed: {
    classes: function () {
      return u.concatClasses(
        'ui',
        this.column && this.column,
        this.column && 'column',
        this.relaxed === 'very' && 'very',
        this.relaxed && 'relaxed',
        this.stackable && 'stackable',
        'grid'
      );
    },
  },
};
</script>
