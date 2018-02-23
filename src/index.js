module.exports = function check(str, bracketsConfig) {
    var symbols = [];
    var cur = true;
    for(var i = 0, test; i < str.length; i++){
        test = false;
        for(var j = 0; j < bracketsConfig.length; j++){
            if(str[i] === bracketsConfig[j][0] && str[i] !== symbols[symbols.length - 1]){
                test = true;
                symbols.push(bracketsConfig[j][1]);
            }
        }
        if(!test){
            if(str[i] !== symbols[symbols.length - 1]){
                cur = false;
                break;
            } else {
                symbols.pop();
            }
        }
    }
    cur = symbols.length ? false : cur;
    return cur;
};
