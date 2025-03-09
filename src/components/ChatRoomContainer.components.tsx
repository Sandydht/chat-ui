import ChatRoomContainerBody from "./ChatRoomContainerBody";
import ChatRoomContainerFormInputMessage from "./ChatRoomContainerFormInputMessage";
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
