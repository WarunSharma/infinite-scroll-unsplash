import { Request, Response, Router } from "express";
import { unsplash } from "../api/unsplashApi.js";

const router = Router();

router.get("/api/photos", async (req: Request, res: Response) => {
  try {
    const page: number = Number(req.query.page) || 1;
    const perPage: number = Number(req.query.perPage) || 10;

    if (page < 0 || perPage < 0)
        return res.status(400).json({error: 'Invalid query parameters'});

    const result = await unsplash.photos.list({ page, perPage });

    if (result.errors) {
      console.error("Unsplash API error: ", result.errors);
      return res
        .status(500)
        .json({ error: "Error while fetching from Unsplash API" });
    }

    res.json(result.response?.results);
  } catch (error) {
    console.error(
      "Unexpected error:",
      error instanceof Error ? error.stack : error
    );
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;