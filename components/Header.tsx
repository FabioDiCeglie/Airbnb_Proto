import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5">
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb logo"
          objectFit="contain"
          layout="fill"
          objectPosition="left"
        />
      </div>
      <div></div>
      <div></div>
    </header>
  );
}

export default Header;
