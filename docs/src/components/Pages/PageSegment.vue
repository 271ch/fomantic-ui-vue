<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Segment
      <FuiHeader sub>
        Segment examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementSegmentSegment1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentPlaceholderSegment1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentPlaceholderSegment2"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentPlaceholderSegment3"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentRaised1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentStacked1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentStacked2"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentPiled1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentVerticalSegment1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentSegments1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentSegments2"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentSegments3"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentSegments4"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentNestedSegments1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentHorizontalSegments1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentHorizontalSegments2"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentHorizontalstackableSegments1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentRaisedSegments1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentStackedSegments1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentPiledSegments1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentLoading1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentLoading2"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentInverted1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentAttached1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentAttached2"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentPadded1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentPadded2"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentFitted1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentCompact1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentCompact2"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentColored1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentColored2"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentEmphasis1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentEmphasis2"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentEmphasis3"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentCircular1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentClearing1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentFloated1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentTextAlignment1"></ExampleWithSource>
    <ExampleWithSource example="ElementSegmentBasic1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('elements', 'segment', '');

export default {
  name: 'PageSegment',
  components: {
    ExampleWithSource,
  },
};
</script>