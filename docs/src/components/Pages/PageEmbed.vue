<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Embed
      <FuiHeader sub>
        Embed examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleEmbedResponsiveAspectRatio1"></ExampleWithSource>
    <ExampleWithSource example="ModuleEmbedOnlyLoadAfterInteraction1"></ExampleWithSource>
    <ExampleWithSource example="ModuleEmbedYouTube1"></ExampleWithSource>
    <ExampleWithSource example="ModuleEmbedVimeo1"></ExampleWithSource>
    <ExampleWithSource example="ModuleEmbedCustomContent1"></ExampleWithSource>
    <ExampleWithSource example="ModuleEmbedAspectRatio1"></ExampleWithSource>
    <ExampleWithSource example="ModuleEmbedSpecifyingaURL1"></ExampleWithSource>
    <ExampleWithSource example="ModuleEmbedUsingContentIDs1"></ExampleWithSource>
    <ExampleWithSource example="ModuleEmbedSpecifyingMetadata1"></ExampleWithSource>
    <ExampleWithSource example="ModuleEmbedSpecifyingProgrammatically1"></ExampleWithSource>
    <ExampleWithSource example="ModuleEmbedSpecifyingNewSources1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'embed', '');

export default {
  name: 'PageEmbed',
  components: {
    ExampleWithSource,
  },
};
</script>