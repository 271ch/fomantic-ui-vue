<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Rating
      <FuiHeader sub>
        Rating examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleRatingRating1"></ExampleWithSource>
    <ExampleWithSource example="ModuleRatingIcon1"></ExampleWithSource>
    <ExampleWithSource example="ModuleRatingColor1"></ExampleWithSource>
    <ExampleWithSource example="ModuleRatingDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ModuleRatingSize1"></ExampleWithSource>
    <ExampleWithSource example="ModuleRatingSettingexistingvalues1"></ExampleWithSource>
    <ExampleWithSource example="ModuleRatingReadOnlyRatings1"></ExampleWithSource>
    <ExampleWithSource example="ModuleRatingClearingRatings1"></ExampleWithSource>
    <ExampleWithSource example="ModuleRatingMetadata1"></ExampleWithSource>
    <ExampleWithSource example="ModuleRatingJavascript1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'rating', '');

export default {
  name: 'PageRating',
  components: {
    ExampleWithSource,
  },
};
</script>