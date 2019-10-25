<template>
  <div :class="classes">
    <slot name="before" />
    <input
      v-if="!prompt"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :disabled="inputDisabled"
    >
    <input
      v-if="prompt"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      class="prompt"
      :disabled="inputDisabled"
    >
    <slot />
  </div>
</template>

<script>
// TODO: the handling of the class prompt is not appropriate,
//       but using :class=getClassesInput result is class=""
//       in case of no classes
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
        return value === 'text' || value === 'password';
      },
      default: 'text',
    },
    focus: {
      type: Boolean,
      description: '', // TODO: descr
    },
    fluid: {
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
    action: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value === false || value === true || Enum.LeftRight.check(value);
      },
      default: false,
    },
    corner: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value === false || value === true || Enum.LeftRight.check(value);
      },
      default: false,
    },
    labeled: {
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value === false || value === true || Enum.LeftRight.check(value);
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
    id: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value !== true;
      },
      default: false,
    },
    prompt: {
      type: Boolean,
      description: '', // TODO: descr
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
        this.fluid && 'fluid',
        this.disabled && 'disabled',
        this.transparent && 'transparent',
        ...this.getClassesSize,
        this.action === 'right' && this.action,
        this.action === 'left' && this.action,
        this.action && 'action',
        this.icon === 'left' && 'left',
        this.icon && 'icon',
        this.corner,
        this.corner && 'corner',
        this.labeled,
        this.labeled && 'labeled',
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
