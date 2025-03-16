import { SNACKBAR_TYPE } from "../constants/snackbar-type.constants";
import DoneIcon from '../assets/images/svg/done_24px_outlined_green.svg';
import ErrorRedIcon from '../assets/images/svg/error_outline_24px_red.svg';
import WarningIcon from '../assets/images/svg/warning_amber_24px_outlined_yellow.svg';
import InfoIcon from '../assets/images/svg/error_outline_24px_outlined_blue.svg';

interface SnackbarComponentProps {
  type: string;
  message: string;
}

const Snackbar = (props: SnackbarComponentProps) => {
  if (props.type == SNACKBAR_TYPE.SUCCESS) {
    return (
      <>
        <div className="w-full h-auto fixed top-0 left-0 right-0 flex items-center justify-center px-[25px] py-[10px]">
          <div className="w-auto h-auto max-w-[300px] px-[10px] py-[5px] rounded-full bg-[#dcfcdf] border-[1px] border-[#17a226] flex items-center justify-start gap-[10px] overflow-hidden">
            <div className="w-full h-full min-w-[16px] max-w-[16px] min-h-[16px] max-h-[16px]">
              <img
                src={DoneIcon}
                alt="Done icon"
                loading="lazy"
                className="w-full h-full min-w-[16px] max-w-[16px] min-h-[16px] max-h-[16px] object-contain object-center"
              />
            </div>
            <div className="w-auto h-auto">
              <p className="text-left text-[14px] leading-[20px] font-medium text-[#17a226] line-clamp-2">
                {props.message}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  } else if (props.type == SNACKBAR_TYPE.DANGER) {
    return (
      <>
        <div className="w-full h-auto fixed top-0 left-0 right-0 flex items-center justify-center px-[25px] py-[10px]">
          <div className="w-auto h-auto max-w-[300px] px-[10px] py-[5px] rounded-full bg-[#fde3e4] border-[1px] border-[#bb2124] flex items-center justify-start gap-[10px] overflow-hidden">
            <div className="w-full h-full min-w-[16px] max-w-[16px] min-h-[16px] max-h-[16px]">
              <img
                src={ErrorRedIcon}
                alt="Error icon"
                loading="lazy"
                className="w-full h-full min-w-[16px] max-w-[16px] min-h-[16px] max-h-[16px] object-contain object-center"
              />
            </div>
            <div className="w-auto h-auto">
              <p className="text-left text-[14px] leading-[20px] font-medium text-[#bb2124] line-clamp-2">
                {props.message}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  } else if (props.type == SNACKBAR_TYPE.WARNING) {
    return (
      <>
        <div className="w-full h-auto fixed top-0 left-0 right-0 flex items-center justify-center px-[25px] py-[10px]">
          <div className="w-auto h-auto max-w-[300px] px-[10px] py-[5px] rounded-full bg-[#fae9cb] border-[1px] border-[#a93914] flex items-center justify-start gap-[10px] overflow-hidden">
            <div className="w-full h-full min-w-[16px] max-w-[16px] min-h-[16px] max-h-[16px]">
              <img
                src={WarningIcon}
                alt="Warning icon"
                loading="lazy"
                className="w-full h-full min-w-[16px] max-w-[16px] min-h-[16px] max-h-[16px] object-contain object-center"
              />
            </div>
            <div className="w-auto h-auto">
              <p className="text-left text-[14px] leading-[20px] font-medium text-[#a93914] line-clamp-2">
                {props.message}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="w-full h-auto fixed top-0 left-0 right-0 flex items-center justify-center px-[25px] py-[10px]">
          <div className="w-auto h-auto max-w-[300px] px-[10px] py-[5px] rounded-full bg-[#d6f1f7] border-[1px] border-[#205f7e] flex items-center justify-start gap-[10px] overflow-hidden">
            <div className="w-full h-full min-w-[16px] max-w-[16px] min-h-[16px] max-h-[16px]">
              <img
                src={InfoIcon}
                alt="Info icon"
                loading="lazy"
                className="w-full h-full min-w-[16px] max-w-[16px] min-h-[16px] max-h-[16px] object-contain object-center"
              />
            </div>
            <div className="w-auto h-auto">
              <p className="text-left text-[14px] leading-[20px] font-medium text-[#205f7e] line-clamp-2">
                {props.message}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Snackbar
