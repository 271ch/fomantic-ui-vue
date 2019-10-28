<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Toast
      <FuiHeader sub>
        Toast examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleToastMinimal1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastTitled1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastProgressBar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastToastType1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastPosition1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastDuration1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastUseMessageStyle1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastDecreasingProgressBar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastColorVariants1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastInvertedColors1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastWithouticon1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastIndividualicon1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastCloseIcon1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastTransitions1"></ExampleWithSource>
    <ExampleWithSource example="ModuleToastShowBoxshadowonhover1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'toast', '');

export default {
  name: 'PageToast',
  components: {
    ExampleWithSource,
  },
};
</script>