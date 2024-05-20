import './RegistrationConfirm.css'
import { FooterRegForm } from '../FooterRegForm';
import { Button } from '../Button'

const RegistrationConfirm = () => {
    return (
      <div className='registration__page'>
        <button className='registration__page-backbtn'>
           Back to home
        </button>
        <div className='registration__page-title'>
            Registration Confirmation
        </div>

        <div className='confirm__form-wrapper'>
        <div className='confirm__form-innertext'>
           Registration successful! Welcome aboard!<br/>
           Please check your email.
        </div>
        <Button className='button'
              onClick={() => {}}          
              children='Go to home'
            />
        </div>

        <FooterRegForm/>
      </div>
    )
}

export { RegistrationConfirm }