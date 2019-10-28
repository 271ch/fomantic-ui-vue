<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Accordion
      <FuiHeader sub>
        Accordion examples
      </FuiHeader>
    </FuiHeader>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'accordion', '');

export default {
  name: 'PageAccordion',
  components: {
    ExampleWithSource,
  },
};
</script>