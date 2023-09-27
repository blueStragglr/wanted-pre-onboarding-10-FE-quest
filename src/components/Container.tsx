import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <section className="py-20 px-12 min-h-[900px] w-[500px] mx-auto bg-black text-white rounded-lg">
      {children}
    </section>
  );
};

export default Container;
