import { ChangeEvent, FormEvent, useState } from "react";
import LoginPageImage from '../assets/images/svg/undraw_online-messaging_gjnh.svg'
import VisibleIcon from '../assets/images/svg/visibility_24px_outlined.svg'
import UnvisibleIcon from '../assets/images/svg/visibility_off_24px_outlined.svg'
import { Link, useHistory } from "react-router-dom";
import { PAGE } from "../constants/page.constants";
import { registerAccount } from "../services/authentication.services";
import { setItemToLocalStorage } from "../services/local-storage.services";
import { LOCAL_STORAGE_SERVICE } from "../constants/local-storage-service.constants";

interface FormDataSubmit {
  name: string;
  phone_number: string;
  password: string;
}

const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataSubmit>({
    name: '',
    phone_number: '',
    password: ''
  });
  const history = useHistory();

  const toggleVisibilityPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await registerAccount(formData);
      if (response.status == 'OK' && response.access_token) {
        setItemToLocalStorage(LOCAL_STORAGE_SERVICE.ACCESS_TOKEN, response.access_token);
        setFormData({
          name: '',
          phone_number: '',
          password: ''
        });
        history.push(PAGE.HOME);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <>
      <div className="w-full h-full min-h-screen flex flex-col items-center justify-center p-[25px] gap-[25px]">
        <div className="w-full h-auto max-w-[480px] flex items-center justify-center">
          <img
            src={LoginPageImage}
            alt='Login page image'
            loading='lazy'
            className='w-full h-auto max-w-[250px] object-contain object-center'
          />
        </div>
        <form
          className='w-full h-auto flex flex-col items-start justify-start max-w-[480px] gap-[25px]'
          onSubmit={handleSubmit}
        >
          <div className='w-full h-auto flex flex-col items-start justify-start gap-[10px]'>
            <div className='w-full h-auto flex flex-col items-start justify-start gap-[5px]'>
              <label htmlFor="name" className='text-left text-[16px] leading-[24px] text-[#000000] font-medium'>Nama <span className='text-[#FF0000]'>*</span></label>
              <input
                id='name'
                name='name'
                type='text'
                className='w-full h-auto px-[20px] py-[10px] border-[1px] rounded-[6px] border-[#D9D9D9] text-left text-[#000] text-[16px] leading-[24px] font-medium outline-none focus:outline-none focus-within:outline-none overflow-hidden'
                placeholder='Contoh: John Doe...'
                value={formData.name}
                onChange={handleChangeInput}
              />
            </div>
            <div className='w-full h-auto flex flex-col items-start justify-start gap-[5px]'>
              <label htmlFor="phone_number" className='text-left text-[16px] leading-[24px] text-[#000000] font-medium'>Nomor HP <span className='text-[#FF0000]'>*</span></label>
              <input
                id='phone_number'
                name='phone_number'
                type='text'
                className='w-full h-auto px-[20px] py-[10px] border-[1px] rounded-[6px] border-[#D9D9D9] text-left text-[#000] text-[16px] leading-[24px] font-medium outline-none focus:outline-none focus-within:outline-none overflow-hidden'
                placeholder='Contoh: +628135553xxxx'
                value={formData.phone_number}
                onChange={handleChangeInput}
              />
            </div>
            <div className='w-full h-auto flex flex-col items-start justify-start gap-[5px]'>
              <label htmlFor="password" className='text-left text-[16px] leading-[24px] text-[#000000] font-medium'>Kata Sandi <span className='text-[#FF0000]'>*</span></label>
              <div className='w-full h-auto border-[1px] rounded-[6px] border-[#D9D9D9] overflow-hidden flex items-center justify-between gap-[10px] px-[20px]'>
                <input
                  id='password'
                  name='password'
                  type={isShowPassword ? 'text' : 'password'}
                  className='w-full h-auto py-[10px] outline-none focus:outline-none focus-within:outline-none text-left text-[#000] text-[16px] leading-[24px] font-medium'
                  placeholder='Kata Sandi Anda...'
                  value={formData.password}
                  onChange={handleChangeInput}
                />

                <button
                  type='button'
                  className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] cursor-pointer outline-none focus:outline-none focus-within:outline-none'
                  onClick={toggleVisibilityPassword}
                >
                  <img
                    src={isShowPassword ? VisibleIcon : UnvisibleIcon}
                    alt='Password icon'
                    loading='lazy'
                    className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] object-contain object-center'
                  />
                </button>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex flex-col items-start justify-start gap-[10px]'>
            {!isLoading && (
              <button
                type='submit'
                className='w-full h-auto rounded-[6px] px-[20px] py-[10px] bg-[#508C9B] text-center text-[16px] leading-[24px] text-[#FFFFFF] font-medium cursor-pointer hover:bg-[#406c7a] outline-none focus:outline-none focus-within:outline-none'
              >
                Registrasi
              </button>
            )}

            {isLoading && (
              <button
                type="button"
                className="w-full h-auto rounded-[6px] px-[20px] py-[10px] bg-[#508C9B] opacity-60 text-center text-[16px] leading-[24px] text-[#FFFFFF] font-medium cursor-not-allowed outline-none focus:outline-none focus-within:outline-none"
                disabled
              >
                Loading...
              </button>
            )}
            <div className='w-full h-auto flex items-center justify-between gap-[10px]'>
              <Link to={PAGE.LOGIN} className='text-left text-[16px] leading-[24px] text-[#000000] font-medium cursor-pointer'>
                Sudah Punya Akun ? Masuk
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
