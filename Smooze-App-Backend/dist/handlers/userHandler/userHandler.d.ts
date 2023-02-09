import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
export declare const Register: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const signin: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const update: (req: JwtPayload, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const verifyUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const requestPassword: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const changepassword: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getUser: (req: JwtPayload, res: Response, next: NextFunction) => Promise<void>;
