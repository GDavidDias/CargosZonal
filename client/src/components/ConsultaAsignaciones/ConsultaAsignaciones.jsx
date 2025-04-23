import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { FaRegUserCircle, FaPowerOff  } from "react-icons/fa";

const ConsultaAsignaciones = () => {

    //E.G que trae la configuracion de sistema
    const configSG = useSelector((state)=>state.config);
    const userSG = useSelector((state)=>state.user);

    const[selectFiltroEspecialidad, setSelectFiltroEspecialidad]=useState("");

    const[filtroEspecialidadVac, setFiltroEspecialidadVac]=useState("");

    const handleSelectFiltroEspecialidad=(event)=>{
        const{value} = event.target;
        //console.log('que tiene filtroEspecialidad: ', value);
        setSelectFiltroEspecialidad(value);
        setFiltroEspecialidadVac(value);
        //setCurrentPageVac(1);
        //al seleccionar una especialidad, regrso a la primer pagina, por si no hay tantos inscriptos
        //setCurrentPage(1);
        //getInscriptosTit(idListadoInscriptosTit,currentPage,estadoInscripto,inputSearch,value);
    };    


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
                    <div className="w-[50%]  flex justify-end">
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
                                <th className="border-r-[1px] border-zinc-300">Orden</th>
                                <th className="border-r-[1px] border-zinc-300">Puntaje</th>
                                {/* <th className="border-r-[1px] border-zinc-300">Apellido</th> */}
                                <th className="border-r-[1px] border-zinc-300">Nombre Docente</th>
                                <th className="border-r-[1px] border-zinc-300">DNI</th>
                                <th className="border-r-[1px] border-zinc-300">Espec.</th>
                                <th className="border-r-[1px] border-zinc-300">Obs</th>
                                <th className="border-r-[1px] border-zinc-300">Tiene Cargo</th>
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
                                                        onClick={()=>submitVerDatosInscripto(inscripto)}
                                                    />
                                                    {
                                                        ((inscripto.vacante_asignada===null || inscripto.vacante_asignada==='') && userSG.permiso!=4)
                                                        ?<BiTransferAlt 
                                                            className="text-2xl hover:cursor-pointer hover:text-[#83F272] ml-2"      
                                                            title="Vacantes"
                                                            onClick={()=>submitVerVacantes(inscripto)}
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