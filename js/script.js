// let userContainer = document.getElementById('my-wrapper');
// for( let i = 1; i <100; i++){
//     let newDiv = document.createElement('div');
//     newDiv.classList.add('my-box');
//     if((i % 3 == 0) && ( i % 5 == 0)){
//         newDiv.classList.add('text-info' , 'text-uppercase');
//         newDiv.innerHTML='FizzBuzz';
//     }else if (i % 5 == 0){
//         newDiv.classList.add('text-warning');
//         newDiv.innerHTML='Buzz';
//     }else if (i % 3 == 0){
//         newDiv.classList.add('text-danger');
//         newDiv.innerHTML ='Fizz';
//     }else {
//         newDiv.innerHTML = ` ${i}`;
//     }
//     userContainer.append(newDiv);
// };

let userContainer = document.getElementById('my-wrapper');
for( let i = 1; i <101; i++){
    //CREO LA VARIABILE CREATRICE DEL CONTENITORE DIV CHE ANDRO' A RIEMPIRE
    let newDiv = document.createElement('div');
    //DO LE CLASSI ALL CONTENITORE CREATO IN PRECEDENZA
    newDiv.classList.add('my-box');
    //CREO UN BUTTON CHE ANDRA ALLINTERNO DEL DIV CREATO 
    let fizzBuzzButton = document.createElement('button');
    //INIZIO IL CICLO
    if((i % 3 == 0) && ( i % 5 == 0)){
        fizzBuzzButton.classList.add('btn' , 'btn-info' , 'text-uppercase' , 'text-white');
        fizzBuzzButton.innerHTML='FizzBuzz';
    }else if (i % 5 == 0){
        fizzBuzzButton.classList.add('btn' , 'btn-warning' , 'text-white')
        fizzBuzzButton.innerHTML='Buzz';
    }else if (i % 3 == 0){
        fizzBuzzButton.classList.add('btn' , 'btn-danger')
        fizzBuzzButton.innerHTML ='Fizz';
    }else {
        fizzBuzzButton.classList.add('btn' , 'btn-dark');
        fizzBuzzButton.innerHTML = ` ${i}`;
    }
    newDiv.append(fizzBuzzButton);
    userContainer.append(newDiv);
    fizzBuzzButton.addEventListener('click' , function(){
        alert(`Hai scelto un numero sfortunato`);
    });
};

