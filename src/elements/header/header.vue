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
  mixins: [Mixins.PHeaderLevel],
  props: {
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
        'header'
      );
    },
  },
};
</script>
