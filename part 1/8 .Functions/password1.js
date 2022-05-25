function isValidPassword (username,password) {
    /////////////////////////my trial ////////////////////////////////
//     if (password.length ===8 && password.indexOf(' ')===-1 && password !== username){
//         return true;
//     }
// }
//
// isValidPassword('adolph','adolph8893')
if (password.length < 8){
    return false;
}
if (password.indexOf(' ') !==-1){
return false
}
if (password.indexOf(username) !== -1) {
    return false;
}
return true;
}

/////////////////////////////////////////////using OR //////////////////
function isValidPassword (username,password) {
if (password.length < 8 || password.indexOf(' ') !==-1 || password.indexOf(username) !== -1 )
{
 return false;
}
return true;
}
///////////////////////////////////////////////////////////////using AND //////////////
function isValidPassword (username,password) {
    if (password.length >= 8 && password.indexOf(' ') ===-1 && password.indexOf(username) === -1 )
    {
        return true;
    }
    return false
}
/////////////////////////////////////////////////using VARIABLES ////////////////////////////////////////////////////
function isValidPassword (username,password) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(username);
    const hasUser = password.indexOf(' ');

    if (tooShort || hasSpace || hasUser) return false;
    return true;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isValidPassword (username,password) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(username);
    const hasUser = password.indexOf(' ');

    if (tooShort && hasSpace &&  hasUser) return true;
    return false;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////