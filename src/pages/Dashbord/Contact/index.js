import React from 'react'
import { useFormik } from 'formik'
import validations from "./validation"
import './styles.css'
function Contact() {
  const { handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched } = useFormik({ // useFormik
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit: async (values, bag) => { // bag sayesinde ekstra işlemlerde yapabiliyoruz 
      await new Promise((r) => setTimeout(r, 1000))
      console.log(values);

      if (values.email === 'test@test.com') {
        // backendde varolan bir mail adresi varmıçasına çalışıyor
        return bag.setErrors({ email: "bu mail kullanılıyor." })
      }

      bag.resetForm()
    },
    validationSchema: validations,
  });
  return (
    <div>
      <h1>Sign Up</h1>
      {/* <Formik
        initialValues={{
          firstName: '', formikde kullanabilirsin ancak useformikin daha temiz bir kullanımı var
          lastName: '',
          email: '',
          message: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      > */}

      {/* {({ handleSubmit, handleChange }) => ()  formikten kalan*/}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            value={values.firstName}
            disabled={isSubmitting}
            onChange={handleChange("firstName")}
            onBlur={handleBlur("firstname")}
          />
          {touched.firstName && errors.firstName && (<div className='error'>{errors.firstName}</div>)}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            disabled={isSubmitting}
            value={values.lastName}
            onChange={handleChange("lastName")}
            onBlur={handleBlur("lastname")}
          />
          {touched.lastName && errors.lastName && (<div className='error'>{errors.lastName}</div>)}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            disabled={isSubmitting}
            value={values.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
          />
          {touched.email && errors.email && (<div className='error'>{errors.email}</div>)}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input
            id="message"
            name="message"
            placeholder="Type Something..."
            value={values.message}
            disabled={isSubmitting}
            onChange={handleChange("message")}
            onBlur={handleBlur("message")}
          />
          {touched.message && errors.message && (<div className='error'>{errors.message}</div>)}
        </div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
        {/* submiting sayesinde butonu ilem anında kullanımı kısıtlıyor */}
      </form>
    </div >
  )
}

export default Contact

