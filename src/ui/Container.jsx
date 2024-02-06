function Container({ children, className }) {
  return (
    <div
      className={`bg-white w-11/12 md:w-9/12 h-[90%] mx-auto mt-28 md:mt-10 rounded-md relative flex flex-col gap-16 pb-6 pt-16 sm:py-16 px-32 items-center ${className}`}>
      {children}
    </div>
  );
}

export default Container;
