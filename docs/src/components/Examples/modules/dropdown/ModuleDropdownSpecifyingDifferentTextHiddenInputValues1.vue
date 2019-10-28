<template>
  <div>
      <div class="ui ignored info message">If you don't specify a value (either in the `select` or via a `data-value` property, then the input value will be set to the lowercased text in the element.</div>
      <div class="code" data-label="HTML" data-type="html">
        <div class="ui selection dropdown">
          <input type="hidden" name="gender"/>
          <i class="dropdown icon"/>
          <div class="default text">Gender</div>
          <div class="menu">
            <div class="item" data-value="male" data-text="Male">
              <i class="male icon"/>
              Male
            </div>
            <div class="item" data-value="female" data-text="Female">
              <i class="female icon"/>
              Female
            </div>
          </div>
        </div>
      </div>
      <div class="ui selection dropdown">
        <input type="hidden" name="gender"/>
        <i class="dropdown icon"/>
        <div class="default text">Gender</div>
        <div class="menu">
          <div class="item" data-value="male" data-text="Male">
            <i class="male icon"/>
            Male
          </div>
          <div class="item" data-value="female" data-text="Female">
            <i class="female icon"/>
            Female
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSpecifyingDifferentTextHiddenInputValues1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: 'Specifying Different Text & Hidden Input Values',
    description: 'You can specify different values for selected text, and selected form values by adding',
    model: '      <div class="ui ignored info message">If you don\'t specify a value (either in the `select` or via a `data-value` property, then the input value will be set to the lowercased text in the element.</div>\n' +
      '      <div class="code" data-label="HTML" data-type="html">\n' +
      '        <div class="ui selection dropdown">\n' +
      '          <input type="hidden" name="gender"/>\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="default text">Gender</div>\n' +
      '          <div class="menu">\n' +
      '            <div class="item" data-value="male" data-text="Male">\n' +
      '              <i class="male icon"/>\n' +
      '              Male\n' +
      '            </div>\n' +
      '            <div class="item" data-value="female" data-text="Female">\n' +
      '              <i class="female icon"/>\n' +
      '              Female\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui selection dropdown">\n' +
      '        <input type="hidden" name="gender"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Gender</div>\n' +
      '        <div class="menu">\n' +
      '          <div class="item" data-value="male" data-text="Male">\n' +
      '            <i class="male icon"/>\n' +
      '            Male\n' +
      '          </div>\n' +
      '          <div class="item" data-value="female" data-text="Female">\n' +
      '            <i class="female icon"/>\n' +
      '            Female\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
