import React,{ useState } from 'react';

function Signup() {
    const [formData, setformData]= useState({
        names:"",
        email:"",
        password:"",
        password1:""
    })

    const [errors,setErrors]=useState({});
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setformData({...formData,[name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newErrors=validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            
            console.log('Form submitted successfully!');
        }
    }

    const validateForm=(data)=>{
        const errors={};
        if(data.names===""){
            errors.names="* Name is Required";
        }
        if(data.password!=data.password1){
            errors.password1="* Passwords do not match";
        }
        if(data.password.length<6 || data.password.length>10){
            errors.password="* Password must be between 6-10 characters";
        }
        if(data.email===""){
            errors.email="* Email is required";
        }
        return errors;
    };
    return (
        <>
                
                <form action='' method='post' id='sign-form' className='reg-form'onSubmit={handleSubmit}>
                    <h2 style={{ "textAlign": "center" }}>Create Account</h2>
                    <div className='input-control'>
                        <label for="name">Name: </label><br/>
                        <input type='text' name='names' value={formData.names} onChange={handleChange}/>
                        {errors.names && <div className='error'>{errors.names}</div>}
                    </div>

                    <div className='input-control'>
                        <label for="email">Email: </label><br/>
                        <input type='email' name='email' id='email' value={formData.email} onChange={handleChange}/>
                        {errors.email&&<div className='error'>{errors.email}</div>}
                    </div>
                    <div className='input-control'>
                        <label for="password">Password: </label><br/>
                        <input type='password' name='password' id='password' value={formData.password} onChange={handleChange}/>
                        {errors.password && <div className='error'>{errors.password}</div>}
                    </div>
                    <div className='input-control'>
                        <label for="password1">Confirm Password: </label><br/>
                        <input type='password' name='password1' id='password1' value={formData.password1} onChange={handleChange} />
                        {errors.password1&& <div className='error'>{errors.password1}</div>}
                    </div>
                    <button type='submit' className='sub-btn'>Submit</button>
                </form>
            </>
    );
}

export default Signup;
