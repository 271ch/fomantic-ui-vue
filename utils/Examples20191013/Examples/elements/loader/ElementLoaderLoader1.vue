<template>
  <div>
    <div class="ui ignored info message">Loaders are hidden unless <code>active</code> or inside an <a href="/modules/dimmer.html"><code>active dimmer</code></a>.</div>
    <div class="ui segment">
      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>
      <div class="ui active dimmer">
        <div class="ui loader"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderLoader1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'loader',
      title1: 'Types',
      title2: 'Loader',
      description: 'A loader',
      model: '    <div class="ui ignored info message">Loaders are hidden unless <code>active</code> or inside an <a href="/modules/dimmer.html"><code>active dimmer</code></a>.</div>\n' +
      '    <div class="ui segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      <div class="ui active dimmer">\n' +
      '        <div class="ui loader"/>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
