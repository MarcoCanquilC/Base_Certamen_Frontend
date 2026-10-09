import { Button, Chip, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";


const TropaTable = ({ guerreros, eliminarGuerrero }) => {

    return (

        <Table>

            <TableHead>
                {/* campos de tabla */}
                <TableRow>

                    <TableCell>Nombre del Guerrero</TableCell>
                    <TableCell>Tipo de Guerrero</TableCell>
                    <TableCell>Categoría / Rango</TableCell>
                    <TableCell>Nivel</TableCell>
                    <TableCell>Clasificacion</TableCell>
                    <TableCell>Acción</TableCell>

                </TableRow>

            </TableHead>


            <TableBody>

                {/* mapeo de guerreros para sacarles info */}
                {guerreros.map((guerrero, index) => (

                    <TableRow key={index}>

                        <TableCell>{guerrero.nombre}</TableCell>

                        <TableCell>{guerrero.tipo}</TableCell>

                        <TableCell>{guerrero.categoria}</TableCell>

                        <TableCell>{guerrero.nivel}</TableCell>

                        <TableCell>

                            <Chip
                                label={guerrero.tipo}
                                color={guerrero.tipo === "Orco" ? "success" : "error"}
                            />

                        </TableCell>

                        <TableCell>

                            {/* boton para eliminar*/}
                            <Button variant="contained" color="error" onClick={() => eliminarGuerrero(index)}>
                                Asesinado por la aparicion
                            </Button>

                        </TableCell>
                    </TableRow>

                ))}

            </TableBody>

        </Table>

    );

};


export default TropaTable;