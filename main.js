function display($where, text) {
  $where.textContent = text;
}

function parse(evt) {
  return `
    * Crucial props:

    altKey:     ${evt.altKey}
    ctrlKey:    ${evt.ctrlKey}
    key:        ${evt.key}
    metaKey:    ${evt.metaKey}
    repeat:     ${evt.repeat}
    shiftKey:   ${evt.shiftKey}
    type:       ${evt.type}
    which:      ${evt.which}

    * Deprecated props:

    char:       ${evt.char}
    charCode:   ${evt.charCode}
    keyCode:    ${evt.keyCode}
  `;
}

function main() {
  const $pre = document.querySelector("pre");
  const handler = (evt) => display($pre, parse(evt));
  document.addEventListener("keydown", handler);
  // document.addEventListener("keyup", handler);
}

main();
