import React from 'react';
import ArrowBackIcon from '../assets/images/svg/arrow_back_24px.svg';
import { SIDE_BAR_TYPE } from '../constants/side-bar-type.constant';
import { useDispatch } from 'react-redux';
import { resetSelectedNavigation, selectSidebar } from '../store/navigationSlice';

const ExploreHeaderSideBar = () => {
  const dispatch = useDispatch();

  const handleClickBack = (event: React.MouseEvent<HTMLButtonElement>, type: string) => {
    event.preventDefault();
    dispatch(resetSelectedNavigation());
    dispatch(selectSidebar(type));
  };

  return (
    <>
      <div className="w-full h-auto flex items-center justify-start gap-[10px]">
        <button
          type="button"
          className="w-full h-full min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] rounded-full flex items-center justify-center outline-none focus:outline-none focus-within:outline-none overflow-hidden cursor-pointer bg-[#FFFFFF] hover:bg-[#EEEEEE]"
          onClick={(event) => handleClickBack(event, SIDE_BAR_TYPE.MAIN)}
        >
          <img
            src={ArrowBackIcon}
            alt="Arrow back icon"
            loading="lazy"
            className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] object-contain object-center'
          />
        </button>
        <div className='w-full h-auto'>
          <p className='text-left text-[22px] leading-[28px] text-[#000000]'>
            Eksplore Teman
          </p>
        </div>
      </div>
    </>
  );
};

export default ExploreHeaderSideBar;
