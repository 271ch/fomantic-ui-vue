<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Text
      <FuiHeader sub>
        Text examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementText1"></ExampleWithSource>
    <ExampleWithSource example="ElementText2"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('elements', 'text', '');

export default {
  name: 'PageText',
  components: {
    ExampleWithSource,
  },
};
</script>
