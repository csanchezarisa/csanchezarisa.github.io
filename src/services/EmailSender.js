import emailjs from '@emailjs/browser';

import { emailjsConfig } from '../config/licenses';

function sendForm(form) {

  return emailjs
    .sendForm(
      emailjsConfig.service_id, 
      emailjsConfig.template_id, 
      form.current, 
      emailjsConfig.public_key
    )
    .then(
      () => true, 
      (error) => {
        console.error(error.text);
        return false;
    });
}

export default sendForm;