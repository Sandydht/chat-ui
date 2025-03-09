import MainFilterSideBar from './MainFilterSideBar.components';
import MainHeaderSideBar from './MainHeaderSideBar.components';
import SideBarEmptyState from './SideBarEmptyState.components';

interface MainSideBarComponentProps {
  handleClickMoreOptionButton: (type: string) => void;
}

const MainSideBar = (props: MainSideBarComponentProps) => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-start justify-start pt-[25px] gap-[25px]">
        <div className='w-full h-auto px-[25px]'>
          <MainHeaderSideBar
            handleClickMoreOptionButton={props.handleClickMoreOptionButton}
          />
        </div>
        <div className='w-full h-auto px-[25px]'>
          <MainFilterSideBar />
        </div>

        {/* <div className='w-full h-full max-h-[calc(100vh-(75px+44px+96px))] overflow-y-auto'>

        </div> */}

        <div className='w-full h-full max-h-[calc(100vh-(75px+44px+96px))] overflow-hidden flex flex-col items-center justify-center p-[25px]'>
          <SideBarEmptyState />
        </div>
      </div>
    </>
  )
};

export default MainSideBar;
