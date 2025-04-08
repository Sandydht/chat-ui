import React, { useEffect, useState } from "react";
import CustomSearchInput from "./CustomSearchInput.component";
import { CHAT_ROOM_TYPE } from "../constants/chat-room-type.constant";

interface MainFilterSideBarComponentProps {
  handleChatRoomFilter: (value: string, chatRoomFilterType: string) => void;
}

interface ChatRoomFilterItem {
  labelText: string;
  value: string;
}

const MainFilterSideBar = (props: MainFilterSideBarComponentProps) => {
  const activeChatRoomFilterClass = 'bg-[#C2DADF] text-center text-[14px] leading-[20px] text-[#406C7A] font-medium';
  const inactiveChatRoomFilterClass = 'bg-[#F0F2F5] text-center cursor-pointer text-[14px] leading-[20px] text-[#000000] font-medium';
  const [chatRoomFilterList, setChatRoomFilterList] = useState<ChatRoomFilterItem[]>([]);
  const [selectedChatRoomFilter, setSelectedChatRoomFilter] = useState<ChatRoomFilterItem>({
    labelText: 'Semua',
    value: CHAT_ROOM_TYPE.ALL
  });
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    setChatRoomFilterList([
      {
        labelText: 'Semua',
        value: CHAT_ROOM_TYPE.ALL
      },
      {
        labelText: 'Belum Dibaca',
        value: CHAT_ROOM_TYPE.UNREAD
      },
      {
        labelText: 'Favorit',
        value: CHAT_ROOM_TYPE.FAVORITE
      },
      {
        labelText: 'Grup',
        value: CHAT_ROOM_TYPE.GROUPS
      }
    ]);
  }, []);

  const handleSelectChatRoomFilter = (event: React.MouseEvent<HTMLButtonElement>, selectedChatRoomFilter: ChatRoomFilterItem) => {
    event.preventDefault();
    setSelectedChatRoomFilter(selectedChatRoomFilter);
    props.handleChatRoomFilter(searchInput, selectedChatRoomFilter.value);
  };

  const handleChangeSearchInput = (value: string, chatRoomFilterType: string) => {
    setSearchInput(value);
    props.handleChatRoomFilter(value, chatRoomFilterType);
  };

  return (
    <>
      <div className="w-full h-auto flex flex-col items-start justify-start gap-[10px]">
        <div className="w-full h-auto">
          <CustomSearchInput
            filterType={selectedChatRoomFilter.value}
            handleChangeSearchInput={handleChangeSearchInput}
          />
        </div>

        <div className="w-full h-auto flex items-center justify-start gap-[10px] overflow-x-auto pb-[10px]">
          {chatRoomFilterList.map((chatRoomFilterItem: ChatRoomFilterItem, chatRoomFilterIndex: number) => (
            <button
              key={chatRoomFilterIndex}
              type="button"
              className={`w-auto h-auto px-[15px] py-[5px] rounded-full outline-none focus:outline-none focus-within:outline-none whitespace-nowrap ${selectedChatRoomFilter.value == chatRoomFilterItem.value ? activeChatRoomFilterClass : inactiveChatRoomFilterClass}`}
              disabled={selectedChatRoomFilter.value == chatRoomFilterItem.value}
              onClick={(event) => handleSelectChatRoomFilter(event, chatRoomFilterItem)}
            >
              {chatRoomFilterItem.labelText}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainFilterSideBar;
