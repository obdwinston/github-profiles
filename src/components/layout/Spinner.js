import spinner from "../../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100">
      <img
        src={spinner}
        alt="Loading..."
        width={100}
        className="text-center mx-auto"
      />
    </div>
  );
};

export default Spinner;
