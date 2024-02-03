function Header() {
  return (
    <header className="bg-red-500 flex items-center justify-between">
      <img
        className=" w-24"
        src="https://cdn.pixabay.com/photo/2022/01/17/22/20/add-6945894_1280.png"
        alt=""
      />
      <ul className="flex items-center gap-20 mr-20">
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </ul>
    </header>
  );
}

export default Header;
