<template>
  <img v-if="gTag === 'img'"
    :src="src"
    :class="classes"
  >
  <component v-else
    :class="classes"
    :is="gTag">
    <slot />
    <img v-if="src !== false"
      :src="src"
    >
  </component>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiImage',
  mixins: [
    Mixins.PSize,
    Mixins.getMixinFloated(['left', 'right'], null),
    Mixins.getMixinAligned(['top', 'bottom', 'middle'], null),
    Mixins.getMixinTag(['a', 'div'], 'img'),
  ],
  props: {
    wireframe: { // TODO: description
      type: Boolean,
      description: '',
    },
    hidden: { // TODO: description
      type: Boolean,
      description: '',
    },
    disabled: { // TODO: description
      type: Boolean,
      description: '',
    },
    bordered: { // TODO: description
      type: Boolean,
      description: '',
    },
    circular: { // TODO: description
      type: Boolean,
      description: '',
    },
    rounded: { // TODO: description
      type: Boolean,
      description: '',
    },
    mini: { // TODO: description
      type: Boolean,
      description: '',
    },
    avatar: { // TODO: description
      type: Boolean,
      description: '',
    },
    centered: { // TODO: description
      type: Boolean,
      description: '',
    },
    fluid: { // TODO: description
      type: Boolean,
      description: '',
    },
    spaced: { // TODO: description
      type: [Boolean, String],
      description: '',
      validator: (value) => {
        return value === false || value === true || Enum.LeftRight.check(value);
      },
      default: false,
    },
    src: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value !== true;
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
        this.hidden && 'hidden',
        this.disabled && 'disabled',
        this.wireframe && 'wireframe',
        ...this.getClassesSize,
        this.centered && 'centered',
        this.fluid && 'fluid',
        ...this.getClassesFloated,
        ...this.getClassesAligned,
        this.bordered && 'bordered',
        this.circular && 'circular',
        this.rounded && 'rounded',
        this.spaced !== true && this.spaced,
        this.spaced && 'spaced',
        this.avatar && 'avatar',
        this.mini && 'mini',
        'image'
      );
    },
  },
};
</script>
