<template>
  <component
    :is="gTag"
    :class="classes"
  >
    <div
      v-if="header"
      class="header"
    >
      {{ header }}
    </div>
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
    header: {
      type: [Boolean, String],
      description: '',
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
    disabled: {
      type: Boolean,
      description: '',
    },
    active: {
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
        this.disabled && 'disabled',
        this.active && 'active',
        'item'
      );
    },
  },
};
</script>
