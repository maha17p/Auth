// import package
import express from "express";
import "dotenv"


// import files



// express invoke
const app = express();
const PORT_NUM = 5000;

// use


app.listen(PORT_NUM, () => console.log(`Server is listening to ${PORT_NUM}`));
