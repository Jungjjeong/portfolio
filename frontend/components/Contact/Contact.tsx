import Button from '../Button';

const Contact = () => {
  return (
    <div className="flex flex-col box-border w-full h-auto gap-[10px] py-[180px]">
      <h2 className="mx-auto w-fit tracking-[3px] text-gray-2 font-bold text-2xl">
        Jung Jiyoung
      </h2>
      <h2 className="mx-auto w-fit tracking-[3px] text-gray-4">
        Web Frontend Developer
      </h2>
      <div className="flex gap-[10px] w-fit my-[25px] mx-auto">
        <a
          target="_blank"
          href="https://github.com/Jungjjeong"
          rel="noopener noreferrer"
        >
          <Button text="GITHUB" styleType="dark" />
        </a>
        <a
          target="_blank"
          href="https://jungjjeong.github.io/"
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
