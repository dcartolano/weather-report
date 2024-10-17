import path from 'node:path';
import { fileURLToPath } from 'node:url';
// import { Router } from 'express';
import { Router, Request, Response } from 'express'; // from Roger, need to make sendFile work
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

// TODO: Define route to serve index.html
router.get('*', (_req: Request, res: Response) => { //roger changed '/' to '*' but idk why
    res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});
// app.get('/', (req: Request, res: Response) =>{ // roger's first guess, not right
//     res.sendFile(__dirname);
// })

export default router;
