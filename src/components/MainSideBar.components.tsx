import { useState } from 'react';
import MainFilterSideBar from './MainFilterSideBar.components';
import MainHeaderSideBar from './MainHeaderSideBar.components';
import SideBarEmptyState from './SideBarEmptyState.components';
import { CHAT_ROOM_TYPE } from '../constants/chat-room-type.constants';
import AddFavoriteChatRoomEmptyState from './AddFavoriteChatRoomEmptyState.components';
import ChatRoomItem from './ChatRoomItem.components';

const MainSideBar = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [selectedChatRoomFilter, setSelectedChatRoomFilter] = useState<string>(CHAT_ROOM_TYPE.ALL);

  const handleChatRoomFilter = (value: string, chatRoomFilterType: string) => {
    setSelectedChatRoomFilter(chatRoomFilterType);
  };

  const renderEmptyState = () => {
    if (selectedChatRoomFilter == CHAT_ROOM_TYPE.FAVORITE) {
      return (
        <>
          <AddFavoriteChatRoomEmptyState />
        </>
      );
    } else {
      return (
        <>
          <SideBarEmptyState />
        </>
      );
    }
  };

  return (
    <>
      <div className='w-full h-full flex flex-col items-start justify-start'>
        <div className='w-full h-auto px-[25px] py-[10px]'>
          <MainHeaderSideBar />
        </div>
        <div className='w-full h-auto px-[25px]'>
          <MainFilterSideBar
            handleChatRoomFilter={handleChatRoomFilter}
          />
        </div>

        {isEmpty && (
          <>
            <div className='w-full h-full max-h-[calc(100vh-(64px+94px))] overflow-hidden flex flex-col items-center justify-center p-[25px]'>
              {renderEmptyState()}
            </div>
          </>
        )}

        {!isEmpty && (
          <>
            <div className='w-full h-full max-h-[calc(100vh-(64px+94px))] overflow-y-auto flex flex-col items-start justify-start'>
              <ChatRoomItem />
            </div>
          </>
        )}
      </div>
    </>
  )
};

export default MainSideBar;
