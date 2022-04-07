const replacement = (obj,prototype)=>{
    // // This function takes two arguements first one is an json object and second one is a html data
    
    // console.log(obj)
    // console.log(prototype)


    let output = prototype.replace(/{%IMAGE%}/g,obj.image)
    output = output.replace(/{%FROM%}/g,obj.from)
    output = output.replace(/{%PRODUCTNAME%}/g,obj.productName)
    output = output.replace(/{%NOT_ORGANIC%}/g,obj.organic===false?'not-organic':'')
    output = output.replace(/{%QUANTITY%}/g,obj.quantity)
    output = output.replace(/{%PRICE%}/g,obj.price)
    output = output.replace(/{%DESCRIPTION%}/g,obj.description);
    output = output.replace(/{%NUTRIENTS%}/g,obj.nutrients);
    output = output.replace(/{%ID%}/g,obj.id)
    


    return output;
}


module.exports = replacement