const msg = `External demo script loaded from xss.15c.me\n\nCurrent time: ${Date()}\nCurrent URL: ${location.href}`;
console.error(msg);

// Escape key / Cancel button -> Do nothing
// Enter key  / OK button     -> Pause the debugger so that you can trace the injection point
if (confirm(msg)) {
  console.log("OK pressed, pausing debugger");
  debugger;
}
