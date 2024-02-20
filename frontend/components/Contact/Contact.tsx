import Button from '../Button';

const Contact = () => {
  return (
    <div className="box-border flex h-auto w-full flex-col gap-[10px] py-[180px]">
      <h2 className="mx-auto w-fit text-2xl font-bold tracking-[3px] text-gray-2">
        Jung Jiyoung
      </h2>
      <h2 className="mx-auto w-fit tracking-[3px] text-gray-4">
        Web Frontend Developer
      </h2>
      <div className="mx-auto my-[25px] flex w-fit gap-[10px]">
        <a
          target="_blank"
          href="https://github.com/Jungjjeong"
          rel="noopener noreferrer"
        >
          <Button text="GITHUB" styleType="dark" />
        </a>
        <a
          target="_blank"
          href="https://blog.haeyum.me/"
          rel="noopener noreferrer"
        >
          <Button text="BLOG" styleType="dark" />
        </a>
        <a
          target="_blank"
          href="mailto:sky990106@naver.com"
          rel="noopener noreferrer"
        >
          <Button text="EMAIL" styleType="dark" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
