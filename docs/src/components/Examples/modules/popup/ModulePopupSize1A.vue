<template>
  <div>
      <i class="circular heart icon link" data-content="Hello. This is a mini popup" data-variation="mini"/>
      <i class="circular heart icon link" data-content="Hello. This is a tiny popup" data-variation="tiny"/>
      <i class="circular heart icon link" data-content="Hello. This is a small popup" data-variation="small"/>
      <i class="circular heart icon link" data-content="Hello. This is a large popup" data-variation="large"/>
      <i class="circular heart icon link" data-content="Hello. This is a huge popup" data-variation="huge"/>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupSize1A',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Variations',
    title2: 'Size',
    description: 'A popup can vary in size',
    model: '      <i class="circular heart icon link" data-content="Hello. This is a mini popup" data-variation="mini"/>\n' +
      '      <i class="circular heart icon link" data-content="Hello. This is a tiny popup" data-variation="tiny"/>\n' +
      '      <i class="circular heart icon link" data-content="Hello. This is a small popup" data-variation="small"/>\n' +
      '      <i class="circular heart icon link" data-content="Hello. This is a large popup" data-variation="large"/>\n' +
      '      <i class="circular heart icon link" data-content="Hello. This is a huge popup" data-variation="huge"/>\n',
  },
};
</script>
