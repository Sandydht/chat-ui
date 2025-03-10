import NavigationItem from "./NavigationItem";
import MessageIcon from '../assets/images/svg/message_24px_outlined.svg';
import ExploreIcon from '../assets/images/svg/explore_24px.svg';
import SettingIcon from '../assets/images/svg/settings_24px.svg';
import ProfileIcon from '../assets/images/svg/perm_identity_24px.svg';
import { useEffect, useState } from "react";
import { NAVIGATION_TYPE } from "../constants/navigation-type.constants";

export interface NavigationItemData {
  icon: string;
  labelText: string;
  value: string;
}

interface NavigationBarComponentProps {
  onSelectNavigation: (navigationItem: NavigationItemData) => void;
}

const NavigationBar = (props: NavigationBarComponentProps) => {
  const [navigationList, setNavigationList] = useState<NavigationItemData[]>([]);
  const [additionalNavigationList, setAdditionalNavigationList] = useState<NavigationItemData[]>([]);
  const [selectedNavigation, setSelectedNavigation] = useState<NavigationItemData>({
    icon: MessageIcon,
    labelText: 'Percakapan',
    value: NAVIGATION_TYPE.CHAT
  });

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

  const handleSelectNavigationItem = (navigationItem: NavigationItemData) => {
    setSelectedNavigation(navigationItem);
    props.onSelectNavigation(navigationItem);
  };

  return (
    <>
      <div className="w-auto h-full flex flex-col items-center justify-between">
        <div className="w-auto h-auto flex flex-col items-center justify-center">
          {navigationList.map((navigationItem, navigationIndex) => (
            <NavigationItem
              key={navigationIndex}
              icon={navigationItem.icon}
              isActive={Boolean(selectedNavigation.value == navigationItem.value)}
              labelText={navigationItem.labelText}
              value={navigationItem.value}
              handleSelectNavigationItem={() => handleSelectNavigationItem(navigationItem)}
            />
          ))}
        </div>
        <div className="w-auto h-auto flex flex-col items-center justify-cente">
          {additionalNavigationList.map((navigationItem, navigationIndex) => (
            <NavigationItem
              key={navigationIndex}
              icon={navigationItem.icon}
              isActive={Boolean(selectedNavigation.value == navigationItem.value)}
              labelText={navigationItem.labelText}
              value={navigationItem.value}
              handleSelectNavigationItem={() => handleSelectNavigationItem(navigationItem)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
