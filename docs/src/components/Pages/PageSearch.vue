<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Search
      <FuiHeader sub>
        Search examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleSearchStandard1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchStandard2"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchCategory1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchLocalSearch1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchLocalCategorySearch1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchSearchignoringDiacritics1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchLoading1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchFluid1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchAligned1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchUsingDifferentResponseFields1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchUsingAPISettings1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchVulnerableVersion1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSearchSanitizedVersion1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'search', '');

export default {
  name: 'PageSearch',
  components: {
    ExampleWithSource,
  },
};
</script>