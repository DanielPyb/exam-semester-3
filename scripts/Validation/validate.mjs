export function validateUsername(string) {
  const pattern = /^[\w]+$/;
  const patternMatch = pattern.test(string.trim());
  return patternMatch;
}

export function validateEmail(string) {
  const pattern = /[\w\-\.]+@(stud\.)?noroff\.no/;

  const patternMatch = pattern.test(string.trim());
  return patternMatch;
}

export function validateURL(string) {
  const pattern =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  const patternMatch = pattern.test(string.trim());
  return patternMatch;
}

export function validatePassword(value1, value2) {
  if (value1.value === undefined || value2.value === undefined) {
    return false;
  } else if (value1.value.trim().length >= 8 && value1.value === value2.value) {
    return true;
  } else {
    return false;
  }
}

export function validateTitle(string) {
  if(string.value.length > 3){
    return true;}
    else{
      return false;
    }
  }


export function validateDeadline(date){
  const date_one = new Date(date)
  const todaysDate = new Date()
  if(date_one > todaysDate){
    return true;
  } else {
    return false;
  }
}
