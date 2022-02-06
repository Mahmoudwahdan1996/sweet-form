/*
function animationForm(){
    const arrows = document.querySelectorAll('.fa-arrow-down');
    
    
    arrows.forEach( arrow =>{
        arrow.addEventListener('click',() => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextform = parent.nextElementSibling;
            if(input.type === "text" && validateUser(input)){
                nextslide(parent,nextform);
            }else if(input.type === "email" && validateemail(input)){
                nextslide(parent,nextform);
            }else if (input.type === "password" && validateUser(input)){
                nextslide(parent,nextform);
            }
        });
    });

}

function validateUser(user){
    if (user.value.length < 6){
        console.log("not enough character");
        error('rgb(189,87,87)');
    }else{
        error('rgb(87,189,130)');
        return true;
    }
}

function validateemail(email){
    const validd = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validd.test(email.value)){
        error('rgb(87,189,130)');
        return true;
    }else{
        error('rgb(189,87,87)');
    }
}

function nextslide(parent ,nextform ){
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextform.classList.add("active");
}


function error(color){
    document.body.style.backgroundColor=color;
}
*/

function animated(){
    const arrows = document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow =>{
        arrow.addEventListener('click',()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextform = parent.nextElementSibling;
            if(input.type === "text" && userValidation(input)){
                nextslide(parent,nextform);
            }else if(input.type === "email"&& emailvalidation(input)){
                nextslide(parent,nextform);
            }else if(input.type === "password" && passvali(input)){
                nextslide(parent,nextform);
            }else{
                parent.style.animation='shack .5s ease';
            }
            parent.addEventListener('animationend',()=>{
                parent.style.animation="";
            })

        })
    })
}

function nextslide(parent,nextform){
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextform.classList.add("active")
}

function userValidation(user){
    if(user.value.length < 6){
        console.log("not enough character");
        error('rgb(189,87,87)');
    }else{
        error('rgb(87,189,130)');
        return true;
    }
}

function emailvalidation(email){
    const vali = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(vali.test(email.value)){    
        error('rgb(87,189,130)');
        return true;
    }else{
        error('rgb(189,87,87)');
    }
}

function passvali(pass){
    if(pass.value.length<6){
        error('rgb(189,87,87)')
    }else{
        error('rgb(87,189,130)');
        return true
    }
}
function error(color){
    document.body.style.backgroundColor=color;
}

animated();