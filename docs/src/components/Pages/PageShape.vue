<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Shape
      <FuiHeader sub>
        Shape examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleShapeShape1"></ExampleWithSource>
    <ExampleWithSource example="ModuleShapeCube1"></ExampleWithSource>
    <ExampleWithSource example="ModuleShapeText1"></ExampleWithSource>
    <ExampleWithSource example="ModuleShapeShapeTypes1"></ExampleWithSource>
    <ExampleWithSource example="ModuleShapeRequiredMarkup1"></ExampleWithSource>
    <ExampleWithSource example="ModuleShapeAnimatingwithJavascript1"></ExampleWithSource>
    <ExampleWithSource example="ModuleShape1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'shape', '');

export default {
  name: 'PageShape',
  components: {
    ExampleWithSource,
  },
};
</script>