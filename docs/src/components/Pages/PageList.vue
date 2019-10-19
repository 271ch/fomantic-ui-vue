<template>
  <FuiContainer main>
    <FuiHeader level=1>
      List
      <FuiHeader sub>
        List examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ElementListList1"></ExampleWithSource>
    <ExampleWithSource example="ElementListList2"></ExampleWithSource>
    <ExampleWithSource example="ElementListList3"></ExampleWithSource>
    <ExampleWithSource example="ElementListList4"></ExampleWithSource>
    <ExampleWithSource example="ElementListBulleted1"></ExampleWithSource>
    <ExampleWithSource example="ElementListBulleted2"></ExampleWithSource>
    <ExampleWithSource example="ElementListBulleted3"></ExampleWithSource>
    <ExampleWithSource example="ElementListOrdered1"></ExampleWithSource>
    <ExampleWithSource example="ElementListOrdered2"></ExampleWithSource>
    <ExampleWithSource example="ElementListOrdered3"></ExampleWithSource>
    <ExampleWithSource example="ElementListOrdered4"></ExampleWithSource>
    <ExampleWithSource example="ElementListLink1"></ExampleWithSource>
    <ExampleWithSource example="ElementListItem1"></ExampleWithSource>
    <ExampleWithSource example="ElementListIcon1"></ExampleWithSource>
    <ExampleWithSource example="ElementListImage1"></ExampleWithSource>
    <ExampleWithSource example="ElementListLink1A"></ExampleWithSource>
    <ExampleWithSource example="ElementListLink2"></ExampleWithSource>
    <ExampleWithSource example="ElementListHeader1"></ExampleWithSource>
    <ExampleWithSource example="ElementListDescription1"></ExampleWithSource>
    <ExampleWithSource example="ElementListHorizontal1"></ExampleWithSource>
    <ExampleWithSource example="ElementListHorizontal2"></ExampleWithSource>
    <ExampleWithSource example="ElementListHorizontal3"></ExampleWithSource>
    <ExampleWithSource example="ElementListInverted1"></ExampleWithSource>
    <ExampleWithSource example="ElementListSelection1"></ExampleWithSource>
    <ExampleWithSource example="ElementListAnimated1"></ExampleWithSource>
    <ExampleWithSource example="ElementListRelaxed1"></ExampleWithSource>
    <ExampleWithSource example="ElementListRelaxed2"></ExampleWithSource>
    <ExampleWithSource example="ElementListRelaxed3"></ExampleWithSource>
    <ExampleWithSource example="ElementListRelaxed4"></ExampleWithSource>
    <ExampleWithSource example="ElementListDivided1"></ExampleWithSource>
    <ExampleWithSource example="ElementListCelled1"></ExampleWithSource>
    <ExampleWithSource example="ElementListCelled2"></ExampleWithSource>
    <ExampleWithSource example="ElementListCelled3"></ExampleWithSource>
    <ExampleWithSource example="ElementListSize1"></ExampleWithSource>
    <ExampleWithSource example="ElementListSize2"></ExampleWithSource>
    <ExampleWithSource example="ElementListSize3"></ExampleWithSource>
    <ExampleWithSource example="ElementListSize4"></ExampleWithSource>
    <ExampleWithSource example="ElementListSize5"></ExampleWithSource>
    <ExampleWithSource example="ElementListSize6"></ExampleWithSource>
    <ExampleWithSource example="ElementListSize7"></ExampleWithSource>
    <ExampleWithSource example="ElementListVerticallyAligned1"></ExampleWithSource>
    <ExampleWithSource example="ElementListFloated1"></ExampleWithSource>
    <ExampleWithSource example="ElementListFloated2"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('elements', 'list', '');

export default {
  name: 'PageList',
  components: {
    ExampleWithSource,
  },
};
</script>