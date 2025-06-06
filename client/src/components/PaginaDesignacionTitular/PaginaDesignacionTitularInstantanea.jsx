import logo from '../../assets/logo_designacion.png';
import firma from '../../assets/firmas.png';
import { useEffect, useState } from 'react';

const PaginaDesignacionTitularInstantanea = ({datosInscripto, datosVacante,id_nivel}) =>{
//console.log('que tiene id_nivel en PaginaDesignacion: ', id_nivel);
    console.log('que ingresa por datosInscripto: ', datosInscripto);
    console.log('que ingresa por datosVacante: ', datosVacante);

    let fecha = '';
    let horaCompleta = '';
    //---- CONVIERTE DATETIME EN FECHA Y HORA

        const datetimeString = datosVacante.datetime_asignacion?.replace('Z', '');
    
        //[fecha, horaCompleta] = datetimeString.split('T');

        if (datetimeString) {
            [fecha, horaCompleta] = datetimeString.split('T');
          }

        // Ahora separás la fecha
        const [varAño, varMes, varDia] = fecha.split('-');
    
        const meses = [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
          ];
          
        const nombreMes = meses[parseInt(varMes, 10) - 1];
    
    
    
        // Eliminar los milisegundos (.000) si están presentes
        const horaSinMilisegundos = horaCompleta.split('.')[0];
    
        // Separar la hora en sus componentes
        let [horas, minutos, segundos] = horaSinMilisegundos.split(':');
    
        // Asegurar que cada componente tenga dos dígitos
        horas = horas?.padStart(2, '0');
        minutos = minutos?.padStart(2, '0');
        segundos = segundos?.padStart(2, '0');

    //---------------------------

    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.toLocaleString('es-ES',{month:'long'});
    const año = fechaActual.getFullYear();

    const horaActual = new Date().toLocaleString('es-ES',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    });

    // function leyendaMovimiento(tipoMovimiento){
    //     let datamov='';
    //     if(tipoMovimiento===1){
    //         datamov='Disponibilidad';
    //     }else if(tipoMovimiento===2){
    //         datamov='Traslado';
    //     }else if(tipoMovimiento===3){
    //         datamov='Cambio de Funcion'
    //     }

    //     return datamov;
    // };


    return(
        <div className='notranslate border-2 border-zinc-300 p-4'>
            {/* ENCABEZADO */}
            <div className="w-full flex flex-col items-center justify-between">
                <div className='w-full flex flex-row'>
                    <div className="w-[25%] flex">
                        <img src={logo} className='w-[60%]'/>
                    </div>
                    <div className="w-[50%] flex flex-col items-center">
                        <p className='text-sm font-semibold'>MINISTERIO DE EDUCACION</p>
                        <p className='text-sm font-semibold'>Sala {id_nivel===1 ?'Inicial' :'Primaria'} de JPCD</p>
                    </div>
                    <div className="w-[25%] flex flex-col items-center ">
                        <p className='text-sm font-semibold'>Av. España N° 1630</p>
                        <p className='text-sm font-semibold'>San Salvador de Jujuy</p>
                    </div>
                </div>
                <div className='w-full flex'>
                    <p className='border-b-[1px] border-gray-400 w-[790px] text-center text-xs italic mt-2'>"2025 - Año del Décimo Aniversario del reconocimiento de la Bandera Nacional de la Libertad Civil como Símbolo Patrio Histórico"</p>
                </div>
                
            </div>
            {/* TITULO */}
            <div className='flex justify-center'>
                <label
                    className='font-bold text-lg my-2 '
                >CONSTANCIA DE DESIGNACION</label>
            </div>
            {/* CUERPO */}
            <div>
                <div className='flex flex-col items-start'>
                    {/* <p className='text-justify indent-8'>JPCD - Sala Primaria hace constar que el/la Prof.  DNI N°   con el cargo         de la    con un puntaje     , Acepta el        en el cargo de     Titular en     . correspondiente al turno      </p> */}
                    <div className='flex flex-row mb-[4px]'>
                        <p>RESOLUCION N°:</p>   
                        <p className='border-b-[1px] border-black w-[300px] text-center'>{datosVacante.resolucion}</p>
                    </div>
                    {/**
                     * 
                    <div className='flex flex-row'>
                        <p>FECHA: {varDia} de {nombreMes} de {varAño}</p>
                        <p className='ml-4'>{`Hora: ${horas}:${minutos}:${segundos}`}</p>
                    </div>
                     */}
                     <div className='flex flex-row'>
                         <p>FECHA: {dia} de {mes} de {año}</p>
                         <p className='ml-4'>HORA: {horaActual}</p>
                     </div>


                    <p className='font-bold mt-[4px]'>DATOS DEL DOCENTE</p>
                    <div className='flex flex-row'>
                        <p>Orden: </p>
                        <p className='border-b-[1px] border-black w-[100px] text-center'>{datosInscripto.orden}</p>
                        <p className='ml-8'>PUNTAJE:</p>
                        <p className='border-b-[1px] border-black w-[100px] text-center'>{datosInscripto.total}</p>
                        <p className='ml-8'>DNI N°:</p>
                        <p className='border-b-[1px] border-black w-[100px] text-center mr-4'>{datosInscripto.dni}</p>
                    </div>
                    <div className='flex flex-row mt-[2px]'>
                        <p>APELLIDO Y NOMBRE:</p>
                        <p className='border-b-[1px] border-black w-[540px] text-center'>{datosInscripto.apellido} {datosInscripto.nombre}</p> 
                        {/**<p>NOMBRES:</p> 
                        <p className='border-b-[1px] border-black w-[300px] text-center'>{datosInscripto.nombre} </p>*/}
                    </div>
                    <div className='flex flex-row mt-[2px]'>
                        {/*<p>DNI N°:</p>
                        <p className='border-b-[1px] border-black w-[100px] text-center mr-4'>{datosInscripto.dni}</p>
                         <p>CARGO DE ORIGEN:</p>
                        <p className='border-b-[1px] border-black w-[100px] text-center'>{datosInscripto.cargo_actual} </p> */}
                    </div>
                    {/* <div className='flex flex-row mt-[2px]'>
                        <p>INSTITUCION DE ORIGEN:</p>
                        <p className='border-b-[1px] border-black w-[300px] text-center'>{datosInscripto.nro_escuela}</p>
                    </div> */}
                    <p className='font-bold mt-[4px]'>DATOS DEL CARGO</p>
                    <div className='flex flex-row'>
                        <p>N° CARGO: </p>
                        <p className='border-b-[1px] border-black w-[100px] text-center'>{datosVacante.orden}</p>
                        <p>MOVIMIENTO:</p>
                        <p className='border-b-[1px] border-black w-[130px] text-center'>{datosVacante.caracter}</p>
                        <p>CUPOF:</p>
                        <p className='border-b-[1px] border-black w-[50px] text-center'>{datosVacante.cupof}</p>
                    </div>
                    <div className='flex flex-row mt-[2px]'>
                    </div>
                    <div className='flex flex-row mt-[2px]'>
                        <p>INSTITUCION:</p>
                        <p className='border-b-[1px] border-black w-[420px] text-center'>{datosVacante.nombre_establecimiento}</p>
                        <p>REGION:</p>
                        <p className='border-b-[1px] border-black w-[50px] text-center'>{datosVacante.region}</p>
                    </div>
                    <div className='flex flex-row mt-[2px]'>
                        <p>CARGO:</p>
                        <p className='border-b-[1px] border-black w-[200px] text-center'>{datosVacante.cargo}</p>
                        <p>TURNO:</p>
                        <p className='border-b-[1px] border-black w-[100px] text-center'>{datosVacante.turno}</p>
                        <p>MODALIDAD:</p>
                        <p className='border-b-[1px] border-black w-[100px] text-center'>{datosVacante.modalidad}</p>
                    </div>
                    <div className='flex flex-row mt-[2px]'>
                        <p>DESDE:</p>
                        {/*<p className='border-b-[1px] border-black w-[100px] text-center'>{datosVacante.desde ? new Date(datosVacante.desde).toLocaleDateString('es-ES') : ''}</p>*/}
                        {/*<p className='border-b-[1px] border-black w-[200px] text-center text-sm'>{datosVacante.desde_observacion}</p>*/}
                        <p className='border-b-[1px] border-black w-[200px] text-center text-sm'>{datosVacante.desde ?datosVacante.desde.replace(/\d{2}:\d{2}:\d{2}$/, "").trim() :""}</p>
                        <p>HASTA:</p>
                        {/*<p className='border-b-[1px] border-black w-[100px] text-center'>{datosVacante.hasta ? (() => {
                                const fecha = new Date(datosVacante.hasta).toLocaleDateString('es-ES');
                                return fecha === '1/1/2000' ? '' : fecha;
                            })() : ''}
                        </p>*/}
                        {/*<p className='border-b-[1px] border-black w-[350px] text-center text-sm '>{datosVacante.hasta_observacion}</p>*/}
                        <p className='border-b-[1px] border-black w-[200px] text-center text-sm '>{datosVacante.hasta ?datosVacante.hasta.replace(/\d{2}:\d{2}:\d{2}$/, "").trim() :""}</p>

                    </div>
                    
                     <div className="w-[100%] flex ml-20  align-center">
                         <img src={""} className='w-[80%]'/>
                     </div>
                </div>
            </div>
            {/* PIE IMPRESION */}
            
            <div className='flex flex-row h-[12vh] justify-center items-end '>
                {/*<p className='text-base font-semibold w-[200px] border-t-[1px] border-gray-600 text-center'>Firma y Sello</p>*/}
            </div>
            
        </div>
    )
};

export default PaginaDesignacionTitularInstantanea;