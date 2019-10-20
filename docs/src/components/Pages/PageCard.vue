<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Card
      <FuiHeader sub>
        Card examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ViewCardCard1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardCard2"></ExampleWithSource>
    <ExampleWithSource example="ViewCardCards1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardCards2"></ExampleWithSource>
    <ExampleWithSource example="ViewCardContentBlock1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardImage1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardImage2"></ExampleWithSource>
    <ExampleWithSource example="ViewCardHeader1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardMetadata1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardLink1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardButtons1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardApproval1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardDescription1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardExtraContent1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardFluidCard1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardCenteredCard1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardHorizontalCards1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardHorizontalCards2"></ExampleWithSource>
    <ExampleWithSource example="ViewCardRaisedCard1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardRaisedCard2"></ExampleWithSource>
    <ExampleWithSource example="ViewCardLinkCard1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardLinkCard2"></ExampleWithSource>
    <ExampleWithSource example="ViewCardFloatedContent1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardTextAlignment1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardInverted1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardColored1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardColumnCount1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardStackable1"></ExampleWithSource>
    <ExampleWithSource example="ViewCardDoubling1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('views', 'card', '');

export default {
  name: 'PageCard',
  components: {
    ExampleWithSource,
  },
};
</script>