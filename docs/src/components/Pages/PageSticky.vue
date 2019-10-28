<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Sticky
      <FuiHeader sub>
        Sticky examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleSticky1"></ExampleWithSource>
    <ExampleWithSource example="ModuleStickyStickingtoAdjacentContext1"></ExampleWithSource>
    <ExampleWithSource example="ModuleStickyPushing1"></ExampleWithSource>
    <ExampleWithSource example="ModuleStickyOversizedContent1"></ExampleWithSource>
    <ExampleWithSource example="ModuleStickyStickingtoOwnContext1"></ExampleWithSource>
    <ExampleWithSource example="ModuleStickyInitializing1"></ExampleWithSource>
    <ExampleWithSource example="ModuleStickyRefreshingCachedValues1"></ExampleWithSource>
    <ExampleWithSource example="ModuleStickyStickyConditions1"></ExampleWithSource>
    <ExampleWithSource example="ModuleStickyAdjustingOffsetandPadding1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'sticky', '');

export default {
  name: 'PageSticky',
  components: {
    ExampleWithSource,
  },
};
</script>