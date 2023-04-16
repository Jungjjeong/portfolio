import { MouseEventHandler } from 'react';

interface Props {
  type: 'main' | 'dark';
  text?: string;
  onClick?: MouseEventHandler;
}

const Button = ({ type, text, onClick }: Props) => {
  const commonStyle =
    'text-white font-medium text-sm md:text-base px-5 py-2.5 tracking-[2px] cursor-pointer transition-all duration-150';
  const mainButtonStyle = 'bg-main-3/75 hover:bg-main-5/75 rounded-lg';
  const darkButtonStyle = 'bg-black/75 hover:bg-gray-1/75 rounded-lg';

  return (
    <button
      className={`${commonStyle} ${
        type === 'main' ? mainButtonStyle : darkButtonStyle
      }`}
      onClick={onClick && onClick}
    >
      {text}
    </button>
  );
};

export default Button;
