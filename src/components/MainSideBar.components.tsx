import MainHeaderSideBar from './MainHeaderSideBar.components';

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
      </div>
    </>
  )
};

export default MainSideBar;
