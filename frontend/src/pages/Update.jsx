import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Update() {
  // état, données dynamiques
  const {id} = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nom: "",
    email: ""
  })


  // ensemble de comportements
  useEffect(()=> {
    axios.get(`http://localhost:5000/details/${id}`)
    .then(res => {
      console.log(res)
      setValues({...values, nom: res.data[0].nom, email: res.data[0].email});
    })
    .catch(err => console.log(err))
  }, [])

  // la fonction qui gère la mise à jour de l'étudiant choisit à partir de son id
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/mettre-a-jour/${id}`, values)
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
              <form onSubmit={handleUpdate}>
                <h2 className="mb-3 text-2xl uppercase">Mettre à jour cet étudiant</h2>
                <div className="my-3">
                  <label htmlFor=""></label>
                  <input type="text" placeholder="Entrer un nom..." className="w-full max-w-lg outline-none border p-1 mt-1" 
                   value={values.nom} onChange={e => setValues({...values, nom: e.target.value})} />
                </div>
                <div className="my-3">
                  <label htmlFor=""></label>
                  <input type="email" placeholder="Entrer un email..." className="w-full max-w-lg outline-none border p-1 mt-1" 
                   value={values.email} onChange={e => setValues({...values, email: e.target.value})} />
                </div>
                <button className="btn-sm max-w-md bg-green-600 text-[#f8fafc] ">Mettre à jour</button>
              </form>
            </div>
        </div>
    </section>
  )
}
