import { Router } from "express";
import Cart from "../Cart.js";

const cart = new Cart();

const router = Router();

router.get('/', (req,res) => {
    const result = cart.getCarts();
    return res.json({ result })
})

router.get('/:cid', (req,res) => {
    const result = cart.getCartById(parseInt(req.params.cid));
    return res.json({ result })
})

router.post('/', (req,res) => {
    const result = cart.createCart();
    return res.json({ result })
})

router.post('/:cid/product/:pid', (req,res) => {
    const { cid, pid } = req.params;
    const result = cart.addProductToCart(parseInt(cid), parseInt(pid));
    return res.json ({ result })
})

export default router;