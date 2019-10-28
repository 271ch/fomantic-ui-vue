<template>
  <div>
      <a class="ui button" data-url="/images/large-pdf.pdf">
        Rapidly Update
      </a>
      <div class="code" data-type="html" data-preview="true">
        <div class="ui indicating progress" data-value="1" data-total="200" id="example5">
          <div class="bar">
            <div class="progress"/>
          </div>
          <div class="label">Waiting for you to press button</div>
        </div>
      </div>
      <div class="evaluated code" data-type="javascript">
        $('.rapid.example .ui.button')
          .on('click', function() {
            var
              $progress       = $('.rapid.example .ui.progress'),
              $button         = $(this),
              updateEvent
            ;
            // restart to zero
            clearInterval(window.fakeProgress)
            $progress.progress('reset');
            // updates every 10ms until complete
            window.fakeProgress = setInterval(function() {
              $progress.progress('increment');
              $button.text( $progress.progress('get value') );
              // stop incrementing when complete
              if($progress.progress('is complete')) {
                clearInterval(window.fakeProgress)
              }
            }, 10);
          })
        ;
        $('.rapid.example .ui.progress')
          .progress({
            duration : 200,
            total    : 200,
            text     : {
              active: '{value} of {total} done'
            }
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleProgressFrequentlyUpdatedProgress1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'progress',
    title1: 'Examples',
    title2: 'Frequently Updated Progress',
    description: 'Progress bar will automatically poll for the last progress value after completing an animation, so that animation easing continues to work smoothly, even if update events occur much more frequently than UI updates.',
    model: '      <a class="ui button" data-url="/images/large-pdf.pdf">\n' +
      '        Rapidly Update\n' +
      '      </a>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '        <div class="ui indicating progress" data-value="1" data-total="200" id="example5">\n' +
      '          <div class="bar">\n' +
      '            <div class="progress"/>\n' +
      '          </div>\n' +
      '          <div class="label">Waiting for you to press button</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.rapid.example .ui.button\')\n' +
      '          .on(\'click\', function() {\n' +
      '            var\n' +
      '              $progress       = $(\'.rapid.example .ui.progress\'),\n' +
      '              $button         = $(this),\n' +
      '              updateEvent\n' +
      '            ;\n' +
      '            // restart to zero\n' +
      '            clearInterval(window.fakeProgress)\n' +
      '            $progress.progress(\'reset\');\n' +
      '            // updates every 10ms until complete\n' +
      '            window.fakeProgress = setInterval(function() {\n' +
      '              $progress.progress(\'increment\');\n' +
      '              $button.text( $progress.progress(\'get value\') );\n' +
      '              // stop incrementing when complete\n' +
      '              if($progress.progress(\'is complete\')) {\n' +
      '                clearInterval(window.fakeProgress)\n' +
      '              }\n' +
      '            }, 10);\n' +
      '          })\n' +
      '        ;\n' +
      '        $(\'.rapid.example .ui.progress\')\n' +
      '          .progress({\n' +
      '            duration : 200,\n' +
      '            total    : 200,\n' +
      '            text     : {\n' +
      '              active: \'{value} of {total} done\'\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
