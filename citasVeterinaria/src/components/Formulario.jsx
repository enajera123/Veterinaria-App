import { useState, useEffect } from 'react';
import Error from './Error';
function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    useEffect(() => {
        if (paciente.id) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])
    function submitForm(event) {
        event.preventDefault();
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
        } else {
            setError(false)
            const generateId = () => {
                const random = Math.random().toString(36).substr(2);
                const fecha = Date.now().toString(36)
                return random + fecha
            }
            const pacienteNuevo = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
            }
            if (paciente.id) {
                pacienteNuevo.id = paciente.id
                const pacientesActualizados = pacientes.map((pacienteState => pacienteState.id === paciente.id ? pacienteNuevo : pacienteState))
                setPacientes(pacientesActualizados)
                setPaciente({})
            } else {
                pacienteNuevo.id = generateId()
                setPacientes([...pacientes, pacienteNuevo])
            }
            resetFields()
        }

        function resetFields() {
            setPropietario('')
            setNombre('')
            setEmail('')
            setSintomas('')
            setFecha('')
        }

    }
    return (
        <div
            className="md:w-1/2 lg:w-2/5">
            <h2
                className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p
                className="text-lg mt-5 text-center"> Añade Pacientes y {' '}
                <span
                    className="text-indigo-600 font-bold">Administralos</span></p>

            <form
                onSubmit={submitForm}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error ? <Error mensaje="Todos los campos son requeridos" /> : ""}
                <div
                    className="mb-5">
                    <label
                        htmlFor="nombreMascota"
                        className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                        id="nombreMascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre de la mascota"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="nombrePropietario"
                        className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input
                        id="nombrePropietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre del propietario"
                        onChange={(e) => setPropietario(e.target.value)}
                        value={propietario}
                    />

                </div>
                <div
                    className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                        id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="email"
                        placeholder="Email del propietario"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div
                    className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input
                        id="alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="date"
                        onChange={(e) => setFecha(e.target.value)}
                        value={fecha}
                    />
                </div>
                <div
                    className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        onChange={(e) => setSintomas(e.target.value)}
                        value={sintomas}
                    ></textarea>
                </div>
                <input
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                    type="submit"
                    className="mb-5 transition-all hover:bg-indigo-700 hover:cursor-pointer bg-indigo-600 w-full p-3 text-white uppercase font-bold" />
            </form>
        </div>
    )
}

export default Formulario
