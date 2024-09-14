import { Request, Response } from "express";

export const getTest = async (req: Request, res: Response) => {
  try {
    console.log(`env: ${process.env.NODE_ENV}`);

    const response = await fetch("http://localhost:3001/coba");
    const user = await response.json();
    console.log(user);
    res.json(user);
  } catch (error) {
    res.json({
      message: "Hello World",
    });
  }
};

