const trimm = function() {
    f=" function up "
    r=f.trim();
    console.log(r)
}


const changetoLowerCase = function(){
    let text = "Hello World!";
    let result = text.toLowerCase();
    console.log(result)
    
}

const changetoUpperCase = function(){
    let text = "Hello World!";
    let result = text.toUpperCase();
    console.log(result)
    
}

module.exports = {trimm,changetoLowerCase,changetoUpperCase}