function display($where, text = "Press any key...") {
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
  const $eventType = document.querySelector("select");
  const $reset = document.querySelector("button");
  let prevEventType = $eventType.value;
  const reset = () => display($pre);
  const handler = (evt) => display($pre, parse(evt));

  $eventType.addEventListener("change", () => {
    document.removeEventListener(prevEventType, handler);
    document.addEventListener($eventType.value, handler);
    prevEventType = $eventType.value;
    reset();
  });

  $reset.addEventListener("click", reset);

  // Go go go!!!1
  document.addEventListener($eventType.value, handler);
  reset();
}

main();
