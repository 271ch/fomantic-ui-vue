<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Rail
      <FuiHeader sub>
        Rail examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementRail1"></ExampleWithSource>
    <ExampleWithSource example="ElementRailRail1"></ExampleWithSource>
    <ExampleWithSource example="ElementRailInternal1"></ExampleWithSource>
    <ExampleWithSource example="ElementRailDividing1"></ExampleWithSource>
    <ExampleWithSource example="ElementRailAttached1"></ExampleWithSource>
    <ExampleWithSource example="ElementRailAttached2"></ExampleWithSource>
    <ExampleWithSource example="ElementRailClose1"></ExampleWithSource>
    <ExampleWithSource example="ElementRailClose2"></ExampleWithSource>
    <ExampleWithSource example="ElementRailSize1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from './ExampleWithSource'
import exUtils from './examplesUtils'

exUtils.registerComponents('elements', 'rail', '');

export default {
  name: 'PageRail',
  components: {
    ExampleWithSource,
  },
};
</script>