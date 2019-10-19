<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Flag
      <FuiHeader sub>
        Flag examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementFlag1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from './ExampleWithSource'
import exUtils from './examplesUtils'

exUtils.registerComponents('elements', 'flag', '');

export default {
  name: 'PageFlag',
  components: {
    ExampleWithSource,
  },
};
</script>