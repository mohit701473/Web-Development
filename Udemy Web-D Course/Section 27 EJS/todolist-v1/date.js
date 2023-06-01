

module.exports.getDate = function (){  // for shorter to code we can wrtie exports.getDate at the palce of the module.exportes.getDate

    const today = new Date() 
    
    const options = {
        weekday: "long" ,
        day: "numeric" ,
        month: "long"
    }

    return today.toLocaleDateString("en-US", options) 
}



module.exports.getDay = function (){

    let today = new Date() 
    
    let options = {
        weekday: "long" ,
    }

    return today.toLocaleDateString("en-US", options) 
}

// console.log(module.exports)