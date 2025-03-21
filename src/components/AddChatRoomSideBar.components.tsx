import { useState } from "react";
import AddChatRoomSideBarHeader from "./AddChatRoomSideBarHeader.components";
import CustomSearchInput from "./CustomSearchInput.components";
import { CONTACT_TYPE } from "../constants/contact-type.constants";
import ContactItem from "./ContactItem";

interface AddChatRoomSideBarComponentProps {
  onClickBack: (type: string) => void;
}

const AddChatRoomSideBar = (props: AddChatRoomSideBarComponentProps) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleChangeSearchInput = (value: string) => {
    setSearchInput(value);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-start justify-start">
        <div className="w-full h-auto">
          <AddChatRoomSideBarHeader 
            onClickBack={props.onClickBack}
          />
        </div>
        <div className="w-full h-auto px-[25px] pb-[10px]">
          <CustomSearchInput 
            filterType={CONTACT_TYPE.ALL}
            handleChangeSearchInput={handleChangeSearchInput}
          />
        </div>
        <div className="w-full h-full min-h-[calc(100vh-(64px+54px+50px))] max-h-[calc(100vh-(64px+54px+50px))] overflow-y-auto flex flex-col items-start justify-start">
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
          <ContactItem 
            name="A. C."
            description="Hey there! I am using WhatsApp."
          />
        </div>
      </div>
    </>
  )
};

export default AddChatRoomSideBar;
