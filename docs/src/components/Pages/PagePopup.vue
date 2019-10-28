<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Popup
      <FuiHeader sub>
        Popup examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModulePopupPopup1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupTitled1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupHTML1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupPreExisting1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupTooltip1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupPosition1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupPosition2"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupSize1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupBasic1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupBasic1A"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupWidth1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupFluid1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupSize1A"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupFlowing1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupInverted1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupInitializingAPopup1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupUsingaPreexistingPopup1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupUsingaPreexistingPopupAnywhere1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupSpecifyingContentInMetadata1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupSpecifyingContentInJavascript1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupSpecifyingPopupBoundaries1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupWidePopupMenu1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupSpecifyingaselectorforapopup1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupSpecifyingatriggerevent1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupTargetElement1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupInlineorrelativetopage1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupPositioning1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupSpecifyinganoffset1"></ExampleWithSource>
    <ExampleWithSource example="ModulePopupTransitions1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'popup', '');

export default {
  name: 'PagePopup',
  components: {
    ExampleWithSource,
  },
};
</script>