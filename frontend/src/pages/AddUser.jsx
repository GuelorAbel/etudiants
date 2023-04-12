import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  // état, données dynamiques
  const { handleSubmit , register } = useForm();
  const navigate = useNavigate();

  // ensemble de comportements
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/creer", data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  // rendu navigateur
  return (
    <section className="px-4 md:px-0 py-9">
      <div className="container mx-auto">
        <div className="mt-14">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="mb-3 text-2xl uppercase">Ajouter un étudiant</h2>
            <div className="my-3">
              <label htmlFor="nom">Nom:</label>
              <input
                type="text"
                name="nom"
                placeholder="Entrer un nom..."
                className="w-full max-w-lg outline-none border p-1 mt-1"
                {...register("nom", {required: true})}
              />
            </div>
            <div className="my-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Entrer un email..."
                className="w-full max-w-lg outline-none border p-1 mt-1"
                {...register("email", {required: true})}
              />
            </div>
            <button className="btn-sm max-w-md bg-green-600 text-[#f8fafc]">
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
