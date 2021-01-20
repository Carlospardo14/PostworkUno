function deepEqual(a, b) {
    if ( a === b) {
        return true;
    }

    if(typeof a =='object' && typeof b == 'object' && a !=null && b != null){
        if(Object.keys(a).length == Object.keys(b).length){
            for(let key of Object.keys(a)){
                if(b.hasOwnProperty(key)!= true){
                    return false;
                }
            }
            for(let key of Object.keys(a)){
                if(typeof a[key] == 'object' && typeof b[key] =='object' && typeof a[key]!=null && typeof b[key]!=null){
                    return deepEqual(a[key], b[key])
                }else{
                    if(a[key] != b[key])
                    return false;
                }
            }
        }else {
            return false;}
            

    }else{
        return false;
    }
    return true;
    
}

  var john = {
    firstName: 'John',
    lastName: 'Doe'
  }

  console.log('Test 1:', deepEqual(1, 1)) // true
  console.log('Test 2:', deepEqual(1, '1')) // false
  console.log('Test 3:', deepEqual(john, john)) // true
  console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
  console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // true


function chunk(array, size){
    var chunkedArray = [];
    var arrLength = array.length;
    for(var i= 0; i<arrLength; i+=size){
        chunkedArray.push(array.slice(i,i+size));
    }
    return chunkedArray;
}

var data = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

function frequency(string) {
    var splitted_str = string.split("");
    var freq = {};
    var arrLength = splitted_str.length; 
    for (let i = 0 ; i < arrLength ; i++){
        if (!Object.keys(freq).includes(splitted_str[i])){
                freq[splitted_str[i]] = 0;

        }
    }
    var key_names = Object.keys(freq);
    var keysLength = key_names.length;
    for (let i = 0; i < keysLength; i++){
        for (let k in splitted_str){
            if (key_names[i] === splitted_str[k]){
                freq[key_names[i]] += 1;
            }
        }
    }
    return freq;
}

console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
