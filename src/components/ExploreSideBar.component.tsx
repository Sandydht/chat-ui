import { useEffect, useState } from "react";
import ExploreFilterSideBar from "./ExploreFilterSideBar.component";
import ExploreHeaderSideBar from "./ExploreHeaderSideBar.component";
import { getUsers } from "../services/user.service";
import ContactItem from "./ContactItem.component";
import { UserDataList } from "../models/user-service.model";

const ExploreSideBar = () => {
  const [userList, setUserList] = useState<UserDataList[]>([]);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = async () => {
    try {
      const response = await getUsers();
      if (response.status == 'OK' && response.data.length > 0) {
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
          {userList.map((userItem: UserDataList) => (
            <ContactItem
              key={userItem._id}
              userData={userItem}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreSideBar;
