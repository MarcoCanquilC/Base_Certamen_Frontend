import { AppBar, Toolbar, Typography } from "@mui/material";

import EjercitoContainer from "./containers/EjercitoContainer";


function App() {

    return (

        <div>

            <AppBar position="static" sx={{ backgroundColor: "black" }}>

                <Toolbar>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Anillo Unico
                    </Typography>

                    <Typography>
                        Uno para dominarlos a todos
                    </Typography>

                </Toolbar>

            </AppBar>
            <br />
            <br />

            <EjercitoContainer />

        </div>

    );

}


export default App;