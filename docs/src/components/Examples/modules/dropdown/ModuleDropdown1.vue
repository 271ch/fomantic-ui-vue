<template>
  <div>
          <div class="evaluated code" data-type="javascript">
              $('#allavatars').dropdown({
                className: {
                  image: 'ui avatar image'
                },
                placeholder: 'Show users and their avatars',
                values:[{
                  "name": "Jenny",
                  "value": "jenny",
                  "image": "https://fomantic-ui.com/images/avatar/small/jenny.jpg",
                },
                {
                  "name": "Elliot",
                  "value": "elliot",
                  "image": "https://fomantic-ui.com/images/avatar/small/elliot.jpg"
                }]
              })
              ;
          </div>
          <div class="ui fluid selection dropdown" id="allavatars">
              <input type="hidden"/>
              <i class="dropdown icon"/>
              <div class="default text"/>
          </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdown1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: '???',
    description: 'To avoid adding the classNames to every item entry (for example if you want to display a list of avatars or flags), you could override the default setting for',
    model: '          <div class="evaluated code" data-type="javascript">\n' +
      '              $(\'#allavatars\').dropdown({\n' +
      '                className: {\n' +
      '                  image: \'ui avatar image\'\n' +
      '                },\n' +
      '                placeholder: \'Show users and their avatars\',\n' +
      '                values:[{\n' +
      '                  "name": "Jenny",\n' +
      '                  "value": "jenny",\n' +
      '                  "image": "https://fomantic-ui.com/images/avatar/small/jenny.jpg",\n' +
      '                },\n' +
      '                {\n' +
      '                  "name": "Elliot",\n' +
      '                  "value": "elliot",\n' +
      '                  "image": "https://fomantic-ui.com/images/avatar/small/elliot.jpg"\n' +
      '                }]\n' +
      '              })\n' +
      '              ;\n' +
      '          </div>\n' +
      '          <div class="ui fluid selection dropdown" id="allavatars">\n' +
      '              <input type="hidden"/>\n' +
      '              <i class="dropdown icon"/>\n' +
      '              <div class="default text"/>\n' +
      '          </div>\n',
  },
};
</script>
