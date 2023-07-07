import Paciente from "./Paciente"
function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
    let titulo;
    let subTitulo;
    let subSubTitulo;
    if (pacientes.length) {
        titulo = "Listado Pacientes";
        subTitulo = "Administra tus"
        subSubTitulo = "Pacientes";
    } else {
        titulo = "No hay pacientes"
        subTitulo = "Comienza agregando pacientes"
        subSubTitulo = "y aparecerán en este lugar"
    }
    return (

        <div
            className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            <h2
                className="font-black text-3xl text-center">{titulo}</h2>
            <p
                className="text-xl mt-5 mb-10 text-center">
                {subTitulo} {' '}
                <span
                    className="text-indigo-600 font-bold ">
                    {subSubTitulo}
                </span>
            </p>
            {pacientes.map((paciente) => <Paciente
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                key={paciente.id}
            />)}
        </div>
    )
}

export default ListadoPacientes
