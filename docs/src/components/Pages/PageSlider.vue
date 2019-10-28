<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Slider
      <FuiHeader sub>
        Slider examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleSliderSlider1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderSlider2"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderSlider3"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderRangeslider1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderInverted1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderReversed1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderVertical1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderColored1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderInvertedColored1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderSize1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderStep1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderStep2"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderSmoothslide1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSliderInitializingaslider1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'slider', '');

export default {
  name: 'PageSlider',
  components: {
    ExampleWithSource,
  },
};
</script>