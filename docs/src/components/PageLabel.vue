<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Label
      <FuiHeader sub>
        Label examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementLabelLabel1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelImage1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelImage2"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelImage3"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelPointing1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelPointing2"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelCorner1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelTag1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelRibbon1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelRibbon2"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelRibbon3"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelRibbon4"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelAttached1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelHorizontal1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelFloating1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelFloatingleft1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelFloatingaligned1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelDetail1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelIcon1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelIcon2"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelIcon3"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelIcon4"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelImage1A"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelLink1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelLink2"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelCircular1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelCircular2"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelBasic1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelColored1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelBasicTagLabels1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelSize1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelGroupSize1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelColoredGroup1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelBasicGroup1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelTagGroup1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelCircularGroup1"></ExampleWithSource>
    <ExampleWithSource example="ElementLabelAllVariantsofLabelcanbeinverted1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from './ExampleWithSource'
import exUtils from './examplesUtils'

exUtils.registerComponents('elements', 'label', '');

export default {
  name: 'PageLabel',
  components: {
    ExampleWithSource,
  },
};
</script>