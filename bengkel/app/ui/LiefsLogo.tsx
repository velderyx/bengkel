import LiefsLogo  from 'next/image';

export default function LiefsLogo() {
  return (
    <div
      className=" flex flex-row items-center leading-none text-white">
      <LiefsLogo
          src="/liefs-logo.png"
          alt="liefs Logo"
          width={180}
          height={37}
          priority
        />
      <p className="text-[44px]">Liefs</p>
    </div>
  );
}