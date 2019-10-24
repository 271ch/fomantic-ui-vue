<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Breadcrumb
      <FuiHeader sub>
        Breadcrumb examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="CollectionBreadcrumbBreadcrumb1"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbBreadcrumb2"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbDivider1"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbDivider2"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbSection1"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbLink1"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbActive1"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbInverted1"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbSize1"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbSize2"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbSize3"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbSize4"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbSize5"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbSize6"></ExampleWithSource>
    <ExampleWithSource example="CollectionBreadcrumbSize7"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('collections', 'breadcrumb', '');

export default {
  name: 'PageBreadcrumb',
  components: {
    ExampleWithSource,
  },
};
</script>