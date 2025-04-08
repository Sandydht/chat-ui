import EmptyStateImage from '../assets/images/svg/undraw_online-messaging_gjnh.svg';

const ContainerEmptyState = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center p-[25px] gap-[25px]">
        <div className="w-full h-auto max-w-[400px] flex items-center justify-center">
          <img
            src={EmptyStateImage}
            alt='Empty state image'
            loading='lazy'
            className='w-full h-auto object-contain object-center'
          />
        </div>
        <div className='w-full h-auto max-w-[400px] flex flex-col items-center justify-center gap-[5px]'>
          <p className='text-center text-[22px] leading-[28px] text-[#000000]'>
            Social App
          </p>
          <p className='text-center text-[14px] leading-[20px] text-[#000000] font-medium'>
            Mulai percakapan dengan rekan Anda secara gratis!
          </p>
        </div>
      </div>
    </>
  );
};

export default ContainerEmptyState;
