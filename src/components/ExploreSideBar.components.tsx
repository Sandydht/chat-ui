import { useEffect, useState } from "react";
import ExploreFilterSideBar from "./ExploreFilterSideBar.components";
import ExploreHeaderSideBar from "./ExploreHeaderSideBar.components";
import { getUsers } from "../services/user.services";
import ContactItem from "./ContactItem.components";

const ExploreSideBar = () => {
  const [userList, setUserList] = useState<any[]>([]);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = async () => {
    try {
      const response = await getUsers();
      if (response.status == 'OK') {
        setUserList(response.data);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="w-full h-auto flex flex-col items-start justify-start">
        <div className="w-full h-auto px-[25px] py-[10px]">
          <ExploreHeaderSideBar />
        </div>
        <div className="w-full h-auto px-[25px] pb-[10px]">
          <ExploreFilterSideBar />
        </div>
        <div className="w-full h-auto flex flex-col items-start justify-start min-h-[calc(100vh-(54px+64px+50px))] max-h-[calc(100vh-(54px+64px+50px))] overflow-y-auto">
          {userList.map((userItem, userIndex) => (
            <>
              <ContactItem 
                key={userIndex}
                name={userItem.name}
                description='test'
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreSideBar;
