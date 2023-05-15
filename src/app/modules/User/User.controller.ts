import { NextFunction, Request, Response } from "express";
import { createUserDataToDB } from "./User.service";

export const createUserData = async (req: Request, res: Response, next: NextFunction) => {
    const userData = await createUserDataToDB();
    console.log(userData);

    res.status(200).json({
        status: "success",
        data: userData,
    })
}