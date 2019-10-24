<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Message
      <FuiHeader sub>
        Message examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="CollectionMessageMessage1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageListMessage1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageIconMessage1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageIconMessage2"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageDismissableBlock1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageHidden1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageVisible1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageFloating1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageCompact1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageAttached1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageWarning1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageInfo1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessagePositiveSuccess1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessagePositiveSuccess2"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageNegativeError1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageNegativeError2"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageColored1"></ExampleWithSource>
    <ExampleWithSource example="CollectionMessageSize1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('collections', 'message', '');

export default {
  name: 'PageMessage',
  components: {
    ExampleWithSource,
  },
};
</script>