import React from 'react'

function Paciente({ paciente, setPaciente, eliminarPaciente }) {
    function handleEliminar() {
        const answer = confirm("Seguro que desea eliminar el paciente");
        if (answer) {
            eliminarPaciente(paciente.id)
        }
    }
    return (
        <div
            className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p
                className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                <span
                    className="font-normal normal-case">
                    {paciente.nombre}</span>
            </p>
            <p
                className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
                <span

                    className="font-normal normal-case">
                    {paciente.propietario}</span>
            </p>
            <p
                className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}
                <span
                    className="font-normal normal-case">
                    {paciente.email}</span>
            </p>
            <p
                className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:{' '}
                <span
                    className="font-normal normal-case">
                    {paciente.fecha}</span>
            </p>
            <p
                className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{' '}
                <span
                    className="font-normal normal-case">
                    {paciente.sintomas}</span>
            </p>
            <div
                className="flex justify-between mt-10">
                <input
                    className="cursor-pointer hover:bg-indigo-700 bg-indigo-600 text-white uppercase font-bold py-2 px-10 rounded-xl" value="Editar" type="submit"
                    onClick={() => setPaciente(paciente)}
                />
                <input
                    className="cursor-pointer hover:bg-red-700 bg-red-600 text-white uppercase font-bold py-2 px-10 rounded-xl" value="Eliminar" type="submit"
                    onClick={handleEliminar}
                />
            </div>
        </div>
    )
}

export default Paciente
