<template>
  <div>
    <FuiButtons icon>
      <FuiButton> <FuiIcon name=plus></FuiIcon></FuiButton>
      <FuiButton> <FuiIcon name=minus></FuiIcon></FuiButton>
    </FuiButtons>
    <FuiSegment vertical>
      <FuiHeader size=huge>Huge Header</FuiHeader>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <FuiHeader size=large>Large Header</FuiHeader>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <FuiHeader size=medium>Medium Header</FuiHeader>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <FuiHeader size=small>Small Header</FuiHeader>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <FuiHeader size=tiny>Tiny Header</FuiHeader>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderContentHeaders1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'header',
    title1: 'Types',
    title2: 'Content Headers',
    description: 'Headers may be oriented to give the importance of a section in the context of the content that surrounds it',
    model: '    <div class="ui icon buttons">\n' +
      '      <button class="ui button"> <i class="plus icon"></i></button>\n' +
      '      <button class="ui button"> <i class="minus icon"></i></button>\n' +
      '    </div>\n' +
      '    <div class="ui vertical segment">\n' +
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
