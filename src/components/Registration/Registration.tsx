import './Registration.css'
import { FooterRegForm } from '../FooterRegForm';
import { RegistrationForm } from '../RegistrationForm';


const Registration = () => {
    return (
        <div className='registration__page'>
        <button className='registration__page-backbtn'>
            Back to home
        </button>
        <div className='registration__page-title'>
            Sigh up
        </div>
        <FooterRegForm />
        <RegistrationForm />

        </div>
    )
}


export { Registration }