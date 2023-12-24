const Header = () => {
  return (
    <div className="flex flex-col size-full">
      <div className="flex items-center">
        <img
          src="logo.png"
          alt=""
          className="p-5 "
          style={{ width: "220px" }}
        />
      </div>
      <nav className="size-full flex justify-center gap-x-4">
        <a>Videogames</a>
        <a>Consoles</a>
        <a>Funko</a>
      </nav>
    </div>
  );
};

export default Header;
