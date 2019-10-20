<template>
  <component
    :is="gTag"
    :class="classes"
  >
    <img
      v-if="image"
      :src="imageSrc"
    >
    <slot />
  </component>
</template>

<script>
import u from '../../lib/util';
import Enum from '../../lib/enum';
import Mixins from '../../lib/mixins';

export default {
  name: 'FuiLabel',
  mixins: [
    Mixins.getMixinTag(['a', 'span', 'label'], 'div'),
    Mixins.PColor,
  ],
  props: {
    image: {
      type: Boolean,
      description: 'A label can be formatted to emphasize an image.',
    },
    imageSrc: {
      type: String,
      description: 'Image path.',
      default: '',
    },
    pointing: {
      type: String,
      description: 'A label can point to content next to it.',
      validator: (value) => {
        return !value || Enum.PointingLabel.check(value);
      },
      default: '',
    },
    corner: {
      type: Boolean,
      description: 'A label can position itself in the corner of an element.',
    },
    cornerPosition: {
      type: String,
      description: 'Corner position of the label.',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
    },
    ribbon: {
      type: Boolean,
      description: 'A label can appear as a ribbon attaching itself to an element.',
    },
    ribbonPosition: {
      type: String,
      description: 'Ribbon position.',
      validator: (value) => {
        return !value || Enum.LeftRight.check(value);
      },
      default: '',
    },
    attached: {
      type: String,
      description: 'A label can attach to a content segment.',
      validator: (value) => {
        return !value || Enum.Attached.check(value);
      },
      default: '',
    },
    horizontal: {
      type: Boolean,
      description: 'A horizontal label is formatted to label content along-side it horizontally.',
    },
    basic: {
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
        this.pointing !== 'above' && this.pointing,
        this.pointing && 'pointing',
        ...this.getClassesColor,
        this.image && 'image',
        this.corner && [this.cornerPosition, 'corner'].join(' '),
        this.ribbonPosition !== 'left' && this.ribbonPosition,
        this.ribbon && 'ribbon',
        // icon position
        // icon
        this.horizontal && 'horizontal',
        this.basic && 'basic',
        'label'
      );
    },
  },
};
</script>
