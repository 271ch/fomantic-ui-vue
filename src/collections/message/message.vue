<template>
  <div :class="classes">
    <i
      v-if="iconName"
      :class="iconName + ' icon'"
    />
    <div
      v-if="header"
      class="header"
    >
      {{ header }}
    </div>
    <slot />
  </div>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiMessage',
  mixins: [
    Mixins.PSize,
    Mixins.getMixinOfBools(
      'Kind',
      {
        info: '',
        success: '',
        warning: '',
        error: '',
        positive: '',
        negative: '',
      }
    ),
  ],
  props: {
    visible: { // TODO: descr
      type: Boolean,
      description: '',
    },
    icon: { // TODO: descr
      type: Boolean,
      description: '',
    },
    iconName: {
      type: [Boolean, String],
      description: '',
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
    /*
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
  computed: {
    classes: function () {
      return u.concatClasses(
        'ui',
        ...this.getClassesSize,
        ...this.getClassesKind,
        this.icon && 'icon',
        this.visible && 'visible',
        'message'
      );
    },
  },
};
</script>
