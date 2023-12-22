"use client"

import MainLayout from "@/app/layouts/MainLayout";
import React from "react";

export default function Product({params}) {
    const product =
        {
            id: 1,
            title: "Brown Leather Bag",
            description: "Lorem Ipsum",
            url: "https://picsum.photos/id/7",
            price: 2500
        }

    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex px-4 py10">
                        {product?.url
                            ? <img className="w-[40%] rounded-lg" src={product?.url+'/280'} />
                            : <div className="w-[40%]"></div>
                        }
                        <div className="px-4 w-full">
                            <div className="front-bold text-xl">{product?.title}</div>
                            <div className="text-sm text-gray-700 pt-2">Brand New - Full Warranty</div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}