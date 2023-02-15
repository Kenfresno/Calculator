const add = function(x,y) {
        return x + y;
};

const substract = function(x,y) {
    return x-y;
};

const sum = function(x,y) {
    if (x.length == 0) return 0;
    if (x.length === 1) return x[0];
    else if (x.length > 1) return x.pop()+sum(x);
    return x + y;
};

const multiply = function(x,y) {
    return x * y;
};

const divide = function(x,y) {
    return x / y;
}