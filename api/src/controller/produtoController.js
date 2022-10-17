import { Router } from "express";
import { listarProdutosInicio } from "../repository/produtoRepository.js";
const server = Router();

server.get('/produto', async (req, resp) =>{
    try{
        const {email, senha} = req.body;
        const resposta = await listarProdutosInicio()
        if(!resposta){
            throw new Error('CREDENCIAIS INVALIDADAS')
        }
        resp.send(resposta)
        
    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});

export default server;