import express, { Application, Request, Response } from "express";
import { ShopRepo } from "./routes";
// import { shopRouter } from "./routes";

const app: Application = express();
const shopRepo = new ShopRepo();

const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/shops", async (req: Request, res: Response): Promise<Response> => {
  if (req.query.minRating === undefined) {
    return res.status(200).json(shopRepo.GetAllShops());
  } else {
    return res
      .status(200)
      .json(shopRepo.GetShopsByMinRating(Number(req.query.minRating)));
  }
});

app.get(
  "/shops/:id",
  async (req: Request, res: Response): Promise<Response> => {
    if (shopRepo.GetShopById(Number(req.params.id)) === undefined) {
      return res.status(400).send(`error: Shop not found: ${req.params.id}`);
    } else {
      return res.status(200).json(shopRepo.GetShopById(Number(req.params.id)));
    }
  }
);
// app.use("/shops", shopRouter);

app.listen(port, (): void => {
  console.log(`Listening on port ${port}`);
});
