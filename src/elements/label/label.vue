<template>
  <component
    :is="gTag"
    :class="classes"
  >
    <img
      v-if="image!==false"
      :src="image"
    >
    <img
      v-if="src!==false"
      :src="src"
    >
    <slot />
    <component
      :is="detail?'div':'a'"
      v-if="detail!==false||detailA!==false"
      class="detail"
    >
      {{ detail || detailA }}
    </component>
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
    Mixins.getMixinOfBools(
      'Emphasis',
      {
        primary: 'Format showing a higher level of emphasis.',
        secondary: 'Format showing a lower level of emphasis.',
      }
    ),
    Mixins.PColor,
    Mixins.PSize,
    Mixins.getMixinAligned(['right', 'left'], null),
  ],
  props: {
    image: {
      type: [Boolean, String],
      validator: (value) => {
        return value !== true;
      },
      description: 'A label can be formatted to emphasize an image.',
      default: false,
    },
    src: {
      type: [Boolean, String],
      validator: (value) => {
        return value !== true;
      },
      description: 'A label can be formatted to emphasize an image.',
      default: false,
    },
    detail: {
      type: [Boolean, String],
      validator: (value) => {
        return value !== true;
      },
      description: '', // TODO: descr
      default: false,
    },
    detailA: {
      type: [Boolean, String],
      validator: (value) => {
        return value !== true;
      },
      description: '', // TODO: descr
      default: false,
    },
    pointing: {
      type: [Boolean, String],
      description: 'A label can point to content next to it.',
      validator: (value) => {
        return value === true || value === false || Enum.PointingLabel.check(value);
      },
      default: false,
    },
    corner: {
      type: [Boolean, String],
      description: 'A label can position itself in the corner of an element.',
      validator: (value) => {
        return value === false || value === true || Enum.LeftRight.check(value);
      },
      default: false,
    },
    icon: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || Enum.LeftRight.check(value);
      },
      default: false,
    },
    ribbon: {
      type: [Boolean, String],
      description: 'A label can appear as a ribbon attaching itself to an element.',
      validator: (value) => {
        return value === false || value === true || Enum.LeftRight.check(value);
      },
      default: false,
    },
    attached: {
      type: String,
      description: 'A label can attach to a content segment.',
      validator: (value) => {
        return !value || Enum.Attached.check(value);
      },
      default: '',
    },
    floating: {
      type: [Boolean, String],
      description: '', // TODO: descr
      validator: (value) => {
        return value === false || value === true || Enum.FloatingLabel.check(value);
      },
      default: false,
    },
    horizontal: {
      type: Boolean,
      description: 'A horizontal label is formatted to label content along-side it horizontally.',
    },
    basic: {
      type: Boolean,
      description: '', // TODO: descr
    },
    inverted: {
      type: Boolean,
      description: '', // TODO: descr
    },
    empty: {
      type: Boolean,
      description: '', // TODO: descr
    },
    circular: {
      type: Boolean,
      description: '', // TODO: descr
    },
    tagged: {
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
        this.pointing !== 'above' && this.pointing !== 'below' && this.pointing,
        this.pointing && 'pointing',
        this.pointing === 'below' && 'below',
        ...this.getClassesColor,
        ...this.getClassesSize,
        ...this.getClassesEmphasis,
        this.image && 'image',
        this.corner,
        this.corner && 'corner',
        this.icon,
        this.icon && 'icon',
        this.ribbon,
        this.ribbon && 'ribbon',
        this.horizontal && 'horizontal',
        ...this.getClassesAligned,
        this.floating,
        this.floating && 'floating',
        this.attached,
        this.attached && 'attached',
        this.inverted && 'inverted',
        this.basic && 'basic',
        this.empty && 'empty',
        this.circular && 'circular',
        this.tagged && 'tag',
        'label'
      );
    },
  },
};
</script>
