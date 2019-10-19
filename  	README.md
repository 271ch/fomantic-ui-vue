# `fomantic-ui-vue`

## Goal

The goal is to build a `vue.js` library of templates to use Fomantin UI.

## Progress

At the moment a very small part of the library has been realised. Of the elements only `button` and `divider` is somehow complete.

## What there is to see

### A *nearly* documentation

If you what to see what is already done and in which direction the library is going, clone the repo, then
```bash
cd docs
npm install
npm run serve
```

### Tests

You can run the tests by executing in the root directory
```bash
npm install
npm run test
# or
npm run test:watch
```

## Help

At the moment there is a major issue: in the testing of the examples (I generated test/examples from the repository [Fomantic-UI-Docs](https://github.com/fomantic/Fomantic-UI-Docs/); they are located in `docs/src/components/Examples`), in the file `test/TestHtmlExamples.spec.js`, I need to compare the HTML generated from the template of the present library with the correct Fomantic UI original. Now I'm comparing the HTMLs as XML, thus all tests containing correct HTML5 that is not a correct XML (such as with `<img ... />`) fail. To compare is not enough, also a coloured diff is needed.
