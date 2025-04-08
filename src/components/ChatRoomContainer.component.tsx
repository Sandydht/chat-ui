import ChatRoomContainerBody from "./ChatRoomContainerBody.component";
import ChatRoomContainerFormInputMessage from "./ChatRoomContainerFormInputMessage.component";
import ChatRoomContainerHeader from "./ChatRoomContainerHeader.component";

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
