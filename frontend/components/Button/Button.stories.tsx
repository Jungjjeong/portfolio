import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Default = () => {
  return <Button text='GITHUB' />;
};

const handleClick = () => {
  console.log('Click!');
};

export const ClickEventTest = () => {
  return <Button onClick={handleClick} />;
};
