<template>
  <FuiSegment>
    <FuiHeader level=3>
      {{example}}
      <FuiHeader sub>
        {{ getInfo().converted?'converted':'not converted' }}
      </FuiHeader>
    </FuiHeader>
    <FuiGrid>
      <FuiRow>
        <FuiColumn wide=eight>
          <div v-html="getHtmlModel()"></div>
        </FuiColumn>
        <FuiColumn wide=eight>
          <component :is="example"></component>
        </FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn wide=eight>
          <CodeHighlight lang=xml :sourcecode="getSourceHtmlModel()"></CodeHighlight>
        </FuiColumn>
        <FuiColumn wide=eight>
          <CodeHighlight lang=xml :sourcecode="getSourceHtmlTempl()"></CodeHighlight>
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
  </FuiSegment>
</template>

<script>
import Vue from "vue";
import exUtils from './examplesUtils';
import CodeHighlight from './CodeHighlight';
import srcTempl from './Examples/sourceCodeTemplates'

Vue.use(CodeHighlight);
/*
const escapeHtml = function (text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}
*/
export default {
  name: 'ExampleWithSource',
  components: {
    CodeHighlight,
  },
  props: {
    example: {
      type: String,
      required: true,
    }
  },
  methods: {
    getHtmlModel: function () {
      let comp = exUtils.getCompFromName(this.example)
      return comp.info.model;
    },
    getSourceHtmlModel: function () {
      let comp = exUtils.getCompFromName(this.example)
      return (comp.info.model.trim());
    },
    getSourceHtmlTempl: function () {
      return srcTempl[this.example];
    },
    getInfo: function () {
      return exUtils.getCompFromName(this.example).info;
    },
  },
};
</script>
