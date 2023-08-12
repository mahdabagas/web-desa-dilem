const ButtonDelete = () => {
  return (
    <svg
      className="w-9 h-10 cursor-pointer stroke-primary absolute z-10 hover:bg-accent hover:stroke-secondary duration-100 top-1 left-1 bg-secondary rounded-full stroke-2 border-2 border-primary"
      viewBox="0 0 34 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 8H26M24 12V26C24 26.5304 23.7893 27.0391 23.4142 27.4142C23.0391 27.7893 22.5304 28 22 28H12C11.4696 28 10.9609 27.7893 10.5858 27.4142C10.2107 27.0391 10 26.5304 10 26V12M13 12V10C13 9.46957 13.2107 8.96086 13.5858 8.58579C13.9609 8.21071 14.4696 8 15 8H19C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10V12M15 17V23M19 17V23" />
    </svg>
  );
};

export default ButtonDelete;
