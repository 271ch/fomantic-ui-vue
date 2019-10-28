<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Progress
      <FuiHeader sub>
        Progress examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleProgressStandard1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressIndicating1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressBar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressProgress1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressCenteredProgressText1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressLabel1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressMultipleBars1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressMultipleBarswithTextProportion1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressActive1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressSuccess1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressWarning1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressError1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressIndeterminate1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressIndeterminate2"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressInverted1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressAttached1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressAttached2"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressSize1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressColor1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressInvertedColor1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressWithmetadata1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressWithJavascript1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressAddingaTotalValue1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressInitializingwithMetadata1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressAddingCustomLabels1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressTranslation1"></ExampleWithSource>
    <ExampleWithSource example="ModuleProgressFrequentlyUpdatedProgress1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'progress', '');

export default {
  name: 'PageProgress',
  components: {
    ExampleWithSource,
  },
};
</script>