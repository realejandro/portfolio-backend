

import { Router } from "express";
import { getMessagesCustomer, sendMessageCustomer } from "../controllers/customer-controller.js";
import { authenticateToken } from "../middleware/auth.js";

const router  = Router();

router.post('/', sendMessageCustomer);

router.get('/',  authenticateToken, getMessagesCustomer);

export { router as customerRouter };
