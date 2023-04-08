type ButtonPropType = {
  handleClick: () => void;
  text: string;
  width?: string;
};

const Button = ({ handleClick, text, width = "80%" }: ButtonPropType) => {
  return (
    <button
      className={`w-[${width}] min-w-[200px] rounded-md bg-main-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-main-500 text-lg`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
