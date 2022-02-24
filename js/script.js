let userContainer = document.getElementById('my-wrapper');
for( let i = 1; i <100; i++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('my-box');
    if((i % 3 == 0) && ( i % 5 == 0)){
        newDiv.classList.add('text-info' , 'text-uppercase');
        newDiv.innerHTML='FizzBuzz';
    }else if (i % 5 == 0){
        newDiv.classList.add('text-warning');
        newDiv.innerHTML='Buzz';
    }else if (i % 3 == 0){
        newDiv.classList.add('text-danger');
        newDiv.innerHTML ='Fizz';
    }else {
        newDiv.innerHTML = ` ${i}`;
    }
    userContainer.append(newDiv);
};