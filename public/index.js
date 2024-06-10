const name = prompt("Please enter your name:");
if (name) {
  window.location.href = `/?name=${encodeURIComponent(name)}`;
}