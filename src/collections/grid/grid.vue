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
  name: 'FuiGrid',
  mixins: [
    Mixins.getMixinAligned(['center', 'right', 'middle'], null),
  ],
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
    doubling: { // TODO:descr
      type: Boolean,
      description: '',
    },
    vertically: { // TODO:descr
      type: Boolean,
      description: '',
    },
    reversed: { // TODO:descr
      type: Boolean,
      description: '',
    },
    divided: { // TODO:descr
      type: Boolean,
      description: '',
    },
    equalHeight: { // TODO:descr
      type: Boolean,
      description: '',
    },
    equalWidth: { // TODO:descr
      type: Boolean,
      description: '',
    },
    container: { // TODO:descr
      type: Boolean,
      description: '',
    },
    padded: {
      type: [Boolean, String],
      descr: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || value === 'vertically' || value === 'horizontally';
      },
      default: false,
    },
    centered: { // TODO:descr
      type: Boolean,
      description: '',
    },
    celled: {
      type: [Boolean, String],
      descr: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || value === 'internally';
      },
      default: false,
    },
    compact: {
      type: [Boolean, String],
      descr: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || value === 'very';
      },
      default: false,
    },
    display: {
      type: [Boolean, String],
      descr: '', // TODO: descr
      validator: (value) => {
        return value === false || Enum.Display.check(value);
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
        this.display,
        this.doubling && 'doubling',
        this.column && this.column,
        this.column && 'column',
        this.relaxed === 'very' && 'very',
        this.relaxed && 'relaxed',
        this.stackable && 'stackable',
        ...this.getClassesAligned,
        this.compact,
        this.compact && 'compact',
        this.vertically && 'vertically',
        this.reversed && 'reversed',
        this.divided && 'divided',
        this.equalHeight && 'equal height',
        this.equalWidth && 'equal width',
        this.celled,
        this.celled && 'celled',
        this.padded,
        this.padded && 'padded',
        this.centered && 'centered',
        'grid',
        this.container && 'container'
      );
    },
  },
};
</script>
