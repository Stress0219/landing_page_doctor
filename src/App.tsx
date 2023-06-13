import "/src/index.css";
import { LuPhone } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

function App() {
  return (
    <div>
      <div className="w-[377px] h-[270px] flex overflow-hidden md:h-1/4 w-full relative">
        <div className="absolute z-10">
          <h1 className="text-xl text-gray-700 relative top-1 left-[160px] md:text-5xl md:left-[600px] md:top-7">
            Otorrinolaringólogo
            <span className="block mb-7" />
            en Monterrey
          </h1>
          <div className="relative top-28 md:top-36 md:left-[630px]">
            <button className="bg-[#ed6452] border-4 border-[#ed6452] text-gray-200 p-4 flex cursor-pointer hover:shadow-xl shadow-[#a6291f] hover:bg-[#a6291f] hover:border-[#a6291f] transition duration-500">
              <a href="#contact" className="font-bold text-lg scroll-smooth">
                Contáctame Ahora
              </a>
            </button>
          </div>
        </div>
        <img
          className="relative object-cover w-full"
          src="/doctor.jpg"
          alt="otorrinolaringologo en monterrey"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-30"></div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div className="transition duration-300 ease-in hover:scale-105 flex flex-col mx-4 my-7 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/tratos.jpg"
            alt="otorrinolaringologo en monterrey"
          />
          <div className="flex flex-col justify-start p-6">
            <h2 className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Te mereces un alto nivel de atención por parte de un
              Otorrinolaringólogo de vanguardia, por lo que el Dr. Jorge Treviño
              Garza especialista en padecimiento de los oídos.
            </h2>
          </div>
        </div>
        <div className="transition duration-300 ease-in hover:scale-105 flex flex-col mx-4 my-7 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/investigacion.jpg"
            alt="otorrinolaringologo en monterrey"
          />
          <div className="flex flex-col justify-start p-6">
            <h2 className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              El <strong>otorrinolaringólogo en Monterrey Jorge Treviño</strong>
              es ahora uno de los médicos más importantes en su campo gracias a
              su contribución a la investigación y la prevención.
            </h2>
          </div>
        </div>
      </div>
      <div className=" mt-8 ml-2 flex justify-center items-center">
        <img
          src="horario.jpg"
          alt="otorrinolaringologo en monterrey"
          className="w-6/12"
        />
        <div>
          <h1 className="text-slate-200 text-2xl mx-7">
            El <strong>Dr. Jorge Treviño Garza</strong> es un
            <strong>Otorrinolaringólogo en Monterrey</strong> que cuenta con
            especialidad en Cirugía Plástica Facial, es un médico que
            constantemente se actualiza con el fin de mejorar sus servicios a
            los pacientes.
          </h1>
          <div className="block mx-7 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-4">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Servicios del <strong>Otorrinolaringólogo en Monterrey</strong>
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <ul>
                <li>⦁ Consulta</li>
                <li>⦁ Radiofrecuencia de Cornetes</li>
                <li>⦁ Cirugía endoscópica para sinusitis</li>
                <li>⦁ Cirugía de Tabique nasal</li>
                <li>⦁ Endoscopia Nasal</li>
                <li>⦁ Otorrinolaringología Pediátrica</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-8 flex justify-evenly items-center bg-gray-900 p-5"
        id="contact"
      >
        <div className="flex">
          <p className="text-slate-200 mx-4 text-base flex-1">
            Agenda una consulta por WhatsApp al número
            <BsWhatsapp className="inline" /> 8115448285 <br />
            o mediante una llamada al <LuPhone className="inline" /> 8183475220.
            <br />
            También puedes contactarnos por correo electrónico: <br />
            <MdOutlineMailOutline className="inline" /> jorgetrega@gmail.com.
          </p>
          <p className="text-slate-200 mx-4 text-base flex-1">
            Visítanos para que seas atendido con la atención que te mereces en
            Centro de Especialidades Médicas, 1er piso consultorio 126, Jose
            Benitez No 2704, Colonia Obispado, Monterrey NL CP 64060.
          </p>
          <p className="text-slate-200 mx-4 text-base flex-1">
            Da clic en el botón de <BsWhatsapp className="inline cursor-pointer" /> WhatsApp para
            contactarnos para saber más sobre el <br />
            <strong>
              <u>otorrinolaringólogo en Monterrey.</u>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
