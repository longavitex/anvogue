'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ProductType } from '@/type/ProductType'
import Rate from '../Other/Rate'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from 'swiper/core';

interface Props {
    data: Array<ProductType>;
}

const FeaturedProduct: React.FC<Props> = ({ data }) => {
    const [activeSize, setActiveSize] = useState<string | null>('0')

    const handleActiveSize = (item: string) => {
        setActiveSize(item)
    }

    // Truy cập thông tin của sản phẩm thứ 50 trong mảng data
    const productMain = data[50];
    const percentSale = Math.floor(100 - ((productMain.price / productMain.originPrice) * 100))

    return (
        <>
            <div className="featured-product cosmetic py-20 bg-surface">
                <div className="container flex lg:items-center justify-between gap-y-6 flex-wrap">
                    <div className="list-img md:w-1/2 md:pr-4 w-full">
                        <Image
                            src={productMain.images[1]}
                            width={1000}
                            height={1000}
                            alt='prd-img'
                            className='w-full lg:aspect-square object-cover rounded-[20px]'
                        />
                    </div>
                    <div className="product-infor md:w-1/2 w-full lg:pl-16 md:pl-6">
                        <div className="caption2 text-secondary font-semibold uppercase">{productMain.type}</div>
                        <div className="heading4 mt-1">{productMain.name}</div>
                        <div className="flex items-center mt-3">
                            <Rate currentRate={productMain.rate} size={14} />
                            <span className='caption1 text-secondary'>(1.234 reviews)</span>
                        </div>
                        <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                            <div className="product-price heading5">${productMain.price}.00</div>
                            <div className='w-px h-4 bg-line'></div>
                            <div className="product-origin-price font-normal text-secondary2"><del>${productMain.originPrice}.00</del></div>
                            {productMain.originPrice && (
                                <div className="product-sale caption2 font-semibold bg-green px-3 py-0.5 inline-block rounded-full">
                                    -{percentSale}%
                                </div>
                            )}
                            <div className='desc text-secondary mt-3'>{productMain.description}</div>
                        </div>
                        <div className="list-action mt-6">
                            <div className="choose-size">
                                <div className="heading flex items-center justify-between">
                                    <div className="text-title">Volume: <span className='text-title size'>{`${activeSize}ml`}</span></div>
                                    <div className="caption1 size-guide text-red underline">Size Guide</div>
                                </div>
                                <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                                    {productMain.sizes.map((item, index) => (
                                        <div
                                            className={`size-item w-[72px] h-12 flex items-center justify-center text-button rounded-lg bg-white border border-line ${activeSize === item ? 'active' : ''}`}
                                            key={index}
                                            onClick={() => handleActiveSize(item)}
                                        >
                                            {item}ml
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="choose-quantity flex items-center lg:justify-between gap-5 gap-y-3 mt-5">
                                <div className="quantity-block md:p-3 p-1 flex items-center justify-between rounded-lg border border-line w-[140px]">
                                    <Icon.Minus size={20} />
                                    <div className="body1 font-semibold">1</div>
                                    <Icon.Plus size={20} />
                                </div>
                                <div className="button-main w-full text-center bg-white text-black border border-black">Add To Cart</div>
                            </div>
                            <div className="button-block mt-5">
                                <div className="button-main w-full text-center">Buy It Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProduct