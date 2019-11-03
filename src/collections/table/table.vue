<template>
  <table :class="classes">
    <slot />
  </table>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiTable',
  mixins: [
    Mixins.PColor,
  ],
  props: {
    definition: {
      type: Boolean,
      description: '', // TODO: descr
    },
    collapsing: {
      type: Boolean,
      description: '', // TODO: descr
    },
    celled: {
      type: Boolean,
      description: '', // TODO: descr
    },
    column: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.Number.check(value);
      },
      default: false,
    },
    padded: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || value === 'very';
      },
      default: false,
    },
    compact: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || value === 'very';
      },
      default: false,
    },
    basic: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || value === 'very';
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
        'ui',
        ...this.getClassesColor,
        this.definition && 'definition',
        this.compact,
        this.compact && 'compact',
        this.basic,
        this.basic && 'basic',
        this.column,
        this.column && 'column',
        this.collapsing && 'collapsing',
        this.celled && 'celled',
        this.padded,
        this.padded && 'padded',
        'table'
      );
    },
  },
};
</script>
