<template>
  <div>
    <div class="ui two column grid">
      <div class="column">
        <div class="ui fluid vertical steps">
          <div class="completed step">
            <i class="truck icon"/>
            <div class="content">
              <div class="title">Shipping</div>
              <div class="description">Choose your shipping options</div>
            </div>
          </div>
          <div class="active step">
            <i class="dollar icon"/>
            <div class="content">
              <div class="title">Billing</div>
              <div class="description">Enter billing information</div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <p>The steps take up the entire column width</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepFluid1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'step',
      title1: 'Variations',
      title2: 'Fluid',
      description: 'A fluid step takes up the width of its container',
      model: '    <div class="ui two column grid">\n' +
      '      <div class="column">\n' +
      '        <div class="ui fluid vertical steps">\n' +
      '          <div class="completed step">\n' +
      '            <i class="truck icon"/>\n' +
      '            <div class="content">\n' +
      '              <div class="title">Shipping</div>\n' +
      '              <div class="description">Choose your shipping options</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="active step">\n' +
      '            <i class="dollar icon"/>\n' +
      '            <div class="content">\n' +
      '              <div class="title">Billing</div>\n' +
      '              <div class="description">Enter billing information</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="column">\n' +
      '        <p>The steps take up the entire column width</p>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
