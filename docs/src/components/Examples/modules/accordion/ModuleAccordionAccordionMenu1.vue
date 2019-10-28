<template>
  <div>
      <div class="ui vertical accordion menu">
        <div class="item">
          <a class="active title">
            <i class="dropdown icon"/>
            Size
          </a>
          <div class="active content">
            <div class="ui form">
              <div class="grouped fields">
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="size" value="small"/>
                    <label>Small</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="size" value="medium"/>
                    <label>Medium</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="size" value="large"/>
                    <label>Large</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="size" value="x-large"/>
                    <label>X-Large</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <a class="title">
            <i class="dropdown icon"/>
            Colors
          </a>
          <div class="content">
            <div class="ui form">
              <div class="grouped fields">
                <div class="field">
                  <div class="ui checkbox">
                    <input type="checkbox" name="small"/>
                    <label>Red</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui checkbox">
                    <input type="checkbox" name="medium"/>
                    <label>Orange</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui checkbox">
                    <input type="checkbox" name="large"/>
                    <label>Green</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui checkbox">
                    <input type="checkbox" name="x-large"/>
                    <label>Blue</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleAccordionAccordionMenu1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'accordion',
    title1: 'Examples',
    title2: 'Accordion Menu',
    description: 'An accordion can be used to create content drawers inside a menu',
    model: '      <div class="ui vertical accordion menu">\n' +
      '        <div class="item">\n' +
      '          <a class="active title">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            Size\n' +
      '          </a>\n' +
      '          <div class="active content">\n' +
      '            <div class="ui form">\n' +
      '              <div class="grouped fields">\n' +
      '                <div class="field">\n' +
      '                  <div class="ui radio checkbox">\n' +
      '                    <input type="radio" name="size" value="small"/>\n' +
      '                    <label>Small</label>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '                <div class="field">\n' +
      '                  <div class="ui radio checkbox">\n' +
      '                    <input type="radio" name="size" value="medium"/>\n' +
      '                    <label>Medium</label>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '                <div class="field">\n' +
      '                  <div class="ui radio checkbox">\n' +
      '                    <input type="radio" name="size" value="large"/>\n' +
      '                    <label>Large</label>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '                <div class="field">\n' +
      '                  <div class="ui radio checkbox">\n' +
      '                    <input type="radio" name="size" value="x-large"/>\n' +
      '                    <label>X-Large</label>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="item">\n' +
      '          <a class="title">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            Colors\n' +
      '          </a>\n' +
      '          <div class="content">\n' +
      '            <div class="ui form">\n' +
      '              <div class="grouped fields">\n' +
      '                <div class="field">\n' +
      '                  <div class="ui checkbox">\n' +
      '                    <input type="checkbox" name="small"/>\n' +
      '                    <label>Red</label>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '                <div class="field">\n' +
      '                  <div class="ui checkbox">\n' +
      '                    <input type="checkbox" name="medium"/>\n' +
      '                    <label>Orange</label>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '                <div class="field">\n' +
      '                  <div class="ui checkbox">\n' +
      '                    <input type="checkbox" name="large"/>\n' +
      '                    <label>Green</label>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '                <div class="field">\n' +
      '                  <div class="ui checkbox">\n' +
      '                    <input type="checkbox" name="x-large"/>\n' +
      '                    <label>Blue</label>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
