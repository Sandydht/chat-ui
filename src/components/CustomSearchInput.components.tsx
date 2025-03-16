import { ChangeEvent, useEffect, useState } from 'react';
import SearchIcon from '../assets/images/svg/search_24px_outlined.svg';
import { CHAT_ROOM_TYPE } from '../constants/chat-room-type.constants';
import useDebounce from '../hooks/debounce.hooks';
import { CONTACT_TYPE } from '../constants/contact-type.constants';

interface CustomSearchInputComponentProps {
  filterType?: string;
  placeholder?: string;
  handleChangeSearchInput: (value: string, chatRoomFilterType: string) => void;
}

const CustomSearchInput = (props: CustomSearchInputComponentProps) => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const debouncedQuery = useDebounce(searchInputValue, 500);

  useEffect(() => {
    props.handleChangeSearchInput(debouncedQuery, props.filterType || CHAT_ROOM_TYPE.ALL);
  }, [debouncedQuery]);

  const renderPlaceholder = () => {
    if (props.filterType == CHAT_ROOM_TYPE.UNREAD) {
      return 'Cari percakapan belum dibaca...';
    } else if (props.filterType == CHAT_ROOM_TYPE.FAVORITE) {
      return 'Cari percakapan favorit...';
    } else if (props.filterType == CHAT_ROOM_TYPE.GROUPS) {
      return 'Cari percakapan grup...';
    } else if (props.filterType == CONTACT_TYPE.ALL) {
      return 'Cari nomor HP...';
    } else {
      return 'Cari percakapan...'
    }
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchInputValue(value);
  };

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
            id='searchInput'
            name='searchInput'
            type='search'
            className='w-full h-auto py-[10px] outline-none text-left text-[14px] leading-[20px] text-[000000] font-medium focus:outline-none focus-within:outline-none'
            placeholder={props.placeholder || renderPlaceholder()}
            value={searchInputValue}
            onChange={handleChangeInput}
          />
        </div>
      </div>
    </>
  );
};

export default CustomSearchInput;
