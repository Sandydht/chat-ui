import NavigationItem from "./NavigationItem.components";
import MessageIcon from '../assets/images/svg/message_24px_outlined.svg';
import ExploreIcon from '../assets/images/svg/explore_24px.svg';
import SettingIcon from '../assets/images/svg/settings_24px.svg';
import ProfileIcon from '../assets/images/svg/perm_identity_24px.svg';
import { useEffect, useState } from "react";
import { NAVIGATION_TYPE } from "../constants/navigation-type.constants";
import { useDispatch } from "react-redux";
import { resetSelectedSidebar, selectNavigation } from "../store/navigationSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export interface NavigationItemData {
  icon: string;
  labelText: string;
  value: string;
}

const NavigationBar = () => {
  const [navigationList, setNavigationList] = useState<NavigationItemData[]>([]);
  const [additionalNavigationList, setAdditionalNavigationList] = useState<NavigationItemData[]>([]);
  const dispatch = useDispatch();
  const selectedNavigation = useSelector((state: RootState) => state.navigation.selectedNavigation);

  useEffect(() => {
    setNavigationList([
      {
        icon: MessageIcon,
        labelText: 'Percakapan',
        value: NAVIGATION_TYPE.CHAT
      },
      {
        icon: ExploreIcon,
        labelText: 'Eksplor',
        value: NAVIGATION_TYPE.EXPLORE
      }
    ]);

    setAdditionalNavigationList([
      {
        icon: SettingIcon,
        labelText: 'Pengaturan',
        value: NAVIGATION_TYPE.SETTING
      },
      {
        icon: ProfileIcon,
        labelText: 'Profil',
        value: NAVIGATION_TYPE.PROFILE
      }
    ]);
  }, []);

  const handleSelectNavigationItem = (navigationItem: string) => {
    dispatch(resetSelectedSidebar());
    dispatch(selectNavigation(navigationItem));
  };

  return (
    <>
      <div className="w-auto h-full flex flex-col items-center justify-between">
        <div className="w-auto h-auto flex flex-col items-center justify-center">
          {navigationList.map((navigationItem, navigationIndex) => (
            <NavigationItem
              key={navigationIndex}
              icon={navigationItem.icon}
              isActive={Boolean(navigationItem.value == selectedNavigation)}
              labelText={navigationItem.labelText}
              value={navigationItem.value}
              handleSelectNavigationItem={() => handleSelectNavigationItem(navigationItem.value)}
            />
          ))}
        </div>
        <div className="w-auto h-auto flex flex-col items-center justify-cente">
          {additionalNavigationList.map((navigationItem, navigationIndex) => (
            <NavigationItem
              key={navigationIndex}
              icon={navigationItem.icon}
              isActive={Boolean(navigationItem.value == selectedNavigation)}
              labelText={navigationItem.labelText}
              value={navigationItem.value}
              handleSelectNavigationItem={() => handleSelectNavigationItem(navigationItem.value)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
