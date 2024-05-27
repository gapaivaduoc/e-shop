/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import { truncate } from "fs";
import Image from "next/image";

interface ProductCartProps{
    data:any
}

const  ProductCart:React.FC<ProductCartProps> = ({data}) => {
    const productRating = data.reviews.reduce((acc:number, item:any)=> item.rating + acc, 0) / data.reviews.lenght

    return <div>
        <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200bg-slate-50 rounded-sm p-2 
        transition hover:scale-105 text-center
        text-sm">
            <div className="felx flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image src={data.images[0].image} alt={data.name} fill className="w-full h-full object-contain"/>
                </div>
                <div className="mt-4">
                    {truncateText(data.name)}
                </div>
                <div>
                    <Rating value={productRating} readOnly/>
                </div>
                <div>{data.reviews.lenght} reviews</div>
                <div className="font-semibold">{formatPrice(data.price)}</div>
            </div>
        </div>
    </div>;
};
 
export default ProductCart;