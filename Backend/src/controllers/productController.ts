import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getProducts = async(
    req: Request,
    res:Response
): Promise<void>=>{
    try{
        //findMany para buscar 
        const search  = req.query.search?.toString();
        const products = await prisma.products.findMany({
            where: {
                name:{
                    contains:search
                },
            },
        });  
        res.json(products);
    }catch (error){
        res.status(500).json({massage:"Error en la solicitud de productos"})
    }
};

export const createProducts = async(
    req: Request,
    res:Response
): Promise<void>=>{
    try{
        const {productId, name , price, rating, stockQuantity, descriptions, colors, sizes} = req.body;
        const product = await prisma.products.create({
            data:{
            productId,
            name,
            price,
            rating,
            stockQuantity,
            descriptions,
            colors,
            sizes,
            },
        });
        res.status(201).json(product)
    }catch (error){
        res.status(500).json({message: "Error de Escritura"});
    }
};

