import express from "express";
import cors from "cors";
import router from './route/photos.js';
import { rateLimit } from "express-rate-limit";

const app = express();
const PORT = process.env.PORT ?? 5000;
const limiter =rateLimit({
  windowMs: 20 * 60 * 1000,
  max: 20,
});

app.use(limiter);
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

export default app;
