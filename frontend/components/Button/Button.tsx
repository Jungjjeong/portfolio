import { MouseEventHandler } from 'react';

interface Props {
  type: 'main' | 'dark';
  text?: string;
  onClick?: MouseEventHandler;
}

const Button = ({ type, text, onClick }: Props) => {
  const commonStyle =
    'text-white font-bold text-sm px-5 py-2.5 mr-2 mb-2 tracking-[2px] cursor-pointer';
  const mainButtonStyle = 'bg-main-3 hover:bg-main-5 rounded-lg';
  const darkButtonStyle = 'bg-gray-1 hover:bg-gray-2 rounded-lg';

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
