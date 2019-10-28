<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Nag
      <FuiHeader sub>
        Nag examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleNag1"></ExampleWithSource>
    <ExampleWithSource example="ModuleNag1A"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'nag', '');

export default {
  name: 'PageNag',
  components: {
    ExampleWithSource,
  },
};
</script>