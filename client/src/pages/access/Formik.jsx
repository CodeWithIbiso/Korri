import React from 'react'
import { useFormik} from 'formik'
import * as Yup from 'yup'

const Formik=()=> {
    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15,"Must be 15 characters or less").required("Required"),
            lastName: Yup.string().max(20,"Must be 20 characters or less").required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().max(50,"Must be 50 characters or less").required("Required"),
            confirmPassword :Yup.string().max(59,"Must be 50 characters or less").required("Required"),
        }),
        onSubmit:(values)=>{
            // console.log(values)
        }
    })
    // console.log(formik.touched)
    // console.log(formik.errors) 
    // console.log(formik.values)
  return (
        <form onSubmit={formik.handleSubmit} style={{maxWidth:'100%'}}>
            <input type="file"/>
            <div>
                <input 
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder='First Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName?<p style={{color:'red'}}>{formik.errors.firstName}</p>:null}
            </div>
            <div>
                <input 
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder='Last Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName?<p style={{color:'red'}}>{formik.errors.lastName}</p>:null}
            </div>
            <div>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder='Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password?<p style={{color:'red'}}>{formik.errors.password}</p>:null}
            </div>
            <div>
                <input 
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder='Confirm Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword?<p style={{color:'red'}}>{formik.errors.confirmPassword}</p>:null}
            </div>
            <div>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email?<p style={{color:'red'}}>{formik.errors.email}</p>:null}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}
export default Formik