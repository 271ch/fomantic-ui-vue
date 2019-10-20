<template>
  <FuiContainer main>
    <FuiHeader level=1>
      Comment
      <FuiHeader sub>
        Comment examples
      </FuiHeader>
    </FuiHeader>
    <ExampleWithSource example="ViewCommentComments1"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentAvatar1"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentMetadata1"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentActions1"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentReplyForm1"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentReplyForm2"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentCollapsed1"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentThreaded1"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentMinimal1"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentSize1"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentSize2"></ExampleWithSource>
    <ExampleWithSource example="ViewCommentInverted1"></ExampleWithSource>
  </FuiContainer>
</template>

<script>
import ExampleWithSource from '../ExampleWithSource'
import exUtils from '../examplesUtils'

exUtils.registerComponents('views', 'comment', '');

export default {
  name: 'PageComment',
  components: {
    ExampleWithSource,
  },
};
</script>