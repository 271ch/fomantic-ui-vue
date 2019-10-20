<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Statistic
      <FuiHeader sub>
        Statistic examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ViewStatisticStatistic1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticStatistic2"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticStatisticGroup1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticValue1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticLabel1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticHorizontalStatistic1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticHorizontalStatistic2"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticColored1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticInverted1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticStackable1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticEvenlyDivided1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticFloated1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticSize1"></ExampleWithSource>
    <ExampleWithSource example="ViewStatisticSize2"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('views', 'statistic', '');

export default {
  name: 'PageStatistic',
  components: {
    ExampleWithSource,
  },
};
</script>