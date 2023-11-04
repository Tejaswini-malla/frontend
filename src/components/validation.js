const validation = (values) => {
    let errors={};
    if (!values.fullname){
        errors.fullname="Name should not be empty ."
    }
    if (!values.email){
        errors.email="Email should not be empty"
    }else if(/^[^\s@] + @[^\s@]+\.[^\s@] + $/.test(values.email)){
        errors.email="Email Didn't match"
    }
    if(!values.password){
        errors.password="Password should not be empty"
    }else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(values.password)){
        errors.password="Password did't match"
    }
    return errors;
}
export default validation;