import { ChangeEvent, FormEvent, useState } from 'react'
import LoginPageImage from '../assets/images/svg/undraw_online-messaging_gjnh.svg'
import VisibleIcon from '../assets/images/svg/visibility_24px_outlined.svg'
import UnvisibleIcon from '../assets/images/svg/visibility_off_24px_outlined.svg'
import { Link } from 'react-router-dom'
import { PAGE } from '../constants/page.constants'

interface FormDataSubmit {
  phoneNumber: string;
  password: string;
}

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataSubmit>({
    phoneNumber: '',
    password: ''
  });

  const toggleVisibilityPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('formData: ', formData);
    setFormData({
      phoneNumber: '',
      password: ''
    });
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
              <label htmlFor="phoneNumber" className='text-left text-[16px] leading-[24px] text-[#000000] font-medium'>Nomor HP <span className='text-[#FF0000]'>*</span></label>
              <input
                id='phoneNumber'
                name='phoneNumber'
                type='text'
                className='w-full h-auto px-[20px] py-[10px] border-[1px] rounded-[6px] border-[#D9D9D9] text-left text-[#000] text-[16px] leading-[24px] font-medium outline-none focus:outline-none focus-within:outline-none overflow-hidden'
                placeholder='Contoh: +628135553xxxx'
                value={formData.phoneNumber}
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
            <button
              type='submit'
              className='w-full h-auto rounded-[6px] px-[20px] py-[10px] bg-[#508C9B] text-center text-[16px] leading-[24px] text-[#FFFFFF] font-medium cursor-pointer hover:bg-[#406c7a] outline-none focus:outline-none focus-within:outline-none'
            >
              Masuk
            </button>
            <div className='w-full h-auto flex items-center justify-between gap-[10px]'>
              <Link to={PAGE.REGISTER} className='text-left text-[16px] leading-[24px] text-[#000000] font-medium cursor-pointer'>
                Registrasi Akun
              </Link>
              <Link to={PAGE.FORGOT_PASSWORD} className='text-left text-[16px] leading-[24px] text-[#000000] font-medium cursor-pointer'>
                Lupa Kata Sandi ?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
