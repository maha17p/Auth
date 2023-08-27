import express from "express";

const app = express();
const PORT_NUM = 5000;

app.listen(PORT_NUM, () => console.log(`Server is listening to ${PORT_NUM}`));
