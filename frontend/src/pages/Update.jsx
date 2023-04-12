// import React, { useEffect } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Update() {
  // état, données dynamiques
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // ensemble de comportements
  useEffect(() => {
    axios.get(`http://localhost:5000/details/${id}`)
      .then(res => {
        console.log(res)
        setValue('nom', res.data[0].nom);
        setValue('email', res.data[0].email);
      })
      .catch(err => console.log(err))
  }, [id, setValue])

  // la fonction qui gère la mise à jour de l'étudiant choisit à partir de son id
  const handleUpdate = (data) => {
    axios.put(`http://localhost:5000/mettre-a-jour/${id}`, data)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err));
  }

  // rendu navigateur
  return (
    <section className="px-4 md:px-0 py-9">
      <div className="container mx-auto">
        <div className="mt-14">
          <form onSubmit={handleSubmit(handleUpdate)}>
            <h2 className="mb-3 text-2xl uppercase">Mettre à jour cet étudiant</h2>
            <div className="my-3">
              <label htmlFor="nom">Nom</label>
              <input type="text" placeholder="Entrer un nom..." className="w-full max-w-lg outline-none border p-1 mt-1"
                {...register('nom', { required: true })} />
              {errors.nom && <span>Le nom est obligatoire</span>}
            </div>
            <div className="my-3">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Entrer un email..." className="w-full max-w-lg outline-none border p-1 mt-1"
                {...register('email', { required: true })} />
              {errors.email && <span>L'email est obligatoire</span>}
            </div>
            <button className="btn-sm max-w-md bg-green-600 text-[#f8fafc] ">Mettre à jour</button>
          </form>
        </div>
      </div>
    </section>
  )
}
