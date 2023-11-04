import React, { useState , useEffect } from "react";
import vaildation from "./validation";
const SignupForm = ({submitForm}) => {
    const [values, setValues] = useState({
        fullname: "",
        email:"",
        password:"",
    });

    const [errors , setErrors] = useState({});
    const [dataIsCorrect , setDataIsCorrect] = useState(false);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(vaildation(values));
        setDataIsCorrect(true);
    };

    useEffect (() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);

        }
    }, [errors]);
    return(
        <div className="SKTApp">
        <div className="SKTapp-wrapper">
            <div>
                <h2 className="SKTtitle" > Create Account</h2>

            </div>
            <form className="SKTform-wrapper">
                <div className="SKTname">
                    <label className="label">Full Name</label>
                    <input className="SKTinput" type="text" name="fullname" value={values.fullname} onChange={handleChange} />
                    {errors.fullname && <p className="SKTerror">{errors.fullname}</p>}
                </div>
                <div className="SKTemail">
                    <label className="label">Email</label>
                    <input className="SKTinput" type="email" name="email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p className="SKTerror">{errors.email}</p>}
                </div>
                <div className="SKTpassword">
                    <label className="label">Password</label>
                    <input className="SKTinput" type="password" name="password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p className="SKTerror">{errors.password}</p>}
                </div>
                 <div>
                    <button className="SKTButton" onClick={handleFormSubmit}>Signup</button>

                 </div>
            </form>

        </div>

        </div>
    );
};
export default SignupForm;