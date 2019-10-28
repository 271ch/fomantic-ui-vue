<template>
  <div>
          <div class="evaluated code" data-type="javascript">
              $('#imagelabels').dropdown({
                className: {
                  label: 'ui image label',
                  icon: 'flag'
                },
                placeholder: 'Select some users',
                values:[{
                  "name": "Jenny",
                  "value": "jenny",
                  "selected" : true,
                  "image": "https://fomantic-ui.com/images/avatar/small/jenny.jpg",
                  "icon": "de"
                },
                {
                  "name": "Elliot",
                  "value": "elliot",
                  "selected" : true,
                  "image": "https://fomantic-ui.com/images/avatar/small/elliot.jpg",
                  "icon" : "us"
                },
                {
                  "name": "Stevie",
                  "value": "stevie",
                  "selected" : true,
                  "image": "https://fomantic-ui.com/images/avatar/small/stevie.jpg",
                  "icon" : "fr"
                }]
              })
              ;
          </div>
          <div class="ui fluid multiple selection dropdown" id="imagelabels">
              <input type="hidden"/>
              <i class="dropdown icon"/>
              <div class="default text"/>
          </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSupportingimagelabelsformultiselection1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: 'Supporting image labels for multiselection',
    description: 'If needed, you can adjust the classname for multiselection labels to make use of',
    model: '          <div class="evaluated code" data-type="javascript">\n' +
      '              $(\'#imagelabels\').dropdown({\n' +
      '                className: {\n' +
      '                  label: \'ui image label\',\n' +
      '                  icon: \'flag\'\n' +
      '                },\n' +
      '                placeholder: \'Select some users\',\n' +
      '                values:[{\n' +
      '                  "name": "Jenny",\n' +
      '                  "value": "jenny",\n' +
      '                  "selected" : true,\n' +
      '                  "image": "https://fomantic-ui.com/images/avatar/small/jenny.jpg",\n' +
      '                  "icon": "de"\n' +
      '                },\n' +
      '                {\n' +
      '                  "name": "Elliot",\n' +
      '                  "value": "elliot",\n' +
      '                  "selected" : true,\n' +
      '                  "image": "https://fomantic-ui.com/images/avatar/small/elliot.jpg",\n' +
      '                  "icon" : "us"\n' +
      '                },\n' +
      '                {\n' +
      '                  "name": "Stevie",\n' +
      '                  "value": "stevie",\n' +
      '                  "selected" : true,\n' +
      '                  "image": "https://fomantic-ui.com/images/avatar/small/stevie.jpg",\n' +
      '                  "icon" : "fr"\n' +
      '                }]\n' +
      '              })\n' +
      '              ;\n' +
      '          </div>\n' +
      '          <div class="ui fluid multiple selection dropdown" id="imagelabels">\n' +
      '              <input type="hidden"/>\n' +
      '              <i class="dropdown icon"/>\n' +
      '              <div class="default text"/>\n' +
      '          </div>\n',
  },
};
</script>
