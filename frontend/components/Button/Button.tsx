import { MouseEventHandler } from 'react';

interface Props {
  type: 'main' | 'dark';
  text?: string;
  onClick?: MouseEventHandler;
}

const Button = ({ type, text, onClick }: Props) => {
  const mainButtonStyle =
    'text-white bg-main-3 hover:bg-main-5 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none tracking-[2px]';
  const darkButtonStyle =
    'text-white bg-gray-1 hover:bg-gray-2 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 tracking-[2px]';

  return (
    <button
      className={type === 'main' ? mainButtonStyle : darkButtonStyle}
      onClick={onClick && onClick}
    >
      {text}
    </button>
  );
};

export default Button;
