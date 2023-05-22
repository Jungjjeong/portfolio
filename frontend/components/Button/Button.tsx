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
    'text-gray font-medium text-sm md:text-base tracking-[2px] cursor-pointer transition-all duration-150';
  const darkStyle = 'dark:text-gray dark:bg-dark-2/70 dark:hover:bg-dark-2/40';

  const getButtonStyle = (type: 'main' | 'dark' | 'round') => {
    switch (type) {
      case 'main':
        return 'bg-main-3/75 hover:bg-main-5/75 rounded-lg px-5 py-2.5';
      case 'dark':
        return 'bg-gray-3/75 hover:bg-gray-2/75 rounded-lg px-5 py-2.5';
      case 'round':
        return 'rounded-full bg-gray-3/50 dark:bg-gray-1 hover:bg-gray-4/50 dark:hover:bg-gray-1/50 w-[35px] h-[35px] text-center';
      default:
        // default Style : dark
        return 'bg-gray-3/75 hover:bg-gray-2/75 rounded-lg text-center';
    }
  };

  return (
    <button
      className={`${commonStyle} ${darkStyle} ${getButtonStyle(
        styleType
      )} ${className}`}
      onClick={onClick && onClick}
      type={type ? type : 'button'}
      form={form}
    >
      {text}
    </button>
  );
};

export default Button;
