<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Step
      <FuiHeader sub>
        Step examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementStepStep1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepSteps1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepOrdered1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepVertical1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepDescription1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepIcon1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepLink1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepLink2"></ExampleWithSource>
    <ExampleWithSource example="ElementStepActive1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepCompleted1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepCompleted2"></ExampleWithSource>
    <ExampleWithSource example="ElementStepDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepStackable1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepFluid1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepUnstackable1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepAttached1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepEvenlyDivided1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepEvenlyDivided2"></ExampleWithSource>
    <ExampleWithSource example="ElementStepSize1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepSize2"></ExampleWithSource>
    <ExampleWithSource example="ElementStepSize3"></ExampleWithSource>
    <ExampleWithSource example="ElementStepSize4"></ExampleWithSource>
    <ExampleWithSource example="ElementStepSize5"></ExampleWithSource>
    <ExampleWithSource example="ElementStepSize6"></ExampleWithSource>
    <ExampleWithSource example="ElementStepSize7"></ExampleWithSource>
    <ExampleWithSource example="ElementStepInverted1"></ExampleWithSource>
    <ExampleWithSource example="ElementStepInverted2"></ExampleWithSource>
    <ExampleWithSource example="ElementStepInverted3"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('elements', 'step', '');

export default {
  name: 'PageStep',
  components: {
    ExampleWithSource,
  },
};
</script>