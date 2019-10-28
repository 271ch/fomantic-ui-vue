<template>
  <div>
      <div class="ui button">Show flowing popup</div>
      <div class="ui flowing popup">
        <div class="ui three column divided center aligned grid">
          <div class="column">
            <h4 class="ui header">Basic Plan</h4>
            <p><b>2</b> projects, $10 a month</p>
            <div class="ui button">Choose</div>
          </div>
          <div class="column">
            <h4 class="ui header">Business Plan</h4>
            <p><b>5</b> projects, $20 a month</p>
            <div class="ui button">Choose</div>
          </div>
          <div class="column">
            <h4 class="ui header">Premium Plan</h4>
            <p><b>8</b> projects, $25 a month</p>
            <div class="ui button">Choose</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupFlowing1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Variations',
    title2: 'Flowing',
    description: 'A popup can have no maximum width and continue to flow to fit its content',
    model: '      <div class="ui button">Show flowing popup</div>\n' +
      '      <div class="ui flowing popup">\n' +
      '        <div class="ui three column divided center aligned grid">\n' +
      '          <div class="column">\n' +
      '            <h4 class="ui header">Basic Plan</h4>\n' +
      '            <p><b>2</b> projects, $10 a month</p>\n' +
      '            <div class="ui button">Choose</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <h4 class="ui header">Business Plan</h4>\n' +
      '            <p><b>5</b> projects, $20 a month</p>\n' +
      '            <div class="ui button">Choose</div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <h4 class="ui header">Premium Plan</h4>\n' +
      '            <p><b>8</b> projects, $25 a month</p>\n' +
      '            <div class="ui button">Choose</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
