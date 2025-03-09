import EmptyUserPhotoIcon from '../assets/images/svg/perm_identity_24px_outlined.svg';

interface ChatRoomContainerHeaderComponentProps {
  photo_url?: string;
  name?: string;
}

const ChatRoomContainerHeader = (props: ChatRoomContainerHeaderComponentProps) => {
  return (
    <>
      <div className="w-full h-auto px-[25px] py-[10px] bg-[#FFFFFF] flex items-center justify-start gap-[25px]">
        <div className="w-full h-full min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] rounded-full overflow-hidden flex items-center justify-center bg-[#F0F2F5]">
          <img 
            src={props.photo_url ? props.photo_url : EmptyUserPhotoIcon}
            alt='Empty user photo icon'
            loading='lazy'
            className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]'
          />
        </div>
        <div className='w-full h-auto'>
          <p className='text-left text-[16px] leading-[24px] text-[#000000] font-medium'>
            {props.name || '-'}
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatRoomContainerHeader;
