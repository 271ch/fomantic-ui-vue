<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Placeholder
      <FuiHeader sub>
        Placeholder examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementPlaceholderPlaceholder1"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderPlaceholder2"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderPlaceholder3"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderLines1"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderHeaders1"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderHeaders2"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderParagraph1"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderImage1"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderImage2"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderImage3"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderLineLength1"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderLineLength2"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderFluid1"></ExampleWithSource>
    <ExampleWithSource example="ElementPlaceholderInverted1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from './ExampleWithSource'
import exUtils from './examplesUtils'

exUtils.registerComponents('elements', 'placeholder', '');

export default {
  name: 'PagePlaceholder',
  components: {
    ExampleWithSource,
  },
};
</script>