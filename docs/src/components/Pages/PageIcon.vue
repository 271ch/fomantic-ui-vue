<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Icon
      <FuiHeader sub>
        Icon examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementIcon1"></ExampleWithSource>
    <ExampleWithSource example="ElementIcon1A"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('elements', 'icon', '');

export default {
  name: 'PageIcon',
  components: {
    ExampleWithSource,
  },
};
</script>