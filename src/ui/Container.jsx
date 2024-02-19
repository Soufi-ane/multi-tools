function Container({ children, className }) {
  return (
    <div
      className={`bg-white w-11/12 md:w-9/12  mx-auto pt-16  rounded-md relative flex flex-col gap-16 pb-6  sm:py-16 px-32 items-center border-2 border-stone-200 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
