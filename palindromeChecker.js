function palindrome(str) {
  str = str
    .toLowerCase()
    .replace(/\W|_/g, '');
  console.log(str);

  for(let x = 0, y = str.length-1; x<str.length, y>=0; x++, y--){
    if (str[x] != str[y]){
      return false;
    }
  }
  return true;
}
