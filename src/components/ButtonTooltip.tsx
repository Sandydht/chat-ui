interface ButtonTooltipComponentProps {
  label: string;
}

const ButtonTooltip = (props: ButtonTooltipComponentProps) => {
  return (
    <>
      <div className="w-auto h-auto px-[20px] py-[5px] bg-[#000000] rounded-[99em]">
        <p className="text-center text-[11px] leading-[16px] text-[#FFFFFF] font-medium">
          {props.label}
        </p>
      </div>
    </>
  );
};

export default ButtonTooltip;
