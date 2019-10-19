<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Button
      <FuiHeader sub>
        Button examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementButtonButton1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonButton2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonEmphasis1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonEmphasis2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonAnimated1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonLabeled1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonLabeled2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonIcon1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonLabeledIcon1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonBasic1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonBasic2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonBasic3"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonTertiary1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonTertiary2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonInverted1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonInverted2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonButtons1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonIconButtons1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonConditionals1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonConditionals2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonActive1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonLoading1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonSocial1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonSize1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonFloated1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonColored1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonCompact1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonToggle1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonPositive1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonNegative1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonFluid1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonCircular1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonCircular2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonVerticallyAttached1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonVerticallyAttached2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonHorizontallyAttached1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonVerticalButtons1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonIconButtons1A"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonLabeledIconButtons1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonMixedGroup1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonEqualWidth1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonColoredButtons1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonBasicButtons1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonBasicButtons2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonGroupSizes1"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonGroupSizes2"></ExampleWithSource>
    <ExampleWithSource example="ElementButtonGroupSizes3"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from './ExampleWithSource'
import exUtils from './examplesUtils'

exUtils.registerComponents('elements', 'button', '');

export default {
  name: 'PageButton',
  components: {
    ExampleWithSource,
  },
};
</script>