import { useState } from 'react';
import PersonIcon from '../assets/images/svg/perm_identity_24px.svg';
import { SaveContactRequest, UserDataList } from '../models/user-service.models';
import { saveContact } from '../services/user.services';
import { useDispatch } from 'react-redux';
import { showSnackbar } from '../store/snackbarSlice';
import { SNACKBAR_TYPE } from '../constants/snackbar-type.constants';

interface ContactItemComponentProps {
  userData: UserDataList;
}

const ContactItem = (props: ContactItemComponentProps) => {
  const [isLoadingSaveContact, setIsLoadingSaveContact] = useState<boolean>(false);
  const [isShowSaveContactButton, setIsShowSaveContactButton] = useState<boolean>(props.userData.is_contact);
  const dispatch = useDispatch();

  const handleSaveContact = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    try {
      event.preventDefault();
      setIsLoadingSaveContact(true);
      const payload: SaveContactRequest = {
        member_id: props.userData._id || ''
      };
      const response = await saveContact(payload);
      if (response.status == 'OK') {
        setIsShowSaveContactButton(true);
      }
    } catch (error) {
      dispatch(showSnackbar({
        show: true,
        type: SNACKBAR_TYPE.DANGER,
        message: String(error)
      }));
    } finally {
      setIsLoadingSaveContact(false);
    }
  }

  return (
    <>
      <div
        className="w-full h-auto flex items-center justify-start gap-[20px] outline-none focus:outline-none focus-within:outline-none pl-[25px] cursor-pointer hover:bg-[#EEEEEE]"
      >
        <div className="w-full h-full min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] rounded-full overflow-hidden bg-[#EEEEEE] flex items-center justify-center">
          <img
            src={PersonIcon}
            alt='Person icon'
            loading='lazy'
            className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]'
          />
        </div>
        <div className='w-full h-auto flex items-center justify-center gap-[10px] border-b-[1px] border-[#D9D9D9] pr-[25px] py-[10px]'>
          <div className='w-full h-auto flex flex-col items-start justify-start'>
            <div className='w-full h-auto'>
              <p className='text-left text-[16px] leading-[24px] text-[#000000] font-medium'>
                {props.userData.name}
              </p>
            </div>
            <div className='w-full h-auto'>
              <p className='text-left text-[14px] leading-[20px] text-[#8696A0] font-medium'>
                {props.userData.description}
              </p>
            </div>
          </div>

          {isShowSaveContactButton == false && (
            <>
              <button
                type='button'
                className='w-auto h-auto px-[10px] py-[5px] rounded-[6px] cursor-pointer bg-[#508C9B]'
                onClick={handleSaveContact}
                disabled={isLoadingSaveContact}
              >
                <p className='text-center text-[14px] leading-[20px] text-[#FFFFFF] font-medium'>
                  Simpan
                </p>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactItem;
