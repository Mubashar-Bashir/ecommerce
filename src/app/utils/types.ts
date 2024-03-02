import { StaticImageData } from "next/image"

export  type Product={
id:number
title:string
category:string
price:number
img:StaticImageData | string
type:string
is_promotion?:boolean
old_price?:number|0
new_price?:number|0
};