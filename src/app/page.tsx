import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <form
          className="flex flex-col justify-center items-center bg-gray-100 p-10 -mt-6 md:w-96 md:h-96 space-y-4 rounded-md"
        >
          <span className="text-xl font-light mb-4">
            Faça seu login
          </span>
          <Input placeholder="Digite seu usuario" />
          <Input placeholder="Digite sua senha" />
          <Button />

        </form>
      </div>
    </>

  );
}
