import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {
  // état, données dynamiques
    const [data, setData] = useState([]);

  // ensemble de comportements
    useEffect(()=> {
        axios.get("http://localhost:5000/")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
      axios.delete(`http://localhost:5000/supprimer/${id}`)
      .then(res => {
        location.reload();
      })
      .catch(err => console.log(err));
    }

  // rendu navigateur
  return (
    <section className="px-4 md:px-0 py-9">
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <div className="flex justify-end mb-4">
                    <Link to='/creer-etudiant' className="bg-green-600 text-[#f8fafc] p-2 rounded-md">Créer +</Link>
                </div>
                <table className="table table-compact w-full border border-gray-300 py-2">
                    {/* head*/}
                    <thead className="border border-gray-300 py-2 bg-gray-200">
                    <tr>
                        <th>ID</th>
                        <th>NOM</th>
                        <th>EMAIL</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* corps du tableau */}
                    {
                        data.map((item, index) => {
                            return <tr key={index}>
                                        <td className="text-right border"> {item.id} </td>
                                        <td className="border"> {item.nom} </td>
                                        <td className="border"> {item.email} </td>
                                        <td className="text-center border">
                                          <button className="btn-sm bg-cyan-400 mr-2 mb-1 md:mb-0">
                                            <Link to={`/details/${item.id}`} >Voir les détails</Link>
                                          </button>

                                          <button className="btn-sm bg-blue-600 text-[#f8fafc] mr-2 mb-1 md:mb-0">
                                            <Link to={`/mettre-a-jour/${item.id}`}>Mettre à jour</Link>
                                          </button>

                                          <button onClick={()=> handleDelete(item.id)} className="btn-sm bg-red-600 text-[#f8fafc] mb-1 md:mb-0">
                                            Supprimer
                                          </button>
                                        </td>
                                    </tr>
                        })
                    }
                    </tbody>
                </table>
                </div>
        </div>
    </section>
  )
}
