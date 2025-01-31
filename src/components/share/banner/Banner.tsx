import Button from "@/components/ui/button";

const Banner = () => {
  return (
    <section id="home" className="bg-bannerImg bg-no-repeat bg-cover bg-bottom">
      <div className="w-full h-screen flex items-end bg-blackOverlay">
        <div className="container mx-auto mb-40 px-4">
          <h1 className="text-white uppercase text-xl md:text-2xl lg:text-3xl font-bold">
            Bienvenido al Minimarket
          </h1>
          <p className="text-white w-full max-w-2xl my-8 text-sm md:text-base">
            Gestiona tus productos, ventas y clientes de manera eficiente.
          </p>
          <Button label="Empezar" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
