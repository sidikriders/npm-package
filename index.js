exports.bahasaGe = function(input) {
  let huruf = input.split('');
  let last = [];
  let vokal = ["a", "i", "u", "e", "o"]
  for (let i = 0; i< huruf.length; i++) {
    if (vokal.includes(huruf[i])) {
      last.push(huruf[i]+"g"+huruf[i])
    } else {
      last.push(huruf[i])
    }
  }
  return last.join('')
}
