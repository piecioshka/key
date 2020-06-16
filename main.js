function display($where, text) {
  $where.textContent = text;
}

function parse(evt) {
  console.log(evt);
  return `
    * Modifiers props:

    altKey:     ${evt.altKey}
    ctrlKey:    ${evt.ctrlKey}
    metaKey:    ${evt.metaKey}
    shiftKey:   ${evt.shiftKey}

    * Crucial props:

    code:       ${evt.code}
    key:        ${evt.key}
    repeat:     ${evt.repeat}
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
