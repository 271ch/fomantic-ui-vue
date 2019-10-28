<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Tab
      <FuiHeader sub>
        Tab examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleTabTab1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabActive1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabLoading1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabCenteredItem1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabBasicTabs1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabMultipleTabGroups1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabDefaultPaths1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabRetreivingRemoteContent1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabEvaluatingScriptsinHTML1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabUsingHashHistory1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabUsingHTML5State1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabwithMenus1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabwithoutMenus1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTab1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabwithHashTags1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabwithHTML5State1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabSettingPaths1"></ExampleWithSource>
    <ExampleWithSource example="ModuleTab1A"></ExampleWithSource>
    <ExampleWithSource example="ModuleTabwithanAPIBehavior1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'tab', '');

export default {
  name: 'PageTab',
  components: {
    ExampleWithSource,
  },
};
</script>