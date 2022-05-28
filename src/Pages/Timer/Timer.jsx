import { Clock } from "../../Component/Clock/Clock";

const Timer = () => {
  return (
    <>
      <main className="container flex w-9/12 justify-center ">
        <section className="bg-red-600 ">
          <Clock />
        </section>
      </main>
    </>
  );
};
export { Timer };
