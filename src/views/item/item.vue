<template>
  <component
    :is="gTag"
    :class="classes"
  >
    <a
      v-if="headerA"
      class="header"
    >
      {{ headerA }}
    </a>
    <i
      v-if="iconName"
      :class="iconName + ' icon'"
    />
    <slot />
  </component>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiItem',
  mixins: [
    Mixins.getMixinTag(['a'], 'div'),
  ],
  props: {
    iconName: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value !== true;
      },
      default: false,
    },
    headerA: {
      type: [Boolean, String],
      description: '',
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
        'item'
      );
    },
  },
};
</script>
