import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {
  // état, données dynamiques
  const [values, setValues] = useState({
    nom: "",
    email: ""
  })
  const navigate = useNavigate();

  // ensemble de comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/creer', values)
    .then(res => {
      console.log(res);
      navigate("/")
    })
    .catch(err => console.log(err));
  }

  // rendu navigateur
  return (
    <section className="px-4 md:px-0 py-9">
        <div className="container mx-auto">
            <div className="mt-14">
              <form onSubmit={handleSubmit}>
                <h2 className="mb-3 text-2xl uppercase">Ajouter un étudiant</h2>
                <div className="my-3">
                  <label htmlFor=""></label>
                  <input type="text" placeholder="Entrer un nom..." className="w-full max-w-lg outline-none border p-1 mt-1" 
                  onChange={e => setValues({...values, nom: e.target.value})}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor=""></label>
                  <input type="email" placeholder="Entrer un email..." className="w-full max-w-lg outline-none border p-1 mt-1" 
                  onChange={e => setValues({...values, email: e.target.value})}
                  />
                </div>
                <button className="btn-sm max-w-md bg-green-600 text-[#f8fafc] ">Enregistrer</button>
              </form>
            </div>
        </div>
    </section>
  )
}
