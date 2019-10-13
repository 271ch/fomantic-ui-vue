<template>
  <div>
    <button class="mini ui button">
      Mini
    </button>
    <button class="tiny ui button">
      Tiny
    </button>
    <button class="small ui button">
      Small
    </button>
    <button class="medium ui button">
      Medium
    </button>
    <button class="large ui button">
      Large
    </button>
    <button class="big ui button">
      Big
    </button>
    <button class="huge ui button">
      Huge
    </button>
    <button class="massive ui button">
      Massive
    </button>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonSize1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Variations',
      title2: 'Size',
      description: 'A button can have different sizes',
      model: '    <button class="mini ui button">\n' +
      '      Mini\n' +
      '    </button>\n' +
      '    <button class="tiny ui button">\n' +
      '      Tiny\n' +
      '    </button>\n' +
      '    <button class="small ui button">\n' +
      '      Small\n' +
      '    </button>\n' +
      '    <button class="medium ui button">\n' +
      '      Medium\n' +
      '    </button>\n' +
      '    <button class="large ui button">\n' +
      '      Large\n' +
      '    </button>\n' +
      '    <button class="big ui button">\n' +
      '      Big\n' +
      '    </button>\n' +
      '    <button class="huge ui button">\n' +
      '      Huge\n' +
      '    </button>\n' +
      '    <button class="massive ui button">\n' +
      '      Massive\n' +
      '    </button>\n',
    };
  },
};
</script>
