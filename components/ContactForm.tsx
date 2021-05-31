import { useState } from 'react';
import sendContactMail from 'lib/contact';

export default function ContactForm() {
  const [state, setState] = useState({
    formButtonDisabled: false,
    formButton: 'Send',
    name: '',
    email: '',
    text: '',
  });

  const { formButtonDisabled, formButton, name, email, text } = state;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, text };
    setState({
      ...state,
      [e.target.value]: e.target.name,
    });

    try {
      sendContactMail(formData);
      console.log(formData);
      setState({
        formButtonDisabled: true,
        // formButtonDisabled: false,
        formButton: 'Message sent',
        // formButton: 'Send',
        name: '',
        email: '',
        text: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='contact'>
      <div className='contact__container'>
        <form className='contact__form' onSubmit={handleSubmit}>
          <div className='contact__form--container'>
            <div className='contact__form--input-group'>
              <label className='contact__form--label' htmlFor='name'>
                Name (required)
              </label>
              <input
                className='contact__form--input'
                id='name'
                name='name'
                value={name || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className='contact__form--input-group'>
              <label className='contact__form--label' htmlFor='email'>
                Email (required)
              </label>
              <input
                className='contact__form--input'
                id='email'
                name='email'
                value={email || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className='contact__form--input-group'>
              <label className='contact__form--label' htmlFor='email'>
                Message (required)
              </label>
              <textarea
                className='contact__form--input resize-none'
                id='message'
                name='text'
                value={text || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className='contact__form--btn-block'>
              <button
                className={`contact__form--btn ${
                  formButtonDisabled
                    ? 'bg-green-200'
                    : 'text-white bg-black dark:text-black dark:bg-white '
                } `}
                type='submit'
                disabled={formButtonDisabled}
              >
                {formButton}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
