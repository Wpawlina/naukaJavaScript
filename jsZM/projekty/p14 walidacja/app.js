const formValidator=new FormValidator();
document.querySelectorAll('input').forEach(e=>{
    e.addEventListener('input',()=>{
        e.classList.remove('success');
        e.classList.remove('error');
        e.nextElementSibling.classList.remove('success');
        e.nextElementSibling.classList.remove('error');
        e.nextElementSibling.innerHTML='';
    });

});