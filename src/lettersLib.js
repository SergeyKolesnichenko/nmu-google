var secretLetters = {
  'o': 'о',
  'c': 'с',
  'a': 'а',
  'i': 'і',
  'x': 'х',
}

function inRange(value, start, end) {
  return value >= start && value <= end
}

function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substring(0,index) + chr + str.substring(index+1);
}

function changeScaryLetters(text) {
  let englishLowerStart = 'a'.charCodeAt(0)
  let englishUpperStart = 'A'.charCodeAt(0)
  let englishLowerEnd = 'z'.charCodeAt(0)
  let englishUpperEnd = 'Z'.charCodeAt(0)

  for(let i = 0; i < text.length; i++) {
    if((inRange(text.charCodeAt(i), englishLowerStart, englishLowerEnd) 
      || inRange(text.charCodeAt(i), englishUpperStart, englishUpperEnd))
       && secretLetters[text[i]]) {
        text = setCharAt(text, i, secretLetters[text[i]])
      }
  }

  return text
}

export default changeScaryLetters