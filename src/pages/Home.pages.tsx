import { useEffect, useState } from "react";
import { SIDE_BAR_TYPE } from "../constants/side-bar-type.constants";
import MainSideBar from "../components/MainSideBar.components";
import AddChatRoomSideBar from "../components/AddChatRoomSideBar.components";
import AddGroupSideBar from "../components/AddGroupSideBar.components";
import SelectChatRoomSideBar from "../components/SelectChatRoomSideBar.components";
import { connectSocket, disconnectSocket, listenForMessages } from "../services/socket-io.services";
import ContainerEmptyState from "../components/ContainerEmptyState.components";
import ChatRoomContainer from "../components/ChatRoomContainer.components";
import { getUserProfile } from "../services/user.services";
import { UserDataProfile } from "../models/user-service.models";

const Home = () => {
  const [userProfileData, setUserProfileData] = useState<UserDataProfile | null>(null);
  const [sideBarType, setSideBarType] = useState<string>(SIDE_BAR_TYPE.MAIN);
  const [isEmpty] = useState<boolean>(true);

  useEffect(() => {
    handleGetUserProfile();
  }, []);

  useEffect(() => {
    connectSocket();

    listenForMessages((message: any) => {
      console.log('payload: ', message);
    });

    return () => disconnectSocket();
  }, []);

  const handleGetUserProfile = async () => {
    try {
      const response = await getUserProfile();
      if (response.status == 'OK' && response.data) {
        setUserProfileData(response.data);
      }
    } catch (error) {
      throw error;
    }
  };

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
          <div className="w-full h-full max-w-[450px] min-h-[calc(100vh-50px)] max-h-[calc(100vh-50px)] overflow-hidden bg-[#FFFFFF]">
            {renderSideBar()}
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