<template>
  <div>
    <div class="ui black label">New in 2.7.0</div>
    <div class="ui ignored info message"><code>elastic</code> as loading style is currently not supported  because segment uses the <code>:before</code> pseudoclass to dimm the background.</div>
    <div class="ui brown double loading segment">
        <img src="/images/wireframe/paragraph.png" class="ui wireframe image">
    </div>
    <div class="ui brown usual double loading segment">
        <img src="/images/wireframe/paragraph.png" class="ui wireframe image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentLoading2',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'segment',
    title1: 'States',
    title2: 'Loading',
    description: 'A segment may show its content is being loaded',
    model: '    <div class="ui black label">New in 2.7.0</div>\n' +
      '    <div class="ui ignored info message"><code>elastic</code> as loading style is currently not supported  because segment uses the <code>:before</code> pseudoclass to dimm the background.</div>\n' +
      '    <div class="ui brown double loading segment">\n' +
      '        <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div class="ui brown usual double loading segment">\n' +
      '        <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
