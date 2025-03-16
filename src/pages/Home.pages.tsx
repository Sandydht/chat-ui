import { useState } from "react";
import { SIDE_BAR_TYPE } from "../constants/side-bar-type.constants";
import MainSideBar from "../components/MainSideBar.components";
import AddChatRoomSideBar from "../components/AddChatRoomSideBar.components";
import AddGroupSideBar from "../components/AddGroupSideBar.components";
import SelectChatRoomSideBar from "../components/SelectChatRoomSideBar.components";
import ContainerEmptyState from "../components/ContainerEmptyState.components";
import ChatRoomContainer from "../components/ChatRoomContainer.components";
import NavigationBar from "../components/NavigationBar.components";
import { NAVIGATION_TYPE } from "../constants/navigation-type.constants";
import ExploreSideBar from "../components/ExploreSideBar.components";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Home = () => {
  const selectedNavigationType = useSelector((state: RootState) => state.navigation.selectedNavigation);
  const selectedSideBarType = useSelector((state: RootState) => state.navigation.selectedSidebar);
  const [isEmpty] = useState<boolean>(true);

  const navigationBar = () => {
    if (selectedNavigationType == NAVIGATION_TYPE.CHAT) {
      return renderSideBarChatType();
    } else if (selectedNavigationType == NAVIGATION_TYPE.EXPLORE) {
      return renderSideBarExploreType();
    }
  };

  const renderSideBarChatType = () => {
    if (selectedSideBarType == SIDE_BAR_TYPE.ADD_CHAT_ROOM) {
      return (
        <>
          <AddChatRoomSideBar />
        </>
      );
    } else if (selectedSideBarType == SIDE_BAR_TYPE.ADD_GROUP) {
      return (
        <>
          <AddGroupSideBar />
        </>
      );
    } else if (selectedSideBarType == SIDE_BAR_TYPE.SELECT_CHAT) {
      return (
        <>
          <SelectChatRoomSideBar />
        </>
      );
    } else {
      return (
        <>
          <MainSideBar />
        </>
      );
    }
  };

  const renderSideBarExploreType = () => {
    return (
      <>
        <ExploreSideBar />
      </>
    );
  };

  return (
    <>
      <div className="w-full min-h-screen max-h-screen relative flex flex-col bg-[#D9D9D9]">
        <div className="w-full h-full min-h-[300px] max-h-[300px] bg-[#508C9B]"></div>
        <div className="w-full h-full p-[25px] flex items-start justify-start absolute left-0 top-0 right-0 bottom-0">
          <div className="w-auto h-full bg-[#FFFFFF] border-r-[1px] border-[#D9D9D9] p-[10px]">
            <NavigationBar />
          </div>

          <div className="w-full h-full max-w-[420px] min-h-[calc(100vh-50px)] max-h-[calc(100vh-50px)] overflow-hidden bg-[#FFFFFF]">
            {navigationBar()}
          </div>

          <div className="w-full h-full min-h-[calc(100vh-50px)] max-h-[calc(100vh-50px)] overflow-hidden bg-[#F0F2F5]">
            {isEmpty && (
              <ContainerEmptyState />
            )}
            {!isEmpty && (
              <ChatRoomContainer />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;