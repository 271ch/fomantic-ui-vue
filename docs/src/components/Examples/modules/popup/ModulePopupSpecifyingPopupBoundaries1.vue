<template>
  <div>
      <div class="evaluated code" data-type="javascript">
        $('.boundary.example .button')
          .popup({
            boundary: '.boundary.example .segment'
          })
        ;
      </div>
      <div class="ui segment">
        <div class="ui button" data-content="This popup is very long but wont escape the segment it is placed in">Hover Me</div>
        <p>Normally this popup would open in the default position <code>top center</code> but because this would escape the boundaries of the segment it will search other available positions until it can find one to place the popup while staying inside the segment</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupSpecifyingPopupBoundaries1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Examples',
    title2: 'Specifying Popup Boundaries',
    description: '???',
    model: '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.boundary.example .button\')\n' +
      '          .popup({\n' +
      '            boundary: \'.boundary.example .segment\'\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="ui segment">\n' +
      '        <div class="ui button" data-content="This popup is very long but wont escape the segment it is placed in">Hover Me</div>\n' +
      '        <p>Normally this popup would open in the default position <code>top center</code> but because this would escape the boundaries of the segment it will search other available positions until it can find one to place the popup while staying inside the segment</p>\n' +
      '      </div>\n',
  },
};
</script>
