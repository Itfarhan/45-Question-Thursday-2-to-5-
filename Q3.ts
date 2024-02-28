// name cases
var MyName = "M.Farhan";
// lowercase
console.log("lowercase:", MyName.toLowerCase());
// UPPER CASE
console.log("uppercase:", MyName.toLocaleUpperCase());
// titlecase
console.log("titlecase:", MyName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));