import react, { useEffect, useState } from "react";

const MiApi = () => {
    const [personajes, setPersonajes] = useState([])
    const [busqueda, setBusqueda] = useState("")

    const URL = 'https://jsonplaceholder.typicode.com/users'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setPersonajes(data)
    }

    const Buscador = (e) => {
        setBusqueda(e.target.value)
    }
    let resultado = []
    if (!busqueda) {
        resultado = personajes
    }
    else {
        resultado = personajes.filter((dato) =>
            dato.name.toLowerCase().includes(busqueda.toLowerCase())
        )
    }

    // resultado.sort((a, b) => {
    //     return a.localeCompare(b); 
    // }
    // );
    // resultado.sort();

    useEffect(() => {
        showData()
    }, [])

    return (
        <div className="container">

            <h1>Consumo de API</h1>
            <input value={busqueda} onChange={Buscador} type="text" placeholder="Busqueda" className="form-control" />
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>

                </thead>
                <tbody>
                    {resultado.map((personaje) => (

                        <tr key={personaje.id}>
                            <td>{personaje.name}</td>
                            <td>{personaje.email}</td>
                        </tr>
                    ))

                    }

                </tbody>
            </table>
        </div>
    )

}


export default MiApi