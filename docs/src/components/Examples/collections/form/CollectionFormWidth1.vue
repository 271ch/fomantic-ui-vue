<template>
  <div>
    <div class="ui form">
      <div class="fields">
        <div class="six wide field">
          <label>First name</label>
          <input type="text" placeholder="First Name"/>
        </div>
        <div class="four wide field">
          <label>Middle</label>
          <input type="text" placeholder="Middle Name"/>
        </div>
        <div class="six wide field">
          <label>Last name</label>
          <input type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div class="fields">
        <div class="two wide field">
          <input type="text" placeholder="2 Wide"/>
        </div>
        <div class="twelve wide field">
          <input type="text" placeholder="12 Wide"/>
        </div>
        <div class="two wide field">
          <input type="text" placeholder="2 Wide"/>
        </div>
      </div>
      <div class="fields">
        <div class="eight wide field">
          <input type="text" placeholder="8 Wide"/>
        </div>
        <div class="six wide field">
          <input type="text" placeholder="6 Wide"/>
        </div>
        <div class="two wide field">
          <input type="text" placeholder="2 Wide"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormWidth1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Field Variations',
      title2: 'Width',
      description: 'A field can specify its width in',
      model: '    <div class="ui form">\n' +
      '      <div class="fields">\n' +
      '        <div class="six wide field">\n' +
      '          <label>First name</label>\n' +
      '          <input type="text" placeholder="First Name"/>\n' +
      '        </div>\n' +
      '        <div class="four wide field">\n' +
      '          <label>Middle</label>\n' +
      '          <input type="text" placeholder="Middle Name"/>\n' +
      '        </div>\n' +
      '        <div class="six wide field">\n' +
      '          <label>Last name</label>\n' +
      '          <input type="text" placeholder="Last Name"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="fields">\n' +
      '        <div class="two wide field">\n' +
      '          <input type="text" placeholder="2 Wide"/>\n' +
      '        </div>\n' +
      '        <div class="twelve wide field">\n' +
      '          <input type="text" placeholder="12 Wide"/>\n' +
      '        </div>\n' +
      '        <div class="two wide field">\n' +
      '          <input type="text" placeholder="2 Wide"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="fields">\n' +
      '        <div class="eight wide field">\n' +
      '          <input type="text" placeholder="8 Wide"/>\n' +
      '        </div>\n' +
      '        <div class="six wide field">\n' +
      '          <input type="text" placeholder="6 Wide"/>\n' +
      '        </div>\n' +
      '        <div class="two wide field">\n' +
      '          <input type="text" placeholder="2 Wide"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
