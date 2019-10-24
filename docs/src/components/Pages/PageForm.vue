<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Form
      <FuiHeader sub>
        Form examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="CollectionFormForm1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormForm2"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormField1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormFields1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormFields2"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormFields3"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormTextArea1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormCheckbox1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormRadioCheckbox1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormDropdown1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormDropdown2"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormMultipleSelect1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormHTMLSelect1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormCalendar1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormMessage1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormLoading1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormSuccess1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormError1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormWarning1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormFieldError1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormDisabledField1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormReadOnlyField1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormSize1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormSize2"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormSize3"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormSize4"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormSize5"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormSize6"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormSize7"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormEqualWidthForm1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormInverted1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormInlineField1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormWidth1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormRequired1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormTransparentTextarea1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormEvenlyDivided1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormGroupedFields1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormEqualWidthFields1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormInlineFields1"></ExampleWithSource>
    <ExampleWithSource example="CollectionFormInlineFields2"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('collections', 'form', '');

export default {
  name: 'PageForm',
  components: {
    ExampleWithSource,
  },
};
</script>