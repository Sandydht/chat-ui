import EmptyUserPhotoIcon from '../assets/images/svg/perm_identity_24px_outlined.svg';

const ChatRoomItem = () => {
  return (
    <>
      <button
        type="button"
        className="w-full h-auto pl-[25px] flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#EEEEEE] outline-none focus:outline-none focus-within:outline-none"
      >
        <div className="w-full h-full min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] rounded-full bg-[#F0F2F5] flex items-center justify-center overflow-hidden">
          <img
            src={EmptyUserPhotoIcon}
            alt='Empty user photo icon'
            loading='lazy'
            className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]'
          />
        </div>
        <div className='w-full h-auto py-[10px] border-b-[1px] border-[#D9D9D9] flex flex-col items-start justify-start pr-[25px]'>
          <div className='w-full h-auto flex items-center justify-between gap-[10px]'>
            <p className='text-left text-[16px] leading-[24px] text-[#000000] font-medium'>
              Sergio de Paula
            </p>
            <p className='text-end text-[12px] leading-[16px] text-[#000000] font-medium'>
              19:36
            </p>
          </div>
          <div className='w-full h-auto flex items-center justify-between gap-[10px]'>
            <p className='text-left text-[14px] leading-[20px] text-[#000000] font-medium'>
              Hello, how are you ?
            </p>
            <div className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] rounded-full bg-[#508C9B] overflow-hidden p-[5px]'>
              <p className='text-center text-[11px] leading-[16px] text-[#FFFFFF] font-medium'>
                1
              </p>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export default ChatRoomItem;
