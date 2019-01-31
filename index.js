function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var uppercase = string.toUpperCase()
  string = uppercase;
  console.log(uppercase);
}

function logWhisper(string) {
  var lowercase = string.toLowerCase();
  string = lowercase;
  console.log(lowercase);
}