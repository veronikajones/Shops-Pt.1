import { Router, Request, Response } from "express";
import { Shop } from "./shops";

class ShopRepo {
  private shops: Shop[] = [
    { id: 111, name: "Pepper's Pizza", rating: 4.5, isActive: true },
    { id: 222, name: "Clive's Chives", rating: 3.4, isActive: true },
    { id: 333, name: "Betty's Brews", rating: 4.3, isActive: true },
    { id: 444, name: "Sylvester's Shoes", rating: 3.8, isActive: true },
    { id: 555, name: "Teddy's Tunes", rating: 4.7, isActive: true },
  ];
  GetAllShops(): Shop[] {
    return this.shops;
  }

  GetShopById(id: number): Shop | undefined {
    return this.shops.find((x) => x.id === id);
  }

  GetShopsByMinRating(minRating: number) {
    return this.shops.filter((x) => x.rating >= minRating);
  }
}

export { ShopRepo };

// ShopRepo.get("/:id", async (req: Request, res: Response): Promise<Response> => {
//   let shopIWantToFind = shops.find((x) => x.id === Number(req.params.id));
//   if (shopIWantToFind === undefined) {
//     return res.status(404).send("ID not found");
//   } else {
//     return res.status(200).json(shopIWantToFind);
//   }
// });
