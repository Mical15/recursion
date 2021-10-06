// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // SINGLE ENTRY
  if (typeof obj === 'string') {
    return `"${obj}"`;
  } else if (typeof obj === 'number') {
    return `${obj}`;
  } else if (typeof obj === 'boolean') {
    return `${obj}`;
  } else if (typeof obj === 'undefined') {
    return null;
  } else if (obj === null) {
    return 'null';
  }


  // ARRAYS
  var arrayString = '';
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      arrayString += '[';
      for (var i = 0; i < obj.length; i++) {
        arrayString += stringifyJSON(obj[i]);
        if (i !== obj.length - 1) {
          arrayString += ',';
        }
        if (i === obj.length - 1) {
          arrayString += ']';
        }
      }
    }
    return arrayString;
  }

  // OBJECTS
  var objString = '';
  var lastKey = Object.keys(obj).pop();
  if (typeof obj === 'object') {
    objString += '{';
    for (var key in obj) {
      if (typeof obj[key] === 'undefined') {
        return '{}';
      } else {
        objString += `"${key}":${stringifyJSON(obj[key])}`;
      }
      if (key !== lastKey) {
        objString += ',';
      }
    }
    objString += '}';
    return objString;
  }

};
