import PersonIcon from '../assets/images/svg/perm_identity_24px.svg';

interface ContactItemComponentProps {
  name: string;
  description: string;
}

const ContactItem = (props: ContactItemComponentProps) => {
  return (
    <>
      <button
        type="button"
        className="w-full h-auto flex items-center justify-start gap-[20px] outline-none focus:outline-none focus-within:outline-none pl-[25px] cursor-pointer hover:bg-[#EEEEEE]"
      >
        <div className="w-full h-full min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] rounded-full overflow-hidden bg-[#EEEEEE] flex items-center justify-center">
          <img 
            src={PersonIcon}
            alt='Person icon'
            loading='lazy'
            className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]'
          />
        </div>
        <div className='w-full h-auto pr-[25px] py-[10px] border-b-[1px] border-[#D9D9D9] flex flex-col items-start justify-start'>
          <div className='w-full h-auto'>
            <p className='text-left text-[16px] leading-[24px] text-[#000000] font-medium'>
              {props.name}
            </p>
          </div>
          <div className='w-full h-auto'>
            <p className='text-left text-[14px] leading-[20px] text-[#8696A0] font-medium'>
              {props.description}
            </p>
          </div>
        </div>
      </button>
    </>
  );
};

export default ContactItem;
