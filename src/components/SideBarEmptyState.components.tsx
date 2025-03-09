import NoDataImage from '../assets/images/svg/undraw_no-data_ig65.svg';

const SideBarEmptyState = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-[25px] p-[25px]">
      <div className="w-full h-auto max-w-[300px] flex items-center justify-center">
        <img 
          src={NoDataImage}
          alt='No data image'
          loading='lazy'
          className='w-full h-auto max-w-[200px] object-contain object-center'
        />
      </div>
      <div className='w-full h-auto flex items-center justify-center'>
        <p className='text-center text-[22px] leading-[28px] text-[#000000]'>
          Belum ada percakapan
        </p>
      </div>
    </div>
  );
};

export default SideBarEmptyState;
