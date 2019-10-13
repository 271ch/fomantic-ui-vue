<template>
  <div>
    <div class="ui ordered steps">
      <div class="completed step">
        <div class="content">
          <div class="title">Billing</div>
          <div class="description">Enter billing information</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementStepCompleted2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'step',
      title1: 'States',
      title2: 'Completed',
      description: 'A step can show that a user has completed it',
      model: '    <div class="ui ordered steps">\n' +
      '      <div class="completed step">\n' +
      '        <div class="content">\n' +
      '          <div class="title">Billing</div>\n' +
      '          <div class="description">Enter billing information</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
