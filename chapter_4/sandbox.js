//callbacks and foreach

const myFunc = (callbackFunc) => {
    //do something
    let vlue = 50;
    callbackFunc(value);
};

myFunc(function(value){
    //do something
    console.log(value);
});

//let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];