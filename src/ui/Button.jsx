function Button({ children, onClick, more = "" }) {
  return (
    <button
      onClick={onClick}
      className={` bg-stone-100 ${more} hover:bg-stone-200  transition-all px-6 py-2.5 rounded-md focus:outline-stone-400 `}>
      {children}
    </button>
  );
}

export default Button;
