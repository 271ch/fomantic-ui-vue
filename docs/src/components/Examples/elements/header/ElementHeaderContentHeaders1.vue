<template>
  <div>
    <FuiButtons ignored icon font>
      <FuiButton increase> <FuiIcon name=plus></FuiIcon></FuiButton>
      <FuiButton decrease> <FuiIcon name=minus></FuiIcon></FuiButton>
    </FuiButtons>
    <FuiSegment class="ui sizer vertical segment">
      <div class="ui huge header">Huge Header</div>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <div class="ui large header">Large Header</div>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <div class="ui medium header">Medium Header</div>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <div class="ui small header">Small Header</div>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <div class="ui tiny header">Tiny Header</div>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderContentHeaders1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'header',
    title1: 'Types',
    title2: 'Content Headers',
    description: 'Headers may be oriented to give the importance of a section in the context of the content that surrounds it',
    model: '    <div class="ui ignored icon font buttons">\n' +
      '      <a class="increase ui button"> <i class="plus icon"></i></a>\n' +
      '      <a class="decrease ui button"> <i class="minus icon"></i></a>\n' +
      '    </div>\n' +
      '    <div class="ui sizer vertical segment">\n' +
      '      <div class="ui huge header">Huge Header</div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      <div class="ui large header">Large Header</div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      <div class="ui medium header">Medium Header</div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      <div class="ui small header">Small Header</div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      <div class="ui tiny header">Tiny Header</div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
