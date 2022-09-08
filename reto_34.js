const ErrorNoArray = 'No es un arreglo';
const ErrorEmptyArray = 'No debe estar vacío el arreglo';
const ErrorNoNumericArray = 'No es un arreglo numerico';

const lostNumbers = (numbers) => { 
    if(!Array.isArray(numbers)){
        throw new Error(ErrorNoArray);
    }
    if(numbers.length === 0) {
        throw new Error(ErrorEmptyArray);
    }
    //console.log(numbers.some(isNaN));
    if(numbers.some(isNaN)) {
        //console.log('entro');
        throw new Error(ErrorNoNumericArray);
    }
    
    /*try {
        throw new Error('oops')
    } catch (e) {
        throw 'opps';
    }*/
};

//lostNumbers();