<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Sidebar
      <FuiHeader sub>
        Sidebar examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleSidebarSidebar1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarSidebar2"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarVisible1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarDimmed1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarDirection1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarWidth1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarPageStructure1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarUsingwithMenu1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarUsingFixedContent1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebariOSSidebars1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarTransitions1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarDisplayingMultiple1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarUsingacustomcontext1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarTriggeringshowhidewithothercontent1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarTriggeringcustombehaviorwithothercontent1"></ExampleWithSource>
    <ExampleWithSource example="ModuleSidebarStartingVisible1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'sidebar', '');

export default {
  name: 'PageSidebar',
  components: {
    ExampleWithSource,
  },
};
</script>