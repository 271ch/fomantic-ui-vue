<template>
  <div>
    <div class="ui ignored info message">
      Dropdown will automatically convert <code>select</code> elements initialized as dropdowns. For more details check out <a href="/modules/dropdown.html#usage">the dropdown docs</a>
    </div>
    <div class="code" data-type="javascript" data-label="true">
    $('.selection.dropdown')
      .dropdown()
    ;
    </div>
    <div class="ui form">
      <div class="field">
          <label>Gender</label>
          <div class="ui selection dropdown">
              <input type="hidden" name="gender"/>
              <i class="dropdown icon"/>
              <div class="default text">Gender</div>
              <div class="menu">
                  <div class="item" data-value="1">Male</div>
                  <div class="item" data-value="0">Female</div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormDropdown1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Content',
      title2: 'Dropdown',
      description: 'A form can contain a',
      model: '    <div class="ui ignored info message">\n' +
      '      Dropdown will automatically convert <code>select</code> elements initialized as dropdowns. For more details check out <a href="/modules/dropdown.html#usage">the dropdown docs</a>\n' +
      '    </div>\n' +
      '    <div class="code" data-type="javascript" data-label="true">\n' +
      '    $(\'.selection.dropdown\')\n' +
      '      .dropdown()\n' +
      '    ;\n' +
      '    </div>\n' +
      '    <div class="ui form">\n' +
      '      <div class="field">\n' +
      '          <label>Gender</label>\n' +
      '          <div class="ui selection dropdown">\n' +
      '              <input type="hidden" name="gender"/>\n' +
      '              <i class="dropdown icon"/>\n' +
      '              <div class="default text">Gender</div>\n' +
      '              <div class="menu">\n' +
      '                  <div class="item" data-value="1">Male</div>\n' +
      '                  <div class="item" data-value="0">Female</div>\n' +
      '              </div>\n' +
      '          </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
