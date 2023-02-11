import s from './index.module.css';
import { useState } from 'react';
import { ButtonSendMessage } from '../index';

const initialFormData = {
  name: '',
  email: '',
  phoneOrTelegram: '',
  message: '',
};
const messageErrorText =
  'The field is not filled in or the data is entered incorrectly';

const FormContact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [warningMessage, setWarningMessage] = useState(initialFormData);

  const handlerCheckLength = (value, name) => {
    console.log('Зайшло1', value);
    if (value > 0) {
      console.log('Зайшло2');
      setWarningMessage({ ...warningMessage, [name]: '' });
      return true;
    } else {
      console.log('Зайшло3');
      setWarningMessage({ ...warningMessage, [name]: messageErrorText });
      return false;
    }
  };
  const handlerOnSubmitForm = (e) => {
    e.preventDefault();
    // ВИПРАВИТИ, ТИМЧАСОВЕ РІШЕННЯ
    if(!formData.name && !formData.email && !formData.message) {
      return;
    }

    console.log(`FormData: ${JSON.stringify(formData)}`);

    setFormData(initialFormData);
    setWarningMessage(initialFormData);
  };

  return (
    <form className={s.form} onSubmit={(e) => handlerOnSubmitForm(e)}>
      <label className={s.label}>
        <div className={`${formData.name ? s.descHasText : ''} ${s.desc}`}>
          Name<span className='red'>*</span>
        </div>
        <input
          type='text'
          className={s.input}
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            handlerCheckLength(e.target.value.length, 'name');
          }}
        />
        <div className={s.warning}>{warningMessage.name}</div>
      </label>
      <label className={s.label}>
        <div className={`${formData.email ? s.descHasText : ''} ${s.desc}`}>
          Email<span className='red'>*</span>
        </div>
        <input
          type='email'
          className={s.input}
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            handlerCheckLength(e.target.value.length, 'email');
          }}
        />
        <div className={s.warning}>{warningMessage.email}</div>
      </label>
      <label className={s.label}>
        <div
          className={`${formData.phoneOrTelegram ? s.descHasText : ''} ${
            s.desc
          }`}
        >{`Phone or Telegram`}</div>
        <input
          type='text'
          className={s.input}
          value={formData.phoneOrTelegram}
          onChange={(e) =>
            setFormData({ ...formData, phoneOrTelegram: e.target.value })
          }
        />
      </label>
      <label className={s.label}>
        <div
          className={`${formData.message ? s.messageHasText : ''} ${
            s.descMessage
          }`}
        >
          Message<span className='red'>*</span>
        </div>
        <textarea
          className={s.message}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            handlerCheckLength(e.target.value.length, 'message');
          }}
        ></textarea>
        <div className={s.warning}>{warningMessage.message}</div>
      </label>
      <ButtonSendMessage />
    </form>
  );
};

export default FormContact;
