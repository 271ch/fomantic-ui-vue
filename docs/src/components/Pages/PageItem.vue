<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Item
      <FuiHeader sub>
        Item examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ViewItemItems1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemImage1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemContent1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemHeader1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemMetadata1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemLink1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemDescription1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemExtraContent1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemRating1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemStacking1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemDivided1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemRelaxed1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemRelaxed2"></ExampleWithSource>
    <ExampleWithSource example="ViewItemLinkItem1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemVerticalAlignment1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemFloatedContent1"></ExampleWithSource>
    <ExampleWithSource example="ViewItemInverted1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('views', 'item', '');

export default {
  name: 'PageItem',
  components: {
    ExampleWithSource,
  },
};
</script>