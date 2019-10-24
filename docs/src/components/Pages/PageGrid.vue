<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Grid
      <FuiHeader sub>
        Grid examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="CollectionGrid1"></ExampleWithSource>
    <ExampleWithSource example="CollectionGrid1A"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('collections', 'grid', '');

export default {
  name: 'PageGrid',
  components: {
    ExampleWithSource,
  },
};
</script>