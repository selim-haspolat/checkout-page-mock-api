const Navbar = ({ setPage }) => {
  const changePage = (e) => {
    setPage(e.target.innerText);
  };

  return (
    <div className="flex px-10 py-5 border-b">
      <ul className="flex gap-3 mx-auto">
        <li onClick={changePage} className="cursor-pointer hover:bg-gray-700 transition w-28 text-center py-1 px-2 rounded-lg">
          Home
        </li>
        <li onClick={changePage} className="cursor-pointer hover:bg-gray-700 transition w-28 text-center py-1 px-2 rounded-lg">
          Admin
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
