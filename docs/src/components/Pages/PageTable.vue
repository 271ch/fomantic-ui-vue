<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Table
      <FuiHeader sub>
        Table examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="CollectionTableTable1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableTable2"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableTable3"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableTable4"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableDefinition1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableDefinition2"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableStructured1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTablePositiveNegative1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableError1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableWarning1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableActive1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableDisabled1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableColoredCells1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableSingleLine1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableFixed1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableFixed2"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableStacking1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableSelectableRow1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableSelectableRow2"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableSelectableCell1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableVerticalAlignment1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableTextAlignment1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableStriped1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableCelled1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableBasic1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableBasic2"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableCollapsingCell1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableColumnCount1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableColumnWidth1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableCollapsing1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableColored1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableInverted1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableInverted2"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableSortable1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableFullWidthHeaderFooter1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTablePadded1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTablePadded2"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableCompact1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableCompact2"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableSize1"></ExampleWithSource>
    <ExampleWithSource example="CollectionTableSize2"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('collections', 'table', '');

export default {
  name: 'PageTable',
  components: {
    ExampleWithSource,
  },
};
</script>