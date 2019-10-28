<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Checkbox
      <FuiHeader sub>
        Checkbox examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ModuleCheckboxCheckbox1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxRadio1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxRadio2"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxRadio3"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxSlider1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxSlider2"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxToggle1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxReadonly1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxChecked1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxIndeterminate1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxDisabled1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxFitted1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxInverted1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxUsingCallbacks1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxGroupedCheckboxes1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxCheckingConditions1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxOneWayChoices1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxAttachingEventstootherElements1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxCheckbox1A"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxFullFeaturedCheckboxes1"></ExampleWithSource>
    <ExampleWithSource example="ModuleCheckboxLinkedLabels1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('modules', 'checkbox', '');

export default {
  name: 'PageCheckbox',
  components: {
    ExampleWithSource,
  },
};
</script>