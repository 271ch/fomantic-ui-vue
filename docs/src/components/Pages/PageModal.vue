<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Modal
      <FuiHeader sub>
        Modal examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleModalModal1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalBasic1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalHeader1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalContent1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalImageContent1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalActions1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalFullScreen1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalOverlayFullScreen1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalSize1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalInverted1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalScrollingContent1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalActive1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalDisablingVerticalCentering1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalToporBottomaligned1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalScrollingModal1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalInternallyScrollingContent1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalMultipleModals1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalForcingaChoice1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalApproveDenyCallbacks1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalAttachevents1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalTransitions1"></ExampleWithSource>
    <ExampleWithSource example="ModuleModalDimmerVariations1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'modal', '');

export default {
  name: 'PageModal',
  components: {
    ExampleWithSource,
  },
};
</script>