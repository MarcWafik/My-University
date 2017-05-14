import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import CONFIG from '../../config';
import { User } from '../../models/user/user';
import { UserRole } from '../../models/user/user-role';
import { CRUDController } from '../core/crud-controller';
import { DBcrud } from '../../models/core/db';
import { HTTPClientErr } from '../core/http-stats';

/**
 * @author Abdelrahman Abdelhamed
 */
export class UserController extends CRUDController {

	static MODEL = User;

	private static _GenerateToken(user): string {
		return jwt.sign(user, CONFIG.AUTH.SECRET, { expiresIn: 10080 });
	}

	public static async Register(req: Request, res: Response, next: NextFunction) {
		let user = <User>(await this.MODEL.ParceData([req.body]))[0];

		let errors = await user.getErrors(DBcrud.CREATE);

		if (errors.length < 0) {
			user.create();
			delete user.password;
			res.status(201).json({
				token: 'Bearer ' + UserController._GenerateToken(user),
				user: user
			});
		} else {
			res.json({
				error: {
					code: HTTPClientErr.UnprocessableEntity,
					message: "didn't pass the validation"
				},
				notValid: errors
			});
		}
		next();
	}

	public static async Login(req: Request, res: Response, next: NextFunction) {
		delete req.user.password;

		res.status(200).json({
			token: 'Bearer ' + UserController._GenerateToken(req.user),
			user: req.user
		});
		next();
	}

	public static async Logout(req: Request, res: Response, next: NextFunction) {
		next();
	}

}
