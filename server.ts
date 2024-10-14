import express, { Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

// FIXME Localhost path
app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));

app.get('/express_backend', (_: unknown, res: Response) => {
  res.send({ express: 'Your express backend is connected to react' });
});
