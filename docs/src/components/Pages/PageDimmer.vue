<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Dimmer
      <FuiHeader sub>
        Dimmer examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleDimmerDimmer1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerContentDimmer1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerPageDimmer1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerActive1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerBlurring1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerBlurring2"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerVerticalAlignment1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerVerticalAlignment2"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerSimpleDimmer1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerInvertedDimmer1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerDimmerShades1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerDimmerShades2"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerDimmerShades3"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerPartiallyDimmer1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerPartiallyDimmer2"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerPartiallyDimmer3"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmer1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerDimmerEvents1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerLoadersinsideDimmers1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmer1A"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerDisplay1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerCreatingDimmers1"></ExampleWithSource>
    <ExampleWithSource example="ModuleDimmerShowingaSpecificDimmer1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'dimmer', '');

export default {
  name: 'PageDimmer',
  components: {
    ExampleWithSource,
  },
};
</script>