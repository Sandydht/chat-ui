import { useState } from "react";
import { SIDE_BAR_TYPE } from "../constants/side-bar-type.constants";
import MainSideBar from "../components/MainSideBar.components";
import AddChatRoomSideBar from "../components/AddChatRoomSideBar.components";
import AddGroupSideBar from "../components/AddGroupSideBar.components";
import SelectChatRoomSideBar from "../components/SelectChatRoomSideBar.components";

const Home = () => {
  const [sideBarType, setSideBarType] = useState<string>(SIDE_BAR_TYPE.MAIN);

  const handleChangeSideBarType = (type: string) => {
    setSideBarType(type);
  };

  const renderSideBar = () => {
    if (sideBarType == SIDE_BAR_TYPE.ADD_CHAT_ROOM) {
      return (
        <>
          <AddChatRoomSideBar />
        </>
      );
    } else if (sideBarType == SIDE_BAR_TYPE.ADD_GROUP) {
      return (
        <>
          <AddGroupSideBar />
        </>
      );
    } else if (sideBarType == SIDE_BAR_TYPE.SELECT_CHAT) {
      return (
        <>
          <SelectChatRoomSideBar />
        </>
      );
    } else {
      return (
        <>
          <MainSideBar
            handleClickMoreOptionButton={handleChangeSideBarType}
          />
        </>
      );
    }
  };

  return (
    <>
      <div className="w-full min-h-screen max-h-screen relative flex flex-col bg-[#D9D9D9]">
        <div className="w-full h-full min-h-[300px] max-h-[300px] bg-[#508C9B]"></div>
        <div className="w-full h-full p-[25px] flex items-start justify-start absolute left-0 top-0 right-0 bottom-0">
          <div className="w-full h-full max-w-[450px] min-h-[calc(100vh-50px)] max-h-[calc(100vh-50px)] overflow-y-auto bg-[#FFFFFF]">
            {renderSideBar()}
          </div>
          <div className="w-full h-full min-h-[calc(100vh-50px)] max-h-[calc(100vh-50px)] overflow-y-auto bg-[#F0F2F5]">
            <div className="w-full min-h-screen">
              <p>Container</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;