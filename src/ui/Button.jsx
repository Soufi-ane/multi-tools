function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-stone-100 hover:bg-stone-200  transition-all px-6 py-2.5 rounded-md">
      {children}
    </button>
  );
}

export default Button;
