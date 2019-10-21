<template>
  <div :class="classes">
    <slot name="before" />
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :disabled="inputDisabled"
    >
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiInput',
  mixins: [
    Mixins.PColor,
    Mixins.PSize,
  ],
  props: {
    placeholder: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value !== true;
      },
      default: false,
    },
    value: {
      type: String,
      description: '', // TODO: descr
      default: '',
    },
    type: {
      type: String,
      description: '', // TODO: descr
      validator: (value) => {
        return value === 'text' || value === 'text';
      },
      default: 'text',
    },
    focus: {
      type: Boolean,
      description: '', // TODO: descr
    },
    disabled: {
      type: Boolean,
      description: '', // TODO: descr
    },
    error: {
      type: Boolean,
      description: '', // TODO: descr
    },
    transparent: {
      type: Boolean,
      description: '', // TODO: descr
    },
    inputDisabled: {
      type: Boolean,
      description: '', // TODO: descr
    },
    loading: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value === false || value === true || value === 'double' || value === "fast elastic";
      },
      default: false,
    },
    icon: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value === false || value === true || Enum.LeftRight.check(value);
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
        this.focus && 'focus',
        this.disabled && 'disabled',
        this.transparent && 'transparent',
        ...this.getClassesSize,
        this.icon === 'left' && 'left',
        this.icon && 'icon',
        ...this.getClassesColor,
        this.loading !== true && this.loading,
        this.loading && 'loading',
        this.error && 'error',
        'input'
      );
    },
  },
};
</script>
