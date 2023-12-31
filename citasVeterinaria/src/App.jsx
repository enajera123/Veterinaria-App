import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useEffect, useState } from "react"
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const eliminarPaciente = (id => {
    const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id != id)
    setPacientes(pacientesActualizados)
  })

  useEffect(() => {
    const listPacientes = (() => {
      const data = localStorage.getItem('pacientes')
      if (data !=null) {
        const pacientesLS = JSON.parse(data)??[];
        console.log(pacientesLS)
        if (pacientesLS.length > 0) {
          console.table(pacientesLS)
          setPacientes(pacientesLS)
        }
      }
    })
    listPacientes();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20" >
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
