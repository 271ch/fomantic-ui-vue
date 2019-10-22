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

// TODO: header's contain also divider's:
// https://fomantic-ui.com/elements/divider.html#horizontal-alignment

export default {
  name: 'FuiDivider',
  mixins: [
    Mixins.PHeaderLevel,
  ],
  props: {
    vertical: {
      type: Boolean,
      description: 'A divider can segment content vertically',
    },
    horizontal: {
      type: Boolean,
      description: 'A divider can segment content horizontally',
    },
    inverted: {
      type: Boolean,
      description: 'A divider can have its colors inverted',
    },
    fitted: {
      type: Boolean,
      description: 'A divider can be fitted, without any space above or below it.',
    },
    hidden: {
      type: Boolean,
      description: 'A hidden divider divides content without creating a dividing line',
    },
    section: {
      type: Boolean,
      description: 'A divider can provide greater margins to divide sections of content',
    },
    clearing: {
      type: Boolean,
      description: 'A divider can clear the contents above it',
    },
    ignored: {
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
        this.vertical && 'vertical',
        this.horizontal && 'horizontal',
        this.inverted && 'inverted',
        this.fitted && 'fitted',
        this.hidden && 'hidden',
        this.section && 'section',
        this.clearing && 'clearing',
        this.ignored && 'ignored',
        'divider'
      );
    },
  },
};
</script>
