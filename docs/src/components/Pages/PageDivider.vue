<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Divider
      <FuiHeader sub>
        Divider examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementDividerDivider1"></ExampleWithSource>
    <ExampleWithSource example="ElementDividerVerticalDivider1"></ExampleWithSource>
    <ExampleWithSource example="ElementDividerVerticalDivider2"></ExampleWithSource>
    <ExampleWithSource example="ElementDividerHorizontalDivider1"></ExampleWithSource>
    <ExampleWithSource example="ElementDividerHorizontalDivider2"></ExampleWithSource>
    <ExampleWithSource example="ElementDividerHorizontalAlignment1"></ExampleWithSource>
    <ExampleWithSource example="ElementDividerInverted1"></ExampleWithSource>
    <ExampleWithSource example="ElementDividerFitted1"></ExampleWithSource>
    <ExampleWithSource example="ElementDividerHidden1"></ExampleWithSource>
    <ExampleWithSource example="ElementDividerSection1"></ExampleWithSource>
    <ExampleWithSource example="ElementDividerClearing1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('elements', 'divider', '');

export default {
  name: 'PageDivider',
  components: {
    ExampleWithSource,
  },
};
</script>