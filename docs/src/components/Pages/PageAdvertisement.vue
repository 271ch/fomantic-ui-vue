<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Advertisement
      <FuiHeader sub>
        Advertisement examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ViewAdvertisementAd1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementCommonUnits1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementMobile1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementRectangle1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementButton1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementSkyscraper1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementBanner1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementLeaderboards1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementPanorama1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementNetboard1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementCentered1"></ExampleWithSource>
    <ExampleWithSource example="ViewAdvertisementTest1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('views', 'advertisement', '');

export default {
  name: 'PageAdvertisement',
  components: {
    ExampleWithSource,
  },
};
</script>