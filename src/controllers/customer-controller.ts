import { Request, Response } from 'express';
import { Customer } from '../models/customer.js';
// POST /customers
export const sendMessageCustomer = async (req: Request, res: Response) => {
  const { email, name, message } = req.body;
  try {
    const newMessage = await Customer.create({ email, name, message });
    res.status(201).json(newMessage);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getMessagesCustomer = async (req: Request, res: Response) => {
  try {
    const newMessage = await Customer.findAll({});
    res.status(201).json(newMessage);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};