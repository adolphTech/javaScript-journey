function isPangram(sentence){
    let lowercase = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        //if(sentence.indexOf(char) === -1){
           // return false;
        if(!lowercase.includes(char)){
            return false
        }
    }
    return true;

}

isPangram("The quick brown wolf jumped over green/ the lazy fox")