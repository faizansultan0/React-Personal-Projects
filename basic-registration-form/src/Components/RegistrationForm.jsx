import './RegistrationForm.css';
import Container from 'react-bootstrap/Container'
import { useState } from 'react'

const RegistrationForm = () => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [submitted, setSubmitted] = useState(null);
    const [valid, setValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!formValues.firstName || !formValues.lastName || !formValues.email) {
            setValid(false);
        } else {
            setValid(true);
        }
    }

    return (
        <section className='form-section'>
            <Container>
                <div className="content">
                    <form className="form" onSubmit={ handleSubmit }>
                        { submitted && valid ? <span className='success'>Success!</span> : null }
                        <input type='text' name='firstName' placeholder='First Name' className='inputElement' value={formValues.firstName}
                            onChange={(e) => { setFormValues({ ...formValues, firstName: e.target.value }) }}
                        />
                        {submitted && !formValues.firstName ? <span className='text-danger warning-txt'>First Name is required</span> : null}
                        
                        <input type='text' name='lastName' placeholder='Last Name' className='inputElement' value={formValues.lastName}
                            onChange={(e) => { setFormValues({ ...formValues, lastName: e.target.value }) }}
                        />
                        {submitted && !formValues.lastName ? <span className='text-danger warning-txt'>Last Name is required</span> : null}
                        
                        <input type='email' name='email' placeholder='Email' className='inputElement' value={formValues.email}
                            onChange={(e) => { setFormValues({ ...formValues, email: e.target.value }) }}
                        />
                        { submitted && !formValues.email ? <span className='text-danger warning-txt'>Email is required</span> : null }
                        <button type='submit' className='button'>Submit</button>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default RegistrationForm;