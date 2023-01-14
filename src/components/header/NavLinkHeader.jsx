export default ({ text }) => {
  return (<a href="@" className="relative py-8 group">
    <span className="group-hover:text-orange-prime">{text}</span>
    <span className="absolute scale-x-0 group-hover:scale-x-100 transition-all duration-300 bottom-0 block h-1 w-full group-hover:bg-orange-400 "></span>
  </a>)
};
