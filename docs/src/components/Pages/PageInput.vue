<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Input
      <FuiHeader sub>
        Input examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementInputInput1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputFocus1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLoading1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLoading2"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLoading3"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLoading4"></ExampleWithSource>
    <ExampleWithSource example="ElementInputDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputDisabled2"></ExampleWithSource>
    <ExampleWithSource example="ElementInputDisabled3"></ExampleWithSource>
    <ExampleWithSource example="ElementInputError1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputIcon1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputIcon2"></ExampleWithSource>
    <ExampleWithSource example="ElementInputIcon3"></ExampleWithSource>
    <ExampleWithSource example="ElementInputIcon4"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLabeled1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLabeled2"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLabeled3"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLabeled4"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLabeled5"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLabeled6"></ExampleWithSource>
    <ExampleWithSource example="ElementInputLabeled7"></ExampleWithSource>
    <ExampleWithSource example="ElementInputAction1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputAction2"></ExampleWithSource>
    <ExampleWithSource example="ElementInputAction3"></ExampleWithSource>
    <ExampleWithSource example="ElementInputAction4"></ExampleWithSource>
    <ExampleWithSource example="ElementInputAction5"></ExampleWithSource>
    <ExampleWithSource example="ElementInputAction6"></ExampleWithSource>
    <ExampleWithSource example="ElementInputTransparent1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputTransparent2"></ExampleWithSource>
    <ExampleWithSource example="ElementInputTransparent3"></ExampleWithSource>
    <ExampleWithSource example="ElementInputInverted1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputFluid1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputSize1"></ExampleWithSource>
    <ExampleWithSource example="ElementInputSize2"></ExampleWithSource>
    <ExampleWithSource example="ElementInputSize3"></ExampleWithSource>
    <ExampleWithSource example="ElementInputSize4"></ExampleWithSource>
    <ExampleWithSource example="ElementInputSize5"></ExampleWithSource>
    <ExampleWithSource example="ElementInputSize6"></ExampleWithSource>
    <ExampleWithSource example="ElementInputTextarea1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('elements', 'input', '');

export default {
  name: 'PageInput',
  components: {
    ExampleWithSource,
  },
};
</script>