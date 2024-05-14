"use client"
import Item from "@/app/components/item/item";

import Slider from "react-slick"
import React from "react";

const SliderComponent =  ({items}) => {
    if (!Array.isArray(items) || items.length === 0) {
        return null;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
    <Slider {...settings}>
        {items.map(item => {
            <Item item={item} key={item.id}></Item>
        })}
    </Slider>
    )
}
export default SliderComponent