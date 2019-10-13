<template>
  <div>
    <div class="ui card">
      <div class="content">
        <div class="header">Cute Dog</div>
        <div class="meta">2 days ago</div>
        <div class="description">
          <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
          <p>Many people also have their own barometers for what makes a cute dog.</p>
        </div>
      </div>
      <div class="extra content">
        <i class="check icon"/>
        121 Votes
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardExtraContent1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'card',
      title1: 'Content',
      title2: 'Extra Content',
      description: 'A card can contain extra content meant to be formatted separately from the main content',
      model: '    <div class="ui card">\n' +
      '      <div class="content">\n' +
      '        <div class="header">Cute Dog</div>\n' +
      '        <div class="meta">2 days ago</div>\n' +
      '        <div class="description">\n' +
      '          <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>\n' +
      '          <p>Many people also have their own barometers for what makes a cute dog.</p>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="extra content">\n' +
      '        <i class="check icon"/>\n' +
      '        121 Votes\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
