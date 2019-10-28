<template>
  <div>
      <div class="ui ignored warning message">
        Since these docs are statically hosted on GitHub Pages, html5 state tabs are not demonstrable from the docs. You will need to try this example in your own code.
      </div>
      <div class="code" data-type="javascript">
        $('.ui.menu .item')
          .tab({
            history : true,
            historyType : 'state',
            // base url for all other path changes
            path        : '/my/base/url'
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabUsingHTML5State1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'History Examples',
    title2: 'Using HTML5 State',
    description: 'For sites that are able to replicate change on the server, tab can automatically map changes in tab navigation to',
    model: '      <div class="ui ignored warning message">\n' +
      '        Since these docs are statically hosted on GitHub Pages, html5 state tabs are not demonstrable from the docs. You will need to try this example in your own code.\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '        $(\'.ui.menu .item\')\n' +
      '          .tab({\n' +
      '            history : true,\n' +
      '            historyType : \'state\',\n' +
      '            // base url for all other path changes\n' +
      '            path        : \'/my/base/url\'\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
