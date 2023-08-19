import { Router } from "express";
import { ArtistController } from "../controllers";

const router = Router();
const artistController = new ArtistController();

router.get("/:id", artistController.getArtistDetails);
router.get("/:id/albums", artistController.getAlbums);
router.get("/:id/top", artistController.getTopTracks);

export default router;
