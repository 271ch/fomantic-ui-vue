<template>
  <div>
      <div class="ui code" data-type="javascript" data-demo="true">
        $('.trigger.example .accordion')
          .accordion({
            selector: {
              trigger: '.title .icon'
            }
          })
        ;
      </div>
      <div class="ui accordion">
        <div class="active title">
          <i class="dropdown icon"/>
          What is a dog?
        </div>
        <div class="active content">
          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </div>
        <div class="title">
          <i class="dropdown icon"/>
          What kinds of dogs are there?
        </div>
        <div class="content">
          <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
        </div>
        <div class="title">
          <i class="dropdown icon"/>
          How do you acquire a dog?
        </div>
        <div class="content">
          <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
          <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleAccordionChangingTrigger1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'accordion',
    title1: 'Examples',
    title2: 'Changing Trigger',
    description: 'An accordion normally triggers when its title is clicked. However you can change the trigger selector to specify an element inside a title to use as an activator',
    model: '      <div class="ui code" data-type="javascript" data-demo="true">\n' +
      '        $(\'.trigger.example .accordion\')\n' +
      '          .accordion({\n' +
      '            selector: {\n' +
      '              trigger: \'.title .icon\'\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="ui accordion">\n' +
      '        <div class="active title">\n' +
      '          <i class="dropdown icon"/>\n' +
      '          What is a dog?\n' +
      '        </div>\n' +
      '        <div class="active content">\n' +
      '          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n' +
      '        </div>\n' +
      '        <div class="title">\n' +
      '          <i class="dropdown icon"/>\n' +
      '          What kinds of dogs are there?\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\n' +
      '        </div>\n' +
      '        <div class="title">\n' +
      '          <i class="dropdown icon"/>\n' +
      '          How do you acquire a dog?\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>\n' +
      '          <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
