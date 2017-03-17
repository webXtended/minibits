var utils = {
    isArray: function isArray(param){
        return this.matchTypes(param, "Array");
    },
    isObject: function isObject(param){
        return this.matchTypes(param, "Object");
    },
    isFunction: function isFunction(param){
        return this.matchTypes(param, "Function");
    },
    matchTypes: function matchTypes(param, type){
        return (Object.prototype.toString.call(param) === '[object '+ type +']');
    }
};

function d2b(d){
    return d.toString(2);
}

function b2d(b){
    return parseInt(b,2);
}

function getBinaryArray(n){
    return n.split('').map(function(item, index){
       return parseInt(item);
    });
}

function lShift(num, rotate){
    var n = num, returnArray;
    returnArray = utils.isArray(num);
    if(!returnArray){
      n = getBinaryArray(num);
    }

    if(rotate){
        n.push(arr.shift())
    }else{
        n.push(0);
        n.shift();
    }
    return returnArray?n:n.join("");
}

function rShift(num, rotate){
    var n = num, returnArray;
    returnArray = utils.isArray(num);
    if(!returnArray){
      n = getBinaryArray(num);
    }

    if(rotate){
        n.unshift(n.pop())
    }else{
        n.unshift(0);
        n.pop();
    }
    return returnArray?n:n.join("");
}
