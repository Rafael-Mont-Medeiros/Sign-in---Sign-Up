
let login = document.querySelector('#sing-in');
let titleSingUp = document.querySelector('#title');

function loginAnimation(){
    
    login.classList.toggle('desable');

};

titleSingUp.addEventListener('click',()=>{
    login.classList.add('desable');
    
});