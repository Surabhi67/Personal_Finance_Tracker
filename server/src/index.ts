//pwd:  P0f6h4jaQTF1C6qu
import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"
import cors from "cors";


const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = "mongodb+srv://thiruvothsurabhi:P0f6h4jaQTF1C6qu@trackfin.xaqnd.mongodb.net/";

mongoose
.connect(mongoURI)
.then(() => console.log("CONNECTED TO MONGODB!"))
.catch((err) => console.log("FAILED TO CONNECT TO MONGODB: ", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});