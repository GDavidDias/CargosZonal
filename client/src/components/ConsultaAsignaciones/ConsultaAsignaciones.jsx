import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { FaRegUserCircle, FaPowerOff  } from "react-icons/fa";
import Paginador from '../Paginador/Paginador';
import { fetchAllInstancias } from '../../utils/fetchAllInstancias';

import { FaDotCircle, FaSearch, FaEye, FaTimes, FaEdit} from "react-icons/fa";

const ConsultaAsignaciones = () => {

    //E.G que trae la configuracion de sistema
    const configSG = useSelector((state)=>state.config);
    const userSG = useSelector((state)=>state.user);

    //E.L. donde se almacena el Listado de Inscriptos (carga inicial)
    //y segun el tipo de listado segun configuracion
    const[listadoInscriptosTit, setListadoInscriptosTit]=useState([]);    

    //E.L. donde se almacena el listado de especialidades
    const[listadoEspecialidades, setListadoEspecialidades]=useState([]);

    //E.L. donde se almacena el listado de Instancias Realizadas
    const[listadoInstancias, setListadoInstancias]=useState([]);

    const[selectFiltroEspecialidad, setSelectFiltroEspecialidad]=useState("");

    const[selectFiltroInstancia, setSelectFiltroInstancia]=useState("");

    const[filtroEspecialidadVac, setFiltroEspecialidadVac]=useState("");

    //E.L. para input busqueda Inscriptos
    const[inputSearch, setInputSearch]=useState('');

    //EL guardo el id del listado de inscriptos de titularizacion
    const[idListadoInscriptosTit, setIdListadoInscriptosTit]=useState('');    

    //E.L. guardo el id del lsitado de vacantes de titularizacion
    const[idListadoVacantesTit, setIdListadoVacantesTit]=useState('');

    //E.L. guarda la pagina actual de listado Inscriptos
    const[currentPage, setCurrentPage]=useState(1);
    //E.L. para guardar datos de paginacion de listado Inscriptos
    const[paginacion, setPaginacion]=useState('');

//--------PROCEDIMIENTOS Y FUNCIONES -------------------

    //Proc que trae el ID del listado configurado
    const buscoIdlistadoInscrip = async(id_nivel) =>{
        //Filtro configuracion para el nivel
        const configFilterNivel = await configSG.config.filter((configNivel)=>configNivel.id_nivel==id_nivel);
        //console.log('que trae configFilterNivel: ', configFilterNivel);

        //Traigo el id_listado cargado en configuracion para:
        //LISTADO DE INSCRIPTOS DE TITULARIZACION -> id_listado_inscriptos_tit
        const idFilterListado = configFilterNivel[0]?.id_listado_inscriptos_tit;
        //console.log('que tiene idFilterListado: ',idFilterListado);

        //Guardo el id del listado de inscriptos
        setIdListadoInscriptosTit(idFilterListado);

        //LLAMO AL PROCEDIMIENTO PARA TRAER EL LISTADO
        //await getInscriptosTit(idFilterListado,currentPage,estadoInscripto,inputSearch,selectFiltroEspecialidad);
        
    };    

    //Proc: traigo el ID del listado de Vacantes configurado
    const buscoIDListadoVacantes = async(id_nivel) =>{
        //Filtro configuracion para el nivel
        const configFilterNivel = await configSG.config.filter((configNivel)=>configNivel.id_nivel==id_nivel);
        //console.log('que trae configFilterNivel: ', configFilterNivel);

        //Traigo el id del listado cargado en configuracion para:
        //LISTADO DE VACANTES DE TITULARIZACION -> id_listado_vacantes_tit
        const idFilterListado = configFilterNivel[0]?.id_listado_vacantes_tit;
        //console.log('que tiene idFilterListado: ',idFilterListado);

        //Guardo id_listado_vacantes_tit para usarlo despues
        setIdListadoVacantesTit(idFilterListado);

        //LLAMO AL PROCEDIMIENTO PARA TRAER EL LISTADO DE VACANTES DISPONIBLES
        //await getVacantesDisponiblesTit(idFilterListado, currentPageVac,'disponibles',filtroEspecialidadVac,inputSearchVac)
    };

    const handleSelectFiltroInstancia=(event)=>{
        const{value} = event.target;
        console.log('que tiene filtroInstancia: ', value);
        setSelectFiltroInstancia(value);
        //setFiltroEspecialidadVac(value);
        //setCurrentPageVac(1);
        //al seleccionar una especialidad, regrso a la primer pagina, por si no hay tantos inscriptos
        //setCurrentPage(1);
        //getInscriptosTit(idListadoInscriptosTit,currentPage,estadoInscripto,inputSearch,value);
    };    


    //-----------PROCESOS DE BUSQUEDA EN LISTADO INSCRIPTOS------------
    //Escribir dentro del input de busqueda
    const handleInputSearchChange = (event) =>{
        const {value} = event.target;
        setInputSearch(value);
    };

    //Presiono boton Cancelar (X) dentro de input busqueda
    const handleCancelSearch=async()=>{
        setInputSearch('')
        //setCurrentPage(1);
    };

    //--------------------
    const handlePageChange = (nuevaPagina)=>{
        if(nuevaPagina>0 && nuevaPagina<=paginacion?.totalPages){
            setCurrentPage(nuevaPagina);
        };
    };

    const handleCancelFiltroInstancia =()=>{
        setSelectFiltroInstancia("");
        //setCurrentPage(1);
    };

    const cargaInstancias =async()=>{
        const data = await fetchAllInstancias();
        console.log('que tiene instancias: ', data);
        if(data?.length!=0){
            setListadoInstancias(data);
        }
    };

    //Estado cuando cambia listadoInstancias
    useEffect(()=>{
        console.log('que tiene listadoInstancias: ', listadoInstancias);
    },[listadoInstancias])

    useEffect(()=>{
        console.log('que tiene inputSearch: ',inputSearch);
    },[inputSearch])


    //AL INGRESAR SE CARGA EL LISTADO DE INSCRIPTOS
    useEffect(()=>{
        //?PROCESO SE EJECUTA EN CARGA INICIAL
        //LLAMO AL PROCEDIMIENTO buscoIdlistadoInscrip Y PASO EL NIVEL CARGADO EN STORE GLOBAL
        buscoIdlistadoInscrip(configSG.nivel.id_nivel);

        //Cargo las instancias
        cargaInstancias();

        //LLAMO AL PROCEDIMIENTO buscoIDListadoVacantes Y PASO EL NIVEL CARGADO EN STORE GLOBAL
        buscoIDListadoVacantes(configSG.nivel.id_nivel);


    },[]);


  return (
    <div className="notranslate h-full w-full">
        {/* ENCABEZADO PAGINA */}
        <div className="bg-[#C9D991] h-[12vh] flex flex-row">
            {/* TITULOS - NIVEL */}
            <div className="w-[45vw] flex justify-center items-start flex-col">
                <label className="ml-4 text-base font-semibold">NIVEL {configSG.nivel.descripcion}</label>
                <div className="flex flex-row">
                    <label className="ml-4 text-lg font-sans font-bold">CONSULTA DE DESIGNACIONES REALIZADAS</label>
                </div>
                {/**SELECCION FILTRO ESPECIALIDAD */}
                <div className="ml-4 flex flex-row">
                    <label className="mr-2 ">Instancia: </label>
                    <select
                        className=" border-[1px] rounded border-gray-500"
                        name="filtroEspecialidad"
                        onChange={handleSelectFiltroInstancia}
                        value={selectFiltroInstancia}
                    >
                        <option value='' selected disabled>Seleccione...</option>
                        {
                            listadoInstancias?.map((instancia, index)=>(
                                <option key={index} value={instancia.id_instancia}>{instancia.id_instancia} - {instancia.descripcion}</option>
                            ))
                        }
                    </select>
                    {(selectFiltroInstancia!="") &&
                        <label 
                            className="font-bold mx-2 cursor-pointer"
                            onClick={handleCancelFiltroInstancia}
                        >X</label>
                    }
                </div>
            </div>
            {/* SECCION DATOS USUARIO */}
            <div className=" w-[40vw] flex items-center justify-end">
                <label className="mr-2 italic text-sm">{userSG.nombre}</label>
                <FaRegUserCircle className="mr-2 text-2xl text-[#73685F] " />
                <FaPowerOff 
                    className="mr-4 text-2xl text-[#73685F] hover:cursor-pointer hover:text-[#7C8EA6] transition-transform duration-500 transform hover:scale-125"
                    title="Salir"
                    onClick={()=>logOut()}
                />
            </div>
        </div>
        {/* CONTENIDO DE PAGINA */}
        <div className="h-[87vh]">
            <div className="m-2 border-[1px] border-[#758C51] rounded h-[72vh]">
                {/* PARTE SUPERIOR DE TABLA */}
                <div className="border-b-[1px] border-slate-300 h-[6vh] flex flex-row items-center">                    

                    {/* Campo de Busqueda */}
                    <div className="ml-2 w-[50%]  flex justify-start  ">
                        <div className="border-[1px] border-zinc-400 w-[20vw] rounded flex flex-row items-center justify-between mr-2">
                            <input 
                                className="w-[15vw] focus:outline-none rounded"
                                placeholder="Buscar..."
                                type="text"
                                value={inputSearch}
                                onChange={handleInputSearchChange}
                            />
                            <div className="flex flex-row items-center">
                                {(inputSearch!='') &&
                                    <FaTimes
                                        className="text-slate-400 cursor-pointer text-lg"
                                        onClick={()=>handleCancelSearch()}
                                    />
                                }
                                {/* <FaSearch 
                                    className="text-zinc-500 cursor-pointer mr-2"
                                    onClick={()=>submitSearch()}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* PARTE INFERIOR DE DATOS DE TABLA */}
                <div className="h-[79vh] overflow-y-auto">
                    <table className="border-[1px] bg-slate-50 w-full">
                        <thead>
                            <tr className="sticky top-0 text-sm border-b-[1px] border-zinc-300 bg-zinc-200">
                                <th className="border-r-[1px] border-zinc-300">DNI</th>
                                <th className="border-r-[1px] border-zinc-300">Nombre Docente</th>
                                {/* <th className="border-r-[1px] border-zinc-300">Apellido</th> */}
                                <th className="border-r-[1px] border-zinc-300">Cargo Toma</th>
                                <th className="border-r-[1px] border-zinc-300">Turno</th>
                                <th className="border-r-[1px] border-zinc-300">N Escuela</th>
                                <th className="border-r-[1px] border-zinc-300">Desde</th>
                                <th className="border-r-[1px] border-zinc-300">Hasta</th>
                                <th className="border-r-[1px] border-zinc-300">Estado</th>
                                <th className="">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // filterListadoInscriptosMov?.map((inscripto, index)=>{
                                listadoInscriptosTit?.map((inscripto, index)=>{
                                    const colorFila = inscripto.vacante_asignada ?`bg-red-200` :( inscripto.tomo_cargo!="" ?`bg-blue-300` :((inscripto.id_inscriptos_tit % 2)===0) ?`bg-zinc-200` :``)
                                    return(
                                        <tr 
                                            className={`text-lg font-medium border-b-[1px] border-zinc-300 h-[5vh] hover:bg-orange-300 ${colorFila}`}
                                            key={index}
                                        >
                                            <td className="text-center">{inscripto.orden}</td>
                                            <td className="text-center">{inscripto.total}</td>
                                            {/* <td>{inscripto.apellido}</td> */}
                                            <td>{inscripto.apellido} {inscripto.nombre}</td>
                                            <td>{inscripto.dni}</td>
                                            <td className="font-sans font-light text-center">{inscripto.abreviatura_especialidad}</td>
                                            {/*<td className="text-sm font-sans font-light text-center text-blue-800 ">{inscripto.tomo_cargo}</td>*/}
                                            <td className="text-sm font-sans font-light text-center text-blue-800 ">{inscripto.observaciones}</td>
                                            <td>{inscripto.tomo_cargo}</td>
                                            <td>{inscripto.descripcion_estado_inscripto}</td>
                                            <td>
                                                <div className="flex flex-row items-center justify-center  ">
                                                    {/* {(inscripto.vacante_asignada===null )
                                                        ?<FiAlertTriangle    
                                                            className="mr-2 blink text-red-500"
                                                            />
                                                        :``
                                                    } */}
                                                    <FaEye 
                                                        className="hover:cursor-pointer hover:text-[#83F272]" 
                                                        title="Ver Datos"
                                                        //onClick={()=>submitVerDatosInscripto(inscripto)}
                                                    />
                                                    {
                                                        ((inscripto.vacante_asignada===null || inscripto.vacante_asignada==='') && userSG.permiso!=4)
                                                        ?<BiTransferAlt 
                                                            className="text-2xl hover:cursor-pointer hover:text-[#83F272] ml-2"      
                                                            title="Vacantes"
                                                            //onClick={()=>submitVerVacantes(inscripto)}
                                                        />
                                                        :``
                                                    }
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* SECCION PAGINACION */}
            <div className="flex justify-center">
                <Paginador 
                    currentpage={paginacion.page}
                    totalpage={paginacion.totalPages}
                    onPageChange={handlePageChange}
                    totalItems={paginacion.totalItems}
                />
            </div>

        </div>
        
    </div>
  )
}

export default ConsultaAsignaciones