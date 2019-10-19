<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Header
      <FuiHeader sub>
        Header examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementHeaderPageHeaders1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderContentHeaders1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderIconHeaders1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderIconHeaders2"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderSubHeaders1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderSubHeaders2"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderImage1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderImage2"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderImage3"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderIcon1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderIcon2"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderSubheader1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderSubheader2"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderDividing1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderBlock1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderAttached1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderFloating1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderTextAlignment1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderColored1"></ExampleWithSource>
    <ExampleWithSource example="ElementHeaderInverted1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('elements', 'header', '');

export default {
  name: 'PageHeader',
  components: {
    ExampleWithSource,
  },
};
</script>