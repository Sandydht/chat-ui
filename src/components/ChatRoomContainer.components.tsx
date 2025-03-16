import ChatRoomContainerBody from "./ChatRoomContainerBody.components";
import ChatRoomContainerFormInputMessage from "./ChatRoomContainerFormInputMessage.components";
import ChatRoomContainerHeader from "./ChatRoomContainerHeader.components";

const ChatRoomContainer = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-start justify-start">
        <ChatRoomContainerHeader />
        <ChatRoomContainerBody />
        <ChatRoomContainerFormInputMessage />
      </div>
    </>
  );
};

export default ChatRoomContainer;
