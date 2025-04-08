import { ChangeEvent, FormEvent, useState } from 'react';
import AddIcon from '../assets/images/svg/add_24px.svg';

interface FormData {
  message: string;
}

const ChatRoomContainerFormInputMessage = () => {
  const [formData, setFormData] = useState<FormData>({
    message: ''
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <>
      <div className="w-full h-auto bg-[#FFFFFF] px-[25px] py-[10px] gap-[10px] flex items-center justify-start">
        <button
          type="button"
          className="w-full h-full min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] rounded-full flex items-center justify-center overflow-hidden cursor-pointer outline-none focus:outline-none focus-within:outline-none hover:bg-[#EEEEEE]"
        >
          <img
            src={AddIcon}
            alt='Add icon'
            loading='lazy'
            className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] object-contain object-center'
          />
        </button>
        <form className='w-full h-auto' onSubmit={handleSubmit}>
          <input
            id='message'
            name='message'
            type='text'
            placeholder='Tulis pesan...'
            className='w-full h-auto px-[20px] py-[10px] rounded-[6px] bg-[#F0F2F5] text-left text-[14px] leading-[20px] text-[#000000] font-medium outline-none focus:outline-none focus-within:outline-none'
            value={formData.message}
            onChange={handleChangeInput}
          />
        </form>
      </div>
    </>
  );
};

export default ChatRoomContainerFormInputMessage;
