<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Reveal
      <FuiHeader sub>
        Reveal examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementRevealFade1"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealFade2"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealMove1"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealMove2"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealMove3"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealMove4"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealRotate1"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealRotate2"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealVisibleContent1"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealHiddenContent1"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealActive1"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealInstant1"></ExampleWithSource>
    <ExampleWithSource example="ElementRevealDisabled1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('elements', 'reveal', '');

export default {
  name: 'PageReveal',
  components: {
    ExampleWithSource,
  },
};
</script>