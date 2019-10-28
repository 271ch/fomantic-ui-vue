<template>
  <div>
      <div class="ui fluid selection dropdown">
        <input type="hidden" name="user"/>
        <i class="dropdown icon"/>
        <div class="default text">Select Friend</div>
        <div class="menu">
          <div class="item" data-value="jenny">
            <img class="ui mini avatar image" src="/images/avatar/small/jenny.jpg"/>
            Jenny Hess
          </div>
          <div class="item" data-value="elliot">
            <img class="ui mini avatar image" src="/images/avatar/small/elliot.jpg"/>
            Elliot Fu
          </div>
          <div class="item" data-value="stevie">
            <img class="ui mini avatar image" src="/images/avatar/small/stevie.jpg"/>
            Stevie Feliciano
          </div>
          <div class="item" data-value="christian">
            <img class="ui mini avatar image" src="/images/avatar/small/christian.jpg"/>
            Christian
          </div>
          <div class="item" data-value="matt">
            <img class="ui mini avatar image" src="/images/avatar/small/matt.jpg"/>
            Matt
          </div>
          <div class="item" data-value="justen">
            <img class="ui mini avatar image" src="/images/avatar/small/justen.jpg"/>
            Justen Kitsune
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSelection3',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Selection',
    description: 'A dropdown can be used to select between choices in a form',
    model: '      <div class="ui fluid selection dropdown">\n' +
      '        <input type="hidden" name="user"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Select Friend</div>\n' +
      '        <div class="menu">\n' +
      '          <div class="item" data-value="jenny">\n' +
      '            <img class="ui mini avatar image" src="/images/avatar/small/jenny.jpg"/>\n' +
      '            Jenny Hess\n' +
      '          </div>\n' +
      '          <div class="item" data-value="elliot">\n' +
      '            <img class="ui mini avatar image" src="/images/avatar/small/elliot.jpg"/>\n' +
      '            Elliot Fu\n' +
      '          </div>\n' +
      '          <div class="item" data-value="stevie">\n' +
      '            <img class="ui mini avatar image" src="/images/avatar/small/stevie.jpg"/>\n' +
      '            Stevie Feliciano\n' +
      '          </div>\n' +
      '          <div class="item" data-value="christian">\n' +
      '            <img class="ui mini avatar image" src="/images/avatar/small/christian.jpg"/>\n' +
      '            Christian\n' +
      '          </div>\n' +
      '          <div class="item" data-value="matt">\n' +
      '            <img class="ui mini avatar image" src="/images/avatar/small/matt.jpg"/>\n' +
      '            Matt\n' +
      '          </div>\n' +
      '          <div class="item" data-value="justen">\n' +
      '            <img class="ui mini avatar image" src="/images/avatar/small/justen.jpg"/>\n' +
      '            Justen Kitsune\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
