const express = require('express');
const router = express.Router();

const Carro = require('../controllers/carros');

const CarroController = new Carro();

router.get('/', async (req, res) => {
    try{
        const carros = await CarroController.allCarro();
        res.json(carros);
    } catch (err){
        res.send(err)
    };
});

router.get('/start', async (req, res) => {
    try{
        await CarroController.addCarro(req.body);
        const carros = await CarroController.allCarro();
        res.json(carros);
    } catch (err){
        res.send(err);
    }
});

module.exports = router;