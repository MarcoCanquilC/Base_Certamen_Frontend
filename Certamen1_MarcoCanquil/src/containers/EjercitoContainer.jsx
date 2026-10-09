import { useState } from "react";

import GuerreroForm from "../components/GuerreroForm";
import TropaTable from "../components/TropaTable";


const EjercitoContainer = () => {

    const [guerreros, setGuerreros] = useState([]);

    // funcion para agregar
    const agregarGuerrero = (nuevoGuerrero) => {

        setGuerreros([...guerreros, nuevoGuerrero]);

    };

    // funcion parea elminar
    const eliminarGuerrero = (indexEliminar) => {

        const nuevaLista = guerreros.filter((guerrero, index) => index !== indexEliminar);
        setGuerreros(nuevaLista);

    };


    return (

        <div className="container">

            <div className="row">

                <div className="col-12">

                    <GuerreroForm agregarGuerrero={agregarGuerrero} />

                </div>
            </div>

            <br />

            <div className="row">

                <div className="col-12">

                    <TropaTable guerreros={guerreros} eliminarGuerrero={eliminarGuerrero} />
                </div>

            </div>

        </div>

    );

};


export default EjercitoContainer;