import { fireBaseApp } from "../../FireBase/Firebase";

const Signup = () => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            console.log(fireBaseApp);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};
export { Signup };
