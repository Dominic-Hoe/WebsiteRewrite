import { config } from "dotenv";
import prisma from "./db";
import listen from "./app";
config();

const verifyConnection = () =>
    new Promise<void>(async (resolve, reject) => {
        await prisma.user.findMany().catch(reject);
        resolve();
    });

verifyConnection().then(() => {
    console.log("Verified connection to database");
    listen(parseInt(process.env.PORT!)).then(() => {
        console.log(
            `Backend website is up, running at http://localhost:${process.env
                .PORT!}`
        );
    });
});
