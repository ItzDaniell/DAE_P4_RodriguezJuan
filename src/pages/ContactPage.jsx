import { useForm } from "react-hook-form";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

const ContactPage = () => {
  const {
    register,
    handleSumbit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Header />
      <Hero title="Contactanos" description="A" />
      <section className="container">
        <form onSubmit={handleSumbit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo
            </label>
            <input
              {...register("email")}
              className="form-control"
              id="email"
              aria-describedby="email"
            />
            {errors.email && (
              <div className="invalid-feedback">Coloque un email correcto.</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <input
              {...register("email")}
              className="form-control"
              id="mensaje"
              aria-describedby="mensaje"
            />
            {errors.mensaje && (
              <div className="invalid-feedback">Coloque el mensaje.</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
