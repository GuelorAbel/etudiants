import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function Details() {
  // état, données dynamiques
  const {id} = useParams();
  const [student, setStudent] = useState([]);

  // ensemble de comportements
  useEffect(()=> {
    axios.get(`http://localhost:5000/details/${id}`)
    .then(res => {
      console.log(res)
      setStudent(res.data[0]);
    })
    .catch(err => console.log(err))
  }, [])
  // rendu navigateur
  return (
    <section className="px-4 md:px-0 py-9">
        <div className="container mx-auto">
          <div className="card w-[55%] bg-base-100 shadow-xl p-3">
            <div className="card-body">
              <h2 className="text-2xl my-6 text-right">Détail de l'étudiant</h2>
              <hr />
              <div className="my-6">
                <p className="mb-3 font-semibold"> {student.nom} </p>
                <p> {student.email } </p>
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-sm bg-blue-600 text-[#f8fafc]">
                  <Link to="/">Revenir à l'accueil</Link>
                </button>
                <button className="btn btn-sm bg-cyan-400 text-[#111827]">
                  <Link to={`/mettre-a-jour/${student.id}`}>Mettre à jour</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
