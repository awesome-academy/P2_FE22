export const sortByAlphabet = (arr = [], key, asc = true) => {
    let sorted =  arr.sort((prev, next) => {
        let prevTitle = prev[key].toLowerCase();
        let nextTitle = next[key].toLowerCase();
        return (prevTitle < nextTitle) ? -1 : (prevTitle > nextTitle) ? 1 : 0;
    })
    return asc ? sorted : sorted.reverse()
}
export const sortArray = (arr = [], key = undefined, asc = true) => {
    if(key === 'title'){
        sortByAlphabet(arr, 'title', asc);
    }
    if(key === 'type'){
        sortByAlphabet(arr, 'type', asc);
    }
    if(key === 'color'){
        sortByAlphabet(arr, 'color', asc);
    }
    if(asc){
        return arr.sort((prev, next) => {
            return prev[key] - next[key];
        })
    }
    return arr.sort((prev, next) => {
        return next[key] - prev[key];
    })
}
export const sortOrder = (arr = [], key = undefined, asc = true) => {
    if(key === 'id'){
        sortByAlphabet(arr, 'id', asc);
    }
    if(key === 'day'){
        sortByAlphabet(arr, 'day', asc);
    }
    if(key === 'time'){
        sortByAlphabet(arr, 'time', asc);
    }
    if(asc){
        return arr.sort((prev, next) => {
            return prev[key] - next[key];
        })
    }
    return arr.sort((prev, next) => {
        return next[key] - prev[key];
    })
}
export const sortUser = (arr = [], key = undefined, asc = true) => {
    if(key === 'Name'){
        sortByAlphabet(arr, 'Name', asc);
    }
    if(key === 'Email'){
        sortByAlphabet(arr, 'Email', asc);
    }
    if(key === 'Phone'){
        sortByAlphabet(arr, 'Phone', asc);
    }
    if(key === 'Address'){
        sortByAlphabet(arr, 'Address', asc);
    }
    if(key === 'rule'){
        sortByAlphabet(arr, 'rule', asc);
    }
    if(asc){
        return arr.sort((prev, next) => {
            return prev[key] - next[key];
        })
    }
    return arr.sort((prev, next) => {
        return next[key] - prev[key];
    })
}
export const filterArray = (arr = [], object = undefined) => {
    if( object === undefined){
        return arr;
    }
    if( object.type === 'price'){
        return arr.filter((item) => {
            return object.item[0] <= item[object.type] && item[object.type] <= object.item[1];
        })
    }
    if( object.type === 'color'){
        return arr.filter((item) => {
            return(item[object.type].indexOf(object.item) !== -1)
        })
    }
    return arr.filter((item) => {
        return item[object.type] === object.item;
    })
}