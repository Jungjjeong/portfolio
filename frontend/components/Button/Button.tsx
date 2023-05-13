import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  styleType: 'main' | 'dark' | 'round';
  type?: 'button' | 'submit' | 'reset';
  text?: string | ReactNode;
  onClick?: MouseEventHandler;
  form?: string;
  className?: string;
}

const Button = ({
  styleType,
  type,
  text,
  onClick,
  form,
  className = '',
}: Props) => {
  const commonStyle =
    'text-white font-medium text-sm md:text-base tracking-[2px] cursor-pointer transition-all duration-150';

  const getButtonStyle = (type: 'main' | 'dark' | 'round') => {
    switch (type) {
      case 'main':
        return 'bg-main-3/75 hover:bg-main-5/75 rounded-lg px-5 py-2.5';
      case 'dark':
        return 'bg-black/75 hover:bg-gray-1/75 rounded-lg px-5 py-2.5';
      case 'round':
        return 'rounded-full bg-gray-3/50 hover:bg-gray-4/50 w-[35px] h-[35px] text-center';
      default:
        // default Style : dark
        return 'bg-black/75 hover:bg-gray-1/75 rounded-lg text-center';
    }
  };

  return (
    <button
      className={`${commonStyle} ${getButtonStyle(styleType)} ${className}`}
      onClick={onClick && onClick}
      type={type ? type : 'button'}
      form={form}
    >
      {text}
    </button>
  );
};

export default Button;
