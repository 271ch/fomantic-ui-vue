
const concatClasses = (...classList) =>
  classList.filter(c => c && c !== true).join(' ');

export default {
  concatClasses: concatClasses
};
