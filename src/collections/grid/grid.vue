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
    Mixins.getMixinAligned(['center'], null),
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
        this.doubling && 'doubling',
        this.column && this.column,
        this.column && 'column',
        this.relaxed === 'very' && 'very',
        this.relaxed && 'relaxed',
        this.stackable && 'stackable',
        ...this.getClassesAligned,
        this.equalHeight && 'equal height',
        this.equalWidth && 'equal width',
        this.divided && 'divided',
        'grid'
      );
    },
  },
};
</script>
