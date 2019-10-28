<template>
  <div>
          <div class="ui ignored info message">Also works in a JSON response from a <code><a href="#match-search-query-on-server">remote API call</a></code></div>
          <div class="evaluated code" data-type="javascript">
              $('#imagesandicons').dropdown({
                placeholder: 'Show images and icons',
                values:[{
                  "name": "Avatar",
                  "value": "jenny",
                  "image": "https://fomantic-ui.com/images/avatar/small/jenny.jpg",
                  "imageClass": "ui avatar image"
                },
                {
                  "name": "Image",
                  "value": "elliot",
                  "image": "https://fomantic-ui.com/images/avatar/small/elliot.jpg"
                },
                {
                  "name": "Flag",
                  "value": "uk",
                  "icon": "uk",
                  "iconClass": "flag"
                },
                {
                  "name": "Icon",
                  "value": "female",
                  "icon": "female"
                },
                {
                  "name": "Colored Icon",
                  "value": "coloredfemale",
                  "icon": "pink female"
                },
                {
                  "name": "Image and Icon",
                  "value": "completefemale",
                  "image": "https://fomantic-ui.com/images/avatar/small/jenny.jpg",
                  "icon": "pink female"
                }]
              })
              ;
          </div>
          <div class="ui fluid long selection dropdown" id="imagesandicons">
              <input type="hidden"/>
              <i class="dropdown icon"/>
              <div class="default text"/>
          </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownDisplayimagesandoriconsbyvaluesetting1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: 'Display images and/or icons by value setting',
    description: 'Images and/or icons in front of an item can be dynamically created by providing image paths, icon names or classnames for different styling',
    model: '          <div class="ui ignored info message">Also works in a JSON response from a <code><a href="#match-search-query-on-server">remote API call</a></code></div>\n' +
      '          <div class="evaluated code" data-type="javascript">\n' +
      '              $(\'#imagesandicons\').dropdown({\n' +
      '                placeholder: \'Show images and icons\',\n' +
      '                values:[{\n' +
      '                  "name": "Avatar",\n' +
      '                  "value": "jenny",\n' +
      '                  "image": "https://fomantic-ui.com/images/avatar/small/jenny.jpg",\n' +
      '                  "imageClass": "ui avatar image"\n' +
      '                },\n' +
      '                {\n' +
      '                  "name": "Image",\n' +
      '                  "value": "elliot",\n' +
      '                  "image": "https://fomantic-ui.com/images/avatar/small/elliot.jpg"\n' +
      '                },\n' +
      '                {\n' +
      '                  "name": "Flag",\n' +
      '                  "value": "uk",\n' +
      '                  "icon": "uk",\n' +
      '                  "iconClass": "flag"\n' +
      '                },\n' +
      '                {\n' +
      '                  "name": "Icon",\n' +
      '                  "value": "female",\n' +
      '                  "icon": "female"\n' +
      '                },\n' +
      '                {\n' +
      '                  "name": "Colored Icon",\n' +
      '                  "value": "coloredfemale",\n' +
      '                  "icon": "pink female"\n' +
      '                },\n' +
      '                {\n' +
      '                  "name": "Image and Icon",\n' +
      '                  "value": "completefemale",\n' +
      '                  "image": "https://fomantic-ui.com/images/avatar/small/jenny.jpg",\n' +
      '                  "icon": "pink female"\n' +
      '                }]\n' +
      '              })\n' +
      '              ;\n' +
      '          </div>\n' +
      '          <div class="ui fluid long selection dropdown" id="imagesandicons">\n' +
      '              <input type="hidden"/>\n' +
      '              <i class="dropdown icon"/>\n' +
      '              <div class="default text"/>\n' +
      '          </div>\n',
  },
};
</script>
