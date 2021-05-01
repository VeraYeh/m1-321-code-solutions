/* exported titleCase */

function titleCase(title) {

  var titleArray = title.split(''); // string to array by character
  var hyphenIndex;
  var letterAfHyphen;
  var colonIndex;
  var letterAfColon;

  for (var i = 0; i < titleArray.length; i++) {
    if (titleArray.includes('-')) {
      hyphenIndex = titleArray.indexOf('-'); // hyphen index
      letterAfHyphen = titleArray[hyphenIndex + 1].toUpperCase(); // cap the letter after hyphen
      titleArray.splice(hyphenIndex + 1, 1, letterAfHyphen); // replace letter after hyphen with cap letter
    }
    if (titleArray.includes(':')) {
      colonIndex = titleArray.indexOf(':'); // colon index
      letterAfColon = titleArray[colonIndex + 2].toUpperCase(); // cap the 2nd letter after colon
      titleArray.splice(colonIndex + 2, 1, letterAfColon); // replace the 2nd letter after colon
    }
  }

  var newArray = titleArray.join('').split(' '); // newArray of each word
  var finalArray = [];
  var firstLet;
  var restLet;
  var finalString;

  for (var j = 0; j < newArray.length; j++) { // loop thru newArray
    if (newArray[j].length > 3 || newArray[j] === 'web') {
      firstLet = newArray[j].slice(0, 1).toUpperCase(); // cap first letter
      restLet = newArray[j].slice(1); // rest of the letters
      finalArray.push(firstLet + restLet); // push cacatenated word into newArray
    } else {
      finalArray.push(newArray[j]); // push the word under length of 3
    }
    finalString = finalArray.join(' '); // convert array to string
  }

  if (finalString.includes('Javascript')) { // if string includes Javascript
    finalString = finalString.replace('Javascript', 'JavaScript'); // replace with JavaScript
  }

  if (finalString.includes('api')) { // if string includes api
    finalString = finalString.replace('api', 'API'); // replace with API
  }

  return finalString;
}
