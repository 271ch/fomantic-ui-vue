<template>
  <div>
      <div class="ui ignored info message">If a metadata icon or rating is specified it will automatically override the default value specified in Javascript.</div>
      <div class="code" data-type="javascript">
      $('.toggle.example .rating')
        .rating({
          initialRating: 2,
          maxRating: 4
        })
      ;
      </div>
      <div class="ui very relaxed celled list">
        <div class="item">
          <img class="ui wireframe image" src="/images/wireframe/square-image.png"/>
          <div class="content">
            <div class="header">
              New York Dog Fair
              <div class="ui red rating" data-icon="heart" data-rating="2"/>
            </div>
            A fun day at the fair
          </div>
        </div>
        <div class="item">
          <img class="ui wireframe image" src="/images/wireframe/square-image.png"/>
          <div class="content">
            <div class="header">
              Dog Appreciation Day
              <div class="ui red rating" data-icon="heart" data-rating="2"/>
            </div>
            I'd like to tell your dog he's great
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleRatingSettingexistingvalues1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'rating',
    title1: 'Examples',
    title2: 'Setting existing values',
    description: '???',
    model: '      <div class="ui ignored info message">If a metadata icon or rating is specified it will automatically override the default value specified in Javascript.</div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'.toggle.example .rating\')\n' +
      '        .rating({\n' +
      '          initialRating: 2,\n' +
      '          maxRating: 4\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui very relaxed celled list">\n' +
      '        <div class="item">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/square-image.png"/>\n' +
      '          <div class="content">\n' +
      '            <div class="header">\n' +
      '              New York Dog Fair\n' +
      '              <div class="ui red rating" data-icon="heart" data-rating="2"/>\n' +
      '            </div>\n' +
      '            A fun day at the fair\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="item">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/square-image.png"/>\n' +
      '          <div class="content">\n' +
      '            <div class="header">\n' +
      '              Dog Appreciation Day\n' +
      '              <div class="ui red rating" data-icon="heart" data-rating="2"/>\n' +
      '            </div>\n' +
      '            I\'d like to tell your dog he\'s great\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
