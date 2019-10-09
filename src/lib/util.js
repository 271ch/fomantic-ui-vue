const concatClasses = (...classList) => {
  return classList.filter(c => c && c !== true).join(' ');
};

export default {
  concatClasses: concatClasses,
};
