<template>
  <div
    :class="classes"
  >
    <a
      v-if="headerA"
      class="header"
    >
      {{ headerA }}
    </a>
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

export default {  // TODO: Component FuiContent
  name: 'FuiContent',
  mixins: [
    Mixins.getMixinAligned(['middle', 'top', 'bottom'], null),
  ],
  props: {
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
  },
  events: {
    click: {
      description: 'Click event',
    },
  },
  computed: {
    classes: function () {
      return u.concatClasses(
        ...this.getClassesAligned,
        'content'
      );
    },
  },
};
</script>
