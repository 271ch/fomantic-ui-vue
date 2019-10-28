<template>
  <div>
      <div class="code" data-demo="true">
        // If a dimmer exists on a page, you can make it appear by calling it directly
        $('.page.dimmer:first')
          .dimmer('toggle')
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmerShowingaSpecificDimmer1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'Usage',
    title2: 'Showing a Specific Dimmer',
    description: 'If a dimmer is already inside an element, you can call behavior on the dimmable section or the dimmer itself.',
    model: '      <div class="code" data-demo="true">\n' +
      '        // If a dimmer exists on a page, you can make it appear by calling it directly\n' +
      '        $(\'.page.dimmer:first\')\n' +
      '          .dimmer(\'toggle\')\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
