function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
    return magicians;
}
//magician's names
var magicians = ['Nouman', 'Arslan', 'Naveed', 'Sameer'];
magicians = make_great(magicians);
show_magicians(magicians);
