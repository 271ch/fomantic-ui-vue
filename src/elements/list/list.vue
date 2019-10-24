<template>
  <component
    :is="gTag"
    :class="classes"
  >
    <slot />
  </component>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiList',
  mixins: [
    Mixins.getMixinTag(['ul', 'ol'], 'div'),
    Mixins.PSize,
    Mixins.getMixinAligned(['middle'], null),
  ],
  props: {
    celled: { // TODO: Component FuiList
      type: Boolean,
      description: '',
    },
    horizontal: { // TODO: Component FuiList
      type: Boolean,
      description: '',
    },
    floated: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || value === 'right';
      },
      default: false,
    },
    divided: { // TODO: Component FuiList
      type: Boolean,
      description: '',
    },
    ordered: { // TODO: Component FuiList
      type: Boolean,
      description: '',
    },
    bulleted: { // TODO: Component FuiList
      type: Boolean,
      description: '',
    },
    link: { // TODO: Component FuiList
      type: Boolean,
      description: '',
    },
    suffixed: {
      type: Boolean,
      description: '', // TODO: descr
    },
    inverted: {
      type: Boolean,
      description: '', // TODO: descr
    },
    relaxed: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === true || value === false || value === 'very';
      },
      default: false,
    },
    selection: { // TODO: Component FuiList
      type: Boolean,
      description: '',
    },
    animated: { // TODO: Component FuiList
      type: Boolean,
      description: '',
    },
    sub: {
      type: Boolean,
      description: 'Sublist',
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
        this.inverted && 'inverted',
        this.relaxed,
        this.relaxed && 'relaxed',
        ...this.getClassesSize,
        ...this.getClassesAligned,
        this.animated && 'animated',
        this.selection && 'selection',
        this.ordered && 'ordered',
        this.celled && 'celled',
        this.floated,
        this.floated && 'floated',
        this.horizontal && 'horizontal',
        this.bulleted && 'bulleted',
        this.suffixed && 'suffixed',
        this.link && 'link',
        this.divided && 'divided',
        'list'
      );
    },
  },
};
</script>
