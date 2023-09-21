import { FaTelegramPlane } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const {ref: MsRef, inView: msIsVisible} = useInView()
    const {ref: formRef, inView: formIsVisible} = useInView()

  return (
    <section className="contact">
        <h2>Contact me</h2>
        <div className="contact-details">
            <div ref={MsRef} className={`devMs ${msIsVisible ? 'animateMs' : '' }`}>
                <h3>You need</h3>
                <span>a beautiful design for your website leave a request</span>
            </div>
            <form className={`form ${formIsVisible ? 'animateForm' : ''}`} onSubmit={(e)=> e.preventDefault()} ref={formRef} >
                <input 
                    type="email" 
                    placeholder="eg. example@gmail.com" 
                    required/>
                <input 
                    type="text" 
                    placeholder="eg. JoyLinton" 
                    required/>
                <textarea 
                    placeholder="leave your message" 
                    required>
                </textarea>
                <button>send <FaTelegramPlane/></button>
            </form>
        </div>
    </section>
  )
}

export default Contact;