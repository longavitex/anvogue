import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuTwo from '@/components/Header/Menu/MenuTwo'
import SliderThree from '@/components/Slider/SliderThree'
import BannerTop from '@/components/Home3/BannerTop'
import TrendingProduct from '@/components/Home3/TrendingProduct'
import productData from '@/data/Product.json'
import Collection from '@/components/Home2/Collection'
import Benefit from '@/components/Home1/Benefit'
import FlashSale from '@/components/Home3/FlashSale'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Home3/NewsInsight'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeThree() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuTwo />
                <BannerTop props="bg-black py-3" />
                <SliderThree />
            </div>
            <TrendingProduct data={productData} start={10} limit={18} />
            <Collection props="pt-20" />
            <FlashSale />
            <NewsInsight data={blogData} start={0} limit={3} />
            <Benefit props="mt-20 py-10 px-2.5 bg-surface rounded-3xl" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}
