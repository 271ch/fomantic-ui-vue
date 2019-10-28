<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Transition
      <FuiHeader sub>
        Transition examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleTransitionScale1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionZoom1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionFade1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionFlip1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionDrop1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionFly1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionSwing1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionBrowse1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionSlide1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionJiggle1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionFlash1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionShake1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionPulse1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionTada1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionBounce1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTransitionGlow1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'transition', '');

export default {
  name: 'PageTransition',
  components: {
    ExampleWithSource,
  },
};
</script>