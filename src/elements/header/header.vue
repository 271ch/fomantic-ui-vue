<template>
  <component
    :is="gTag()"
    :class="classes"
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
    Mixins.getMixinAttached(['top', 'bottom'], null),
    Mixins.getMixinAligned(['left', 'right'], null),
    Mixins.getMixinFloated(['left', 'right'], null),
    Mixins.getMixinOfBools(
      'Emphasis',
      {
        primary: 'Format showing a higher level of emphasis.',
        secondary: 'Format showing a lower level of emphasis.',
      }
    ),
    Mixins.PColor,
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
    horizontal: {
      type: Boolean,
      description: '', // TODO: descr
    },
    divider: {
      type: Boolean,
      description: '', // TODO: descr
    },
    dividing: {
      type: Boolean,
      description: 'A header can be formatted to divide itself from the content below it.',
    },
    block: {
      type: Boolean,
      description: 'A header can be formatted to appear inside a content block.',
    },
    inverted: {
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
        !this.sub && 'ui',
        this.icon && 'icon',
        this.disabled && 'disabled',
        this.dividing && 'dividing',
        this.block && 'block',
        ...this.getClassesAttached,
        ...this.getClassesHeaderLevel(),
        this.horizontal && 'horizontal',
        ...this.getClassesAligned,
        ...this.getClassesFloated,
        ...this.getClassesColor,
        ...this.getClassesEmphasis,
        this.divider && 'divider',
        this.inverted && 'inverted',
        this.sub && 'sub',
        'header'
      );
    },
  },
};
</script>
