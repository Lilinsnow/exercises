// . Crea una función que se llame getUniqueId y devuelva el número de milisegundos que hay desde 1970 utilizando la función getTime de Date
// Esta función NO debe ser un Arrow function

function getUniqueId () {
  return new Date() .getTime();
}


// . Crea una función que se llame isString con un parámetro y devuelva si dicho parámetro es una cadena de texto
// Esta función NO debe ser un Arrow function


function isString(text) {
  return typeof text === 'string';
}


// . Crea una función que se llame isEmpty con un parámetro y devuelva true si es una cadena de texto vacía.
// Esta función NO debe ser un Arrow function

function isEmpty(text){

  return text === ''; 

}


// . Crea una función que se llame isValidText con un parámetro que te devuelva true si dicho parámetro es un texto Y no está vacío llamando a las dos funciones anteriores

function isValidText(text){
  
  return !isEmpty(text) && isString(text);

}


// . Crea una función que se llame isNumber con un parámetro y devuelva si dicho parámetro es un número
// Esta función NO debe ser un Arrow function

function isNumber(id){

  return typeof id === 'number';
}
  

// . Crea una función que se llame isGreatherThan10 con un parámetro y devuelva true si es mayor que 10
// Esta función NO debe ser un Arrow function

function isGreaterthan10(id) {

  return  id > 10;
}

// . Crea una función que se llame isValidId con un parámetro que te devuelva true si dicho parámetro es un Número Y es mayor de 10 llamando a las dos funciones anteriores
// Esta función NO debe ser un Arrow function

function isValidId(id){

  return isNumber(id) && isGreaterthan10(id);

}

// . Crea una función createTask con dós parámetros, un texto y un id único, y te devuelva un objeto con ambos parámetros.
// Esta función NO debe ser un Arrow function

function createTask(text, id){

  return (text, id);

}

// . Cambia la función anterior creando una nueva llamada createTaskWithTextValidation, que devuelva un string diciendo "Argumentos incorrectos" si el parámetro que guarda el texto no es una cadena de texto o está vacío
// Esta función NO debe ser un Arrow function

function createTaskwithTextValidation(text, id){

  if (!isValidText(text)){

    return 'Argumentos Incorrectos';

  }

  return createTask(text, id);
  
}



// . Cambia la función anterior creando una nueva llamada createTaskWithValidation, para que además devuelva el string "Argumentos incorrectos" si el parámetro que guarda el ID no es un número y es menor o igual a 11
// Esta función NO debe ser un Arrow function

function createTaskwithValidation(text, id){

  if (!isValidId(id)){

    return 'Argumentos Incorrectos';

  }
    
    return createTaskwithTextValidation(text, id)
  }
  




// Crea todas las funciones anteriores como ARROW functions, y llámalas exactamente igual que las originales pero con el sufijo Arrow, por ejemplo getUniqueId sería getUniqueIdArrow





// Recorre el array que está en la variable randomArray y te escriba en consola true si es el texto es válido utilizando isValidText
  const randomArray = [1, 2, '3', '4', '', 6, 7, '8'];

  
// Recorre el array que está en la variable randomArray y te escriba en consola true si es el texto es válido utilizando isValidTextArrow





// Crea una función que se llame generateRandomTasks con un parámetro, que te cree un array con el número de tasks. 