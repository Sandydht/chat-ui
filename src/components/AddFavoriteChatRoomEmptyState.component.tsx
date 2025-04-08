import FavoriteEmptyStateImage from '../assets/images/svg/undraw_favorite-post_5ylx 1.svg';

const AddFavoriteChatRoomEmptyState = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center gap-[25px]">
        <div className="w-full h-auto max-w-[300px] flex items-center justify-center">
          <img
            src={FavoriteEmptyStateImage}
            alt='Favorite empty state image'
            loading='lazy'
            className='w-full h-auto max-w-[300px] object-contain object-center'
          />
        </div>
        <div className="w-full h-auto max-w-[300px] flex flex-col items-center justify-center gap-[5px]">
          <p className='text-center text-[22px] leading-[28px] text-[#000000]'>
            Tambahkan ke favorit
          </p>
          <p className='text-center text-[14px] leading-[20px] text-[#000000] font-medium'>
            Memudahkan untuk menemukan orang dan grup yang paling penting di Social App.
          </p>
        </div>
        <div className="w-full h-auto max-w-[300px] flex items-center justify-center">
          <button
            type='submit'
            className='w-full h-auto rounded-[6px] px-[20px] py-[10px] bg-[#508C9B] text-center text-[16px] leading-[24px] text-[#FFFFFF] font-medium cursor-pointer hover:bg-[#406c7a] outline-none focus:outline-none focus-within:outline-none'
          >
            Tambahkan ke Favorit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddFavoriteChatRoomEmptyState;
