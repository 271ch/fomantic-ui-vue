<template>
  <div>
      <div class="ui form">
        <div class="grouped fields">
          <label>Outbound Throughput</label>
          <div class="field">
            <div class="ui slider checkbox">
              <input type="radio" name="throughput" checked="checked"/>
              <label>20 mbps max</label>
            </div>
          </div>
          <div class="field">
            <div class="ui slider checkbox">
              <input type="radio" name="throughput"/>
              <label>10mbps max</label>
            </div>
          </div>
          <div class="field">
            <div class="ui slider checkbox">
              <input type="radio" name="throughput"/>
              <label>5mbps max</label>
            </div>
          </div>
          <div class="field">
            <div class="ui slider checkbox checked">
              <input type="radio" name="throughput"/>
              <label>Unmetered</label>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxSlider2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Types',
    title2: 'Slider',
    description: 'A checkbox can be formatted to emphasize the current selection state',
    model: '      <div class="ui form">\n' +
      '        <div class="grouped fields">\n' +
      '          <label>Outbound Throughput</label>\n' +
      '          <div class="field">\n' +
      '            <div class="ui slider checkbox">\n' +
      '              <input type="radio" name="throughput" checked="checked"/>\n' +
      '              <label>20 mbps max</label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="field">\n' +
      '            <div class="ui slider checkbox">\n' +
      '              <input type="radio" name="throughput"/>\n' +
      '              <label>10mbps max</label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="field">\n' +
      '            <div class="ui slider checkbox">\n' +
      '              <input type="radio" name="throughput"/>\n' +
      '              <label>5mbps max</label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="field">\n' +
      '            <div class="ui slider checkbox checked">\n' +
      '              <input type="radio" name="throughput"/>\n' +
      '              <label>Unmetered</label>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
