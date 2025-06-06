const ContentModalVerDatosVacanteTit = ({idVacante,formVacante,closeModal,handleChangeFormVacante,estadoForm,datosVacante,submitGuardarFormVacante,inscriptoAsignado, userSG}) =>{

    //console.log('ingreso a ContentModalVerDatosVacanteTit');
    console.log('que tiene datosVacante: ', datosVacante);

    return(
        <div className="notranslate h-100 w-100  flex flex-col items-center">
            <label 
                className="text-xl text-center font-bold flex flex-row items-center" 
                translate='no'
            >Datos de la Vacante<p className="text-sm font-light ml-2">({idVacante})</p></label>
            <label className={`
                ${(inscriptoAsignado.id_inscripto_tit)
                    ?`text-red-500 font-bold`
                    :`text-green-500 font-bold`
                }
            `}>{
                (inscriptoAsignado.id_inscripto_tit)    
                ?`(OCUPADA)`
                :`(DISPONIBLE)`
                    }</label>
            <div>
                <div 
                    className={`min-h-[23vh]  mt-[4px] border-[2px]  rounded 
                        ${(inscriptoAsignado.id_inscripto_tit)
                            ?`bg-red-100 border-red-500`
                            :`bg-sky-100 border-sky-500`
                        }
                        `}
                >
                    <div className="flex flex-col ml-2 mt-[2px] items-end justify-end">
                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Orden:</label>
                            <input 
                                className="border-[1px] border-zinc-400 w-[60mm] text-start pl-2 bg-neutral-50"
                                value={datosVacante?.orden}
                                disabled={true}
                            />
                        </div>

                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">N° Est:</label>
                            <input 
                                name="nro_establecimiento"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={formVacante?.nro_establecimiento}
                                onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>

                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Nombre Est:</label>
                            <input 
                                name="nombre_establecimiento"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={formVacante?.nombre_establecimiento}
                                onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>

                    </div>
                    <div className="flex flex-col ml-2  items-end justify-end">
                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Cargo:</label>
                            <input 
                                name="cargo"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={formVacante?.cargo}
                                onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>
                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Modalidad:</label>
                            <input 
                                name="modalidad"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={formVacante?.modalidad}
                                onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>
                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Caracter:</label>
                            <input 
                                name="modalidad"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={datosVacante.caracter}
                                //onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>
                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Hasta:</label>
                            <textarea 
                                name="modalidad"
                                className="border-[1px] border-zinc-400 w-[60mm] h-[12mm] pl-[2px] text-start pl-2 bg-neutral-50 text-sm "
                                //value={datosVacante.hasta_observacion}
                                value={datosVacante.hasta ?datosVacante.hasta.replace(/\d{2}:\d{2}:\d{2}$/, "").trim() :""}
                                //value={datosVacante.hasta ? new Date(datosVacante.hasta).toLocaleDateString('es-ES') : ''}
                                //value={formVacante?.hasta ? (() => {
                                //    const fecha = new Date(formVacante?.hasta).toLocaleDateString('es-ES');
                                //    return fecha === '1/1/2000' ? '' : fecha;
                                //})() : ''}
                                //onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>
                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Turno:</label>
                            <input 
                                name="turno"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={formVacante?.turno}
                                onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>
                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Cupof:</label>
                            <input 
                                name="cupof"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={formVacante?.cupof}
                                onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>
                    </div>

                    <div className="flex flex-col ml-2 items-end justify-end">
                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Region:</label>
                            <input 
                                name="region"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={formVacante?.region}
                                onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>
                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Departamento:</label>
                            <input 
                                name="departamento"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={formVacante?.departamento}
                                onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>
                        <div className="flex flex-row my-[2px] mx-2 items-center">
                            <label className="text-sm mr-2">Localidad:</label>
                            <input 
                                name="localidad"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={formVacante?.localidad}
                                onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>
                        <div className="flex flex-row my-[2px] mx-2 items-center justify-end">
                            <label className="text-sm mr-2">Zona:</label>
                            <input 
                                name="zona"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2 bg-neutral-50"
                                value={formVacante?.zona}
                                onChange={handleChangeFormVacante}
                                //disabled={true}
                                //disabled={(datosVacante?.datetime_asignacion!=null)}
                                disabled={userSG.permiso==3 || userSG.permiso==4} //si el nivel es invitado =3 o =4 se deshabilita el input para modificar
                            />
                        </div>
                    </div>
                </div>

                {/* DATOS DE SU ASIGNACION */}
                {(inscriptoAsignado.id_inscripto_tit && userSG.permiso!=3) &&
                <div className="min-h-[10vh] mt-2 border-[1px] border-orange-500 rounded ">
                    <label 
                        className="ml-2 font-semibold"
                    >Asignado a:</label>
                    <div className="flex flex-col">
                        <div className="flex flex-row my-[2px] mx-2 items-center justify-end">
                            <label className="text-sm mr-2">Apellido</label>
                            <input 
                                name="apellido"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2"
                                value={inscriptoAsignado.apellido}
                                //onChange={handleChangeFormVacante}
                                //disabled={true}
                                disabled={userSG.permiso==3} //si el nivel es invitado =3 se deshabilita el input para modificar
                            />
                        </div>
                        <div className="flex flex-row my-[2px] mx-2 items-center justify-end">
                            <label className="text-sm mr-2">Nombre</label>
                            <input 
                                name="nombre"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2"
                                value={inscriptoAsignado.nombre}
                                //onChange={handleChangeFormVacante}
                                //disabled={true}
                                disabled={userSG.permiso==3} //si el nivel es invitado =3 se deshabilita el input para modificar
                            />
                        </div>
                        <div className="flex flex-row mt-[2px] mb-2 mx-2 items-center justify-end">
                            <label className="text-sm mr-2">DNI</label>
                            <input 
                                name="dni"
                                className="border-[1px] border-zinc-400 w-[60mm] pl-[2px] text-start pl-2"
                                value={inscriptoAsignado.dni}
                                //onChange={handleChangeFormVacante}
                                //disabled={true}
                                disabled={userSG.permiso==3} //si el nivel es invitado =3 se deshabilita el input para modificar
                            />
                        </div>
                    </div>
                </div>
                }                

                {/* VISIBILIDAD DE BOTONES */}
                <div className="flex justify-center">
                    {(estadoForm==='ver' || datosVacante?.datetime_asignacion!=null) &&
                        <button
                            className="border-2 border-[#7C8EA6] mt-2 font-semibold w-40 h-8 bg-[#7C8EA6] text-white shadow hover:bg-[#C9D991] hover:border-[#C9D991] rounded mx-2"
                            onClick={closeModal}
                            translate='no'
                        >CERRAR</button>
                    }
                    {(estadoForm==='editar' && datosVacante?.datetime_asignacion===null) &&
                        <div>
                            <button
                                className="border-2 border-[#7C8EA6] mt-2 font-semibold w-40 h-8 bg-[#7C8EA6] text-white shadow hover:bg-[#C9D991] hover:border-[#C9D991] rounded mx-2"
                                onClick={submitGuardarFormVacante}
                                translate='no'
                            >GUARDAR</button>
                            <button
                                className="border-2 border-[#7C8EA6] mt-2 font-semibold w-40 h-8 bg-[#7C8EA6] text-white shadow hover:bg-[#C9D991] hover:border-[#C9D991] rounded mx-2"
                                onClick={closeModal}
                                translate='no'
                            >CANCELAR</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default ContentModalVerDatosVacanteTit;