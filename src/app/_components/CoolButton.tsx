const CoolButton = ({}) => {
  return (
    <button className="group relative z-10 h-12 w-32 cursor-pointer overflow-hidden rounded-md border-none bg-primary p-2 text-xl font-bold text-black">
      Sign in!
      <span className="absolute -left-2 -top-8 h-32 w-36 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-1000 group-hover:scale-x-100 group-hover:duration-500"></span>
      <span className="absolute -left-2 -top-8 h-32 w-36 origin-left rotate-12 scale-x-0 transform bg-indigo-400 transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-700"></span>
      <span className="absolute -left-2 -top-8 h-32 w-36 origin-left rotate-12 scale-x-0 transform bg-indigo-600 transition-transform duration-500 group-hover:scale-x-50 group-hover:duration-1000"></span>
      <span className="absolute left-10 top-2.5 z-10 opacity-0 duration-100 group-hover:opacity-100 group-hover:duration-1000">
        Now!
      </span>
    </button>
  );
};

export default CoolButton;