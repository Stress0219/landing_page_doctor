import './index.css'

function App() {

  return (
    <div>
      <div className="w-[377px] h-[270px] flex overflow-hidden md:h-1/4 w-full relative">
  <div className="absolute z-10">
    <h1 className="text-xl text-gray-700 relative top-1 left-[160px] md:text-5xl left-[600px] top-7">
      Otorrinolaringólogo 
      <span className="block mb-7"/> 
      en Monterrey
    </h1>
    <div className="relative top-28 left-[630px]">
      <button className="bg-transparent border-4 border-[#ed6452] text-gray-700 p-4 flex cursor-pointer hover:shadow-xl shadow-[#a6291f] transition duration-500 hover:bg-[#ed6452] hover:text-gray-200">
        <a href="#contact" className="font-bold text-lg scroll-smooth">Contáctame Ahora</a>
      </button>
    </div>
  </div>
  <img
    className="relative object-cover w-full"
    src="public/doctor.jpg"
    alt="otorrinolaringologo en monterrey"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-30"></div>
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
         Agenda una consulta por whatsapp al número  8115448285
          o mediante una llamada al 8183475220 <br />
          nuestro correo: <a href="mailto:jorgetrega@gmail.com">jorgetrega@gmail.com</a> <br />
          Lunes a Sábado <br />
          9:00 a 19:00 hr
         </p>
        </div>

        <div className="footer" id="contact">
      Visitanos para que seas atendido con la atención que te mereces en  
       Centro de Especialidades Médicas
      1er piso consultorio 126 Jose Benitez No 2704 Colonia obispado Monterrey NL CP 64060
   
      El otorrinolaringólogo en Monterrey Jorge Treviño es ahora uno de los médicos más importantes en su campo gracias a su contribución a la investigación y la prevención.


      Da clic en el botón de WhatsApp para contactarnos para saber más sobre el otorrinolaringólogo en Monterrey.

        </div>
      </div>
    </div>
  )
}

export default App
