<template>
  <div>
      <div class="code" data-label="HTML" data-type="html">
        <div class="ui vertical menu" id="hybrid">
          <div class="ui dropdown item">
            <i class="dropdown icon"/>
            Colors
            <select>
              <option>Red</option>
              <option>Black</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </div>
          <div class="ui dropdown item">
            <i class="dropdown icon"/>
            Sizes
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Huge</option>
            </select>
          </div>
        </div>
      </div>
      <div class="code" data-type="javascript" data-demo="true">
        $('#hybrid select')
          .dropdown({
            on: 'hover'
          })
        ;
      </div>
      <div class="ui vertical menu" id="hybrid">
          <div class="ui dropdown item">
            <i class="dropdown icon"/>
            Colors
            <select>
              <option>Red</option>
              <option>Black</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </div>
          <div class="ui dropdown item">
            <i class="dropdown icon"/>
            Sizes
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Huge</option>
            </select>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownHybridFormInitialization1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: 'Hybrid Form Initialization',
    description: 'As a third option, you can include a wrapper around your',
    model: '      <div class="code" data-label="HTML" data-type="html">\n' +
      '        <div class="ui vertical menu" id="hybrid">\n' +
      '          <div class="ui dropdown item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            Colors\n' +
      '            <select>\n' +
      '              <option>Red</option>\n' +
      '              <option>Black</option>\n' +
      '              <option>Blue</option>\n' +
      '              <option>Green</option>\n' +
      '            </select>\n' +
      '          </div>\n' +
      '          <div class="ui dropdown item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            Sizes\n' +
      '            <select>\n' +
      '              <option>Small</option>\n' +
      '              <option>Medium</option>\n' +
      '              <option>Large</option>\n' +
      '              <option>Huge</option>\n' +
      '            </select>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'#hybrid select\')\n' +
      '          .dropdown({\n' +
      '            on: \'hover\'\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="ui vertical menu" id="hybrid">\n' +
      '          <div class="ui dropdown item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            Colors\n' +
      '            <select>\n' +
      '              <option>Red</option>\n' +
      '              <option>Black</option>\n' +
      '              <option>Blue</option>\n' +
      '              <option>Green</option>\n' +
      '            </select>\n' +
      '          </div>\n' +
      '          <div class="ui dropdown item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            Sizes\n' +
      '            <select>\n' +
      '              <option>Small</option>\n' +
      '              <option>Medium</option>\n' +
      '              <option>Large</option>\n' +
      '              <option>Huge</option>\n' +
      '            </select>\n' +
      '          </div>\n' +
      '        </div>\n',
  },
};
</script>
