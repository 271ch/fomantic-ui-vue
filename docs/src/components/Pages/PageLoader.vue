<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Loader
      <FuiHeader sub>
        Loader examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementLoaderLoader1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderTextLoader1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderTextLoader2"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderIndeterminate1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderActive1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderInline1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderInlineCenter1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderSpeed1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderColors1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderSize1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderInverted1"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderInverted2"></ExampleWithSource>
    <ExampleWithSource example="ElementLoaderStyles1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('elements', 'loader', '');

export default {
  name: 'PageLoader',
  components: {
    ExampleWithSource,
  },
};
</script>