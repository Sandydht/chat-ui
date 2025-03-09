import SearchIcon from '../assets/images/svg/search_24px_outlined.svg';

const CustomSearchInput = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-start bg-[#F0F2F5] rounded-[6px] overflow-hidden px-[20px] gap-[10px]">
        <div className="w-auto h-auto py-[10px]">
          <img 
            src={SearchIcon}
            alt='Search icon'
            loading='lazy'
            className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] object-contain object-center'
          />
        </div>
        <div className='w-full h-auto'>
          <input 
            type='search'
            className='w-full h-auto py-[10px] outline-none text-left text-[14px] leading-[20px] text-[000000] font-medium focus:outline-none focus-within:outline-none'
            placeholder='Cari percakapan...'
          />
        </div>
      </div>
    </>
  );
};

export default CustomSearchInput;
