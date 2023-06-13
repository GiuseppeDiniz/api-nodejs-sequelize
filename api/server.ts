import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.get("/", (req: Request, res: Response) =>
  res.status(200).send({ message: "Hello World!" })
);

app.listen(port, () => console.log(`Listening server on port: ${port}`));

export default app;
