<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Feed
      <FuiHeader sub>
        Feed examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ViewFeedFeed1"></ExampleWithSource>
    <ExampleWithSource example="ViewFeedLabel1"></ExampleWithSource>
    <ExampleWithSource example="ViewFeedLabel2"></ExampleWithSource>
    <ExampleWithSource example="ViewFeedDate1"></ExampleWithSource>
    <ExampleWithSource example="ViewFeedDate2"></ExampleWithSource>
    <ExampleWithSource example="ViewFeedAdditionalinformation1"></ExampleWithSource>
    <ExampleWithSource example="ViewFeedSize1"></ExampleWithSource>
    <ExampleWithSource example="ViewFeedSize2"></ExampleWithSource>
    <ExampleWithSource example="ViewFeedInverted1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('views', 'feed', '');

export default {
  name: 'PageFeed',
  components: {
    ExampleWithSource,
  },
};
</script>
