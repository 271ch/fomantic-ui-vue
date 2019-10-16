<template>
  <component
    :is="gTag()"
    :class="classes()"
  >
    <slot />
  </component>
</template>

<script>
import u from '../../lib/util';
// import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {  // TODO: Component FuiHeader
  name: 'FuiHeader',
  mixins: [
    Mixins.PHeaderLevel,
    Mixins.getMixinAttached(['', 'top', 'bottom'], '')
  ],
  props: {
    icon: {
      type: Boolean,
      description: 'A header can be formatted to emphasize an icon',
    },
    sub: {
      type: Boolean,
      description: 'Headers may be formatted to label smaller or de-emphasized content.',
    },
    disabled: {
      type: Boolean,
      description: 'A header can show that it is inactive.',
    },
    dividing: {
      type: Boolean,
      description: 'A header can be formatted to divide itself from the content below it.',
    },
    block: {
      type: Boolean,
      description: 'A header can be formatted to appear inside a content block.',
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
        this.icon && 'icon',
        this.sub && 'sub',
        this.disabled && 'disabled',
        this.dividing && 'dividing',
        this.block && 'block',
        ...this.getClassesAttached(),
        ...this.getClassesHeaderLevel(),
        'header'
      );
    },
  },
};
</script>
