import { Request, Response, NextFunction } from 'express';

import CONFIG from '../../config';
import { UserRole } from '../../models/user/user-role';
import { CRUDController } from '../core/crud-controller';

/**
 * @author Marc Wafik
 */
export class UserRoleController extends CRUDController {
	static MODEL = UserRole;
}