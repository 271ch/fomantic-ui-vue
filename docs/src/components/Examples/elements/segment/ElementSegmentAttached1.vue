<template>
  <div>
    <div class="ui ignored info message">
      <p>Attached segments are designed to be used with other <code>attached</code> variations like <a href="/elements/header.html#attached">attached header</a> or <a href="/collections/message.html#attached">attached messages</a>.</p>
    </div>
    <div class="ui top attached segment">
      <p>This segment is on top</p>
    </div>
    <div class="ui attached segment">
      <p>This segment is attached on both sides</p>
    </div>
    <div class="ui bottom attached segment">
      <p>This segment is on bottom</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentAttached1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Attached',
      description: 'A segment can be attached to other content on a page',
      model: '    <div class="ui ignored info message">\n' +
      '      <p>Attached segments are designed to be used with other <code>attached</code> variations like <a href="/elements/header.html#attached">attached header</a> or <a href="/collections/message.html#attached">attached messages</a>.</p>\n' +
      '    </div>\n' +
      '    <div class="ui top attached segment">\n' +
      '      <p>This segment is on top</p>\n' +
      '    </div>\n' +
      '    <div class="ui attached segment">\n' +
      '      <p>This segment is attached on both sides</p>\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached segment">\n' +
      '      <p>This segment is on bottom</p>\n' +
      '    </div>\n',
    };
  },
};
</script>
