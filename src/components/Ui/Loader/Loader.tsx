 import Font from "../../icons/Font";

const Loader = () => {
  return (
    <div className="flex items-center justify-center text-primary text-large my-4 w-full">
      <div className="animate-spin">
        <Font iconName="fa-spinner" />
      </div>
    </div>
  );
};

export default Loader;
