<template>
  <div>
      <div class="code" data-type="html">
        <div class="ui shape">
          <div class="sides">
            <div class="active side">This side starts visible.</div>
            <div class="side">This is yet another side</div>
            <div class="side">This is the last side</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleShapeRequiredMarkup1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'shape',
    title1: 'Getting Started',
    title2: 'Required Markup',
    description: 'Shapes can have any arbitrary content, just wrap each side in',
    model: '      <div class="code" data-type="html">\n' +
      '        <div class="ui shape">\n' +
      '          <div class="sides">\n' +
      '            <div class="active side">This side starts visible.</div>\n' +
      '            <div class="side">This is yet another side</div>\n' +
      '            <div class="side">This is the last side</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
