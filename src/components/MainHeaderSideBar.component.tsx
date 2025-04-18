import { useEffect, useRef, useState } from "react";
import { SIDE_BAR_TYPE } from "../constants/side-bar-type.constant";
import MoreVerticalIcon from '../assets/images/svg/more_vert_24px_outlined.svg';
import PencilIcon from '../assets/images/svg/edit_24px.svg';
import { useDispatch } from "react-redux";
import { resetSelectedNavigation, selectSidebar } from "../store/navigationSlice";
import { logoutAccount } from "../services/authentication.service";
import { clearItemFromLocalStorage } from "../services/local-storage.service";
import { useHistory } from "react-router-dom";
import { PAGE } from "../constants/page.constant";

interface MoreOptionItem {
  labelText: string;
  value: string;
}

const MainHeaderSideBar = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isLoadingLogout, setIsLoadingLogout] = useState<boolean>(false);
  const [moreOptionItems, setMoreOptionItems] = useState<MoreOptionItem[]>([]);
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  const activeButtonClass = 'bg-[#EEEEEE]';
  const inactiveButtonClass = 'bg-[#FFFFFF] hover:bg-[#EEEEEE]';
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setMoreOptionItems([
      {
        labelText: 'Grup baru',
        value: SIDE_BAR_TYPE.ADD_GROUP
      },
      {
        labelText: 'Pilih percakapan',
        value: SIDE_BAR_TYPE.SELECT_CHAT
      }
    ]);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShowDropdown(!isShowDropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (wrapperRef.current && !wrapperRef.current.contains(target)) {
      setIsShowDropdown(false);
    }
  };

  const handleClickOptionItem = (event: React.MouseEvent<HTMLButtonElement>, type: string): void => {
    event.preventDefault();
    dispatch(resetSelectedNavigation());
    dispatch(selectSidebar(type));
    setIsShowDropdown(false);
  };

  const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    try {
      event.preventDefault();
      setIsLoadingLogout(true);
      const response = await logoutAccount();
      if (response.status == 'OK') {
        clearItemFromLocalStorage();
        setIsShowDropdown(false);
        history.replace(PAGE.LOGIN);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingLogout(false);
    }
  };

  return (
    <>
      <div className="w-full h-auto flex items-center justify-between gap-[10px]">
        <div className="w-auto h-auto">
          <p className="text-left text-[22px] leading-[28px] text-[000000]">
            Percakapan
          </p>
        </div>
        <div className="w-auto h-auto flex items-center justify-center gap-[10px]">
          <button
            type="button"
            className="w-full h-full min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] flex items-center justify-center cursor-pointer rounded-full outline-none focus:outline-none focus-within:outline-none bg-[#FFFFFF] hover:bg-[#EEEEEE]"
            onClick={(event) => handleClickOptionItem(event, SIDE_BAR_TYPE.ADD_CHAT_ROOM)}
          >
            <img
              src={PencilIcon}
              alt='Message icon'
              loading='lazy'
              className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] object-contain object-center'
            />
          </button>
          <div ref={wrapperRef} className='w-auto h-auto relative'>
            <button
              type="button"
              className={`w-full h-full min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] flex items-center justify-center cursor-pointer rounded-full outline-none focus:outline-none focus-within:outline-none ${isShowDropdown ? activeButtonClass : inactiveButtonClass}`}
              onClick={toggleDropdown}
            >
              <img
                src={MoreVerticalIcon}
                alt='Message icon'
                loading='lazy'
                className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] object-contain object-center'
              />
            </button>
            {isShowDropdown && (
              <div className='w-auto h-auto p-[10px] bg-[#FFFFFF] rounded-[6px] border-[1px] border-[#D9D9D9] shadow-lg overflow-hidden absolute top-[55px] right-0 flex flex-col items-start justify-start flex-nowrap'>
                {moreOptionItems.map((moreOptionItem: MoreOptionItem, moreOptionIndex: number) => (
                  <button
                    key={moreOptionIndex}
                    type='button'
                    className='w-full h-auto p-[10px] rounded-[6px] text-left text-[16px] leading-[24px] text-[#000000] font-medium whitespace-nowrap cursor-pointer bg-[#FFFFFF] hover:bg-[#EEEEEE]'
                    onClick={(event) => handleClickOptionItem(event, moreOptionItem.value)}
                  >
                    {moreOptionItem.labelText}
                  </button>
                ))}

                <button
                  type='button'
                  className='w-full h-auto p-[10px] rounded-[6px] text-left text-[16px] leading-[24px] text-[#000000] font-medium whitespace-nowrap cursor-pointer bg-[#FFFFFF] hover:bg-[#EEEEEE]'
                  disabled={isLoadingLogout}
                  onClick={handleLogout}
                >
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeaderSideBar;
