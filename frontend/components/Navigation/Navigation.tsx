import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 flex gap-[50px] items-center justify-center box-border w-full h-[70px] px-[50px] bg-gray border-b border-gray-6 md:bg-main">
        <div className="grow">
          <Link href="/" passHref>
            <span className="font-bold tracking-[3px]">
              JIYOUNG&apos;S PORTFOLIO
            </span>
          </Link>
        </div>
        <Link href="/about" passHref>
          <span className="font-bold tracking-[3px]">ABOUTME</span>
        </Link>
        <Link href="/projects" passHref>
          <span className="font-bold tracking-[3px]">PROJECT</span>
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
