import CustomSearchInput from "./CustomSearchInput.components";

const ExploreFilterSideBar = () => {
  const handleChangeSearchInput = (value: string, chatRoomFilterType: string) => {
    console.log('value: ', value);
    console.log('chatRoomFilterType: ', chatRoomFilterType);
  };

  return (
    <>
      <div className="w-full h-auto">
        <CustomSearchInput 
          placeholder={'Cari nama...'}
          handleChangeSearchInput={handleChangeSearchInput}
        />
      </div>
    </>
  );
};

export default ExploreFilterSideBar;
