import fetch from "node-fetch";
import dotenv from "dotenv";
import { createApi } from "unsplash-js";

dotenv.config();
(global as any).fetch = fetch;

const accessKey = process.env.APPLICATION_ID;
if (!accessKey) {
  console.error(
    "Error: unsplash access key is not available in environment variables"
  );
  process.exit(1);
}
export const unsplash = createApi({
  accessKey,
  fetch: global.fetch,
});