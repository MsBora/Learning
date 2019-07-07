function camelcase(string) {
 
    regex = /\s[a-z]/g;
    re=/\s|\W*/g

  string=string.toLowerCase()
  
  string = string.replace(regex, function(match) {
    return match.toUpperCase();
});
string=string.replace(re,'')
return string

}