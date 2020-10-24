const quotes= require("./quote.js") 

 function getQuote(){
    let quoteLength = quotes.length;
    let randsomeIndex = Math.floor(Math.random()*quoteLength) ;
    console.log("quotes[randsomeIndex]",quotes[randsomeIndex])

    return quotes[randsomeIndex];
}

module.exports = {getQuote:getQuote};

