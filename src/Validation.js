var signForm=document.getElementById("sign-form");
var names=document.getElementById("name");
var email=document.getElementById('email');
var pass=document.getElementById("password");
var pass1=document.getElementById("password1");

signForm.addEventListener('submit', e =>{
    if(validate()){
        signForm.submit();
    }else{
        e.preventDefault();
    }
})

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector(".error");
    errorDisplay.innerText= message;
}

const setSuccess= element =>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText="";
}

const validate=()=>{
    const nameVal=names.value.trim();
    const emailVal=email.value.trim();
    const passVal=pass.value.trim();
    const pass1Val=pass1.value.trim();
    var flag=true;
    if(nameVal===""){
        setError(names,"* Name is required");
        flag=false;
    }else{
        setSuccess(names);
        flag=true;
    }
    if(passVal!=pass1Val){
        setError(pass1, "* Passwords Do NOT match");
        flag=false;
    }else{
        setSuccess(pass1);
        flag=true;
    }
    if(emailVal===""){
        setError(email,"* Email is required");
        flag=false;
    }else{
        setSuccess(email);
        flag=true;
    }
    return flag;
}