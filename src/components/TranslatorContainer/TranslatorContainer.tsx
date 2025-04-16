import { Translator } from "../Translator/Translator";

export const TranslatorContainer = () => {
  return (
    <main className="max-w-full h-auto flex flex-col items-center justify-center flex-grow">
      <section className="max-w-7xl mx-auto grid grid-cols-7 mt-16">
        <Translator />
      </section>
    </main>
  );
};
