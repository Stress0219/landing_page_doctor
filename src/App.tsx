import './index.css'
import { AiFillPhone } from 'react-icons/ai'

function App() {

  return (
    <div>
      <div className="w-[377px] h-[270px] flex overflow-hidden">
        <div className="absolute z-10">
        <h1 className="text-xl font-bold relative top-1 left-[160px]">Otorrinolaringólogo <span className="block"/> en Monterrey </h1>
        </div>    
        <img className=" relative bg-slate-500" src="./src/assets/doctor.jpg" alt="otorrinolaringologo en monterrey" />
      </div>


      <div className="bg-slate-100">
        <div>
          <h1 className="ml-2 mb-2 text-lg">
              El <strong>Dr. Jorge Treviño Garza</strong> es un <strong>Otorrinolaringólogo en Monterrey</strong> que cuenta con especialidad en Cirugía Plástica Facial, es un médico que constantemente se actualiza con el  fin de mejorar sus servicios a los pacientes. 
              Servicios del <strong>Otorrinolaringólogo en Monterrey</strong>. 
         </h1>
         <ul className="font-semibold ml-2">
          <li>- Consulta</li>
          <li>- Radiofrecuencia de Cornetes</li>
          <li>- Cirugia endoscópica para sinusitis</li>
          <li>- Cirugia de Tabique nasal</li>
          <li>- Endoscopia Nasal</li>
          <li>- Otorrinolaringología Pediátrica</li>
         </ul>
         <h2 className="ml-2 mt-2 mb-4">
            Te mereces un alto nivel de atención por parte de un <strong>Otorrinolaringólogo</strong> de vanguardia, por lo que el Dr. Jorge Treviño Garza especialista en padecimiento de los oídos.
         </h2>
         <p>
         Agenda una consulta por whatsapp al número  8115448285<span className="block"/> 
          o mediante una llamada al 8183475220<AiFillPhone/><span className="block"/>
          nuestro correo: jorgetrega@gmail.com <span className="block"/>
          Lunes a Sábado<span className="block"/>
          9:00 a 19:00 hrs<span className="block"/>
         </p>
        </div>

        <div className="fiurer">

        </div>
      </div>
    </div>
  )
}

export default App
