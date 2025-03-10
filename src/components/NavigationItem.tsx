import React, { useState } from "react";
import ButtonTooltip from "./ButtonTooltip";

interface NavigationItemComponentProps {
  icon: string;
  isActive?: boolean;
  labelText: string;
  value: string;
  handleSelectNavigationItem: () => void;
}

const NavigationItem = (props: NavigationItemComponentProps) => {
  const defaultClass = 'w-full h-full min-w-[44px] max-w-[44px] min-h-[44px] max-h-[44px] rounded-full overflow-hidden outline-none focus:outline-none focus-within:outline-none cursor-pointer flex items-center justify-center';
  const activeClass = 'bg-[#EEEEEE]';
  const inactiveClass = 'bg-transparent';
  const [isShowTooltip, setIsShowTooltip] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.handleSelectNavigationItem();
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShowTooltip(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShowTooltip(false);
  };

  return (
    <div className="w-auto h-auto relative flex items-center justify-start">
      <button
        type="button"
        className={`${defaultClass} ${props.isActive ? activeClass : inactiveClass}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={props.icon}
          alt="Navigation item icon"
          loading="lazy"
          className="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] object-contain object-center"
        />
      </button>

      {isShowTooltip && (
        <div className="w-auto h-auto absolute left-[50px]">
          <ButtonTooltip
            label={props.labelText}
          />
        </div>
      )}
    </div>
  );
};

export default NavigationItem;
