<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Image
      <FuiHeader sub>
        Image examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementImageImage1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageImage2"></ExampleWithSource>
    <ExampleWithSource example="ElementImageImage3"></ExampleWithSource>
    <ExampleWithSource example="ElementImageImageLink1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageHidden1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageAvatar1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageBordered1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageFluid1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageRounded1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageCircular1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageVerticallyAligned1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageCentered1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageSpaced1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageSpaced2"></ExampleWithSource>
    <ExampleWithSource example="ElementImageFloated1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageSize1"></ExampleWithSource>
    <ExampleWithSource example="ElementImageSize1A"></ExampleWithSource>
    <ExampleWithSource example="ElementImageSize2"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from './ExampleWithSource'
import exUtils from './examplesUtils'

exUtils.registerComponents('elements', 'image', '');

export default {
  name: 'PageImage',
  components: {
    ExampleWithSource,
  },
};
</script>