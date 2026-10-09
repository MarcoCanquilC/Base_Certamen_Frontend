import { useState } from "react";
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Rating, Select, Slider, TextField } from "@mui/material";


const GuerreroForm = ({ agregarGuerrero }) => {

    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [nivel, setNivel] = useState(1);
    const [categoria, setCategoria] = useState("");
    const [amenaza, setAmenaza] = useState(1);


    const registrarGuerrero = () => {

    
        const nuevoGuerrero = {
            nombre,
            tipo,
            nivel,
            categoria,
            amenaza
        };

        {/* uso la funcion del container */}

        agregarGuerrero(nuevoGuerrero);

        setNombre("");
        setTipo("");
        setNivel(1);
        setCategoria("");
        setAmenaza(1);

    };


    return (

        <Card>

            <CardContent>

                {/* nombre del gueerro */}

                <h2>Ingresar Guerrero</h2>

                <TextField label="Nombre de Guerrero" value={nombre} onChange={(event) => setNombre(event.target.value)} fullWidth />
                <br />
                <br />

                {/* tipo de guerrero */} 

                <FormControl>

                    <FormLabel>Tipo de Guerrrero</FormLabel>

                    <RadioGroup value={tipo} onChange={(event) => setTipo(event.target.value)}>

                        <FormControlLabel value="Orco" control={<Radio />} label="Orco" />

                        <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />

                    </RadioGroup>

                </FormControl>

                <br />
                <br />

                {/* nivel de combate */}

                <p>Nivel de combate: {nivel}</p>

                <Slider value={nivel} onChange={(event, nuevoValor) => setNivel(nuevoValor)} min={1} max={100} step={1} sx={{ color: "black" }} />

                <br />
                <br />


                <FormControl fullWidth>


                {/* rango de guerrero*/}

                    <FormLabel>Categoría / rango</FormLabel>

                    <Select value={categoria} onChange={(event) => setCategoria(event.target.value)}>

                        <MenuItem value="Capitán">Capitan</MenuItem>
                        <MenuItem value="Berserker">Berserker</MenuItem>
                        <MenuItem value="Explorador">Explorador</MenuItem>
                        <MenuItem value="Asediador">Asediador</MenuItem>

                    </Select>

                </FormControl>


                <br />
                <br />

                {/* nivel de amaneza */}

                <p>Nivel de amenaza</p>

                <Rating value={amenaza} onChange={(event, nuevoValor) => setAmenaza(nuevoValor)} />


                <br />
                <br />

                {/* boton para registrar*/}
                <Button variant="contained" sx={{ backgroundColor: "black" }} onClick={registrarGuerrero}>
                    Registrar Guerrero
                </Button>

            </CardContent>

        </Card>

    );

};


export default GuerreroForm;