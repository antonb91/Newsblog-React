import './RegistrationForm.css'
import { Input } from '../Input'
import { INPUT_TYPES } from '../../types'
import { Button } from '../Button'

const RegistrationForm = () => {
    return (
       <div className='reg__form-wrapper'>
          <div className='input__container'>
            <Input 
                className="input"
                type={INPUT_TYPES.TEXT}
                placeholder='Your name'
                label='Name'
            />

            <Input 
                className="input"
                type={INPUT_TYPES.TEXT}
                placeholder='Your email'
                label='Email'
            />

            <Input 
                className="input"
                type={INPUT_TYPES.PASSWORD}
                placeholder='Your password'
                label='Password'
            />

            <Input 
                className="input"
                type={INPUT_TYPES.PASSWORD}
                placeholder='Confirm password'
                label='Confirm password'
            />
            </div>

            <Button className='button'
              onClick={() => {}}          
              children='Sign up'
            />
           
            <footer className='reg__form-footer'>
                <div className='reg__form-footer-inner'>
                    <div className='reg__form-footer-text'>Already have an account?</div>
                    <button className='reg__form-footer-btn'>Sign in</button>
                </div>
            </footer>
        </div>
    )
}


export { RegistrationForm }



{/* <div className='input__container'>
<div className='input-title'>Name</div>
<input className='reg__form-input'
        type='text'
        placeholder='Your name'
    ></input>

<div className='input-title'>Email</div>
<input className='reg__form-input'
        type='text'
        placeholder='Your email'
    ></input>

    <div className='input-title'>Password</div>
    <input className='reg__form-input'
        type='password'
        placeholder='Your password'
    ></input>

    <div className='input-title'>Confirm password</div>
    <input className='reg__form-input'
        type='password'
        placeholder='Confirm password'
    ></input> */}