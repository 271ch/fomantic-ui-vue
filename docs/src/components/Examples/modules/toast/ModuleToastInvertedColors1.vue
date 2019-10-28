<template>
  <div>
        <div class="code" data-demo="true">
        if(typeof document.suiToastColorIndex === 'undefined') {
          document.suiToastColorIndex = -1;
        }
        var suiColors = ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black'],
            suiPlus = function(){
                if (++document.suiToastColorIndex === suiColors.length) {
                    document.suiToastColorIndex = 0;
                }
                return document.suiToastColorIndex;
            }
        ;
        $('body')
          .toast({
            message: 'I am an inverted colorful toast',
//            class: 'inverted purple',
            class : 'inverted ' + suiColors[suiPlus()],   //cycle through all colors
            showProgress: 'bottom'
          })
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastInvertedColors1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Variations',
    title2: 'Inverted Colors',
    description: 'Same as above, just add',
    model: '        <div class="code" data-demo="true">\n' +
      '        if(typeof document.suiToastColorIndex === \'undefined\') {\n' +
      '          document.suiToastColorIndex = -1;\n' +
      '        }\n' +
      '        var suiColors = [\'red\',\'orange\',\'yellow\',\'olive\',\'green\',\'teal\',\'blue\',\'violet\',\'purple\',\'pink\',\'brown\',\'grey\',\'black\'],\n' +
      '            suiPlus = function(){\n' +
      '                if (++document.suiToastColorIndex === suiColors.length) {\n' +
      '                    document.suiToastColorIndex = 0;\n' +
      '                }\n' +
      '                return document.suiToastColorIndex;\n' +
      '            }\n' +
      '        ;\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            message: \'I am an inverted colorful toast\',\n' +
      '//            class: \'inverted purple\',\n' +
      '            class : \'inverted \' + suiColors[suiPlus()],   //cycle through all colors\n' +
      '            showProgress: \'bottom\'\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
