import React from 'react'
import "./Card.css"
import Chip from '@mui/material/Chip';

/*
{
id: "7849cc7a-dec5-4d4f-92a9-d69e8c850773",
title: "Blind Bike",
description: "Nemo eligendi fugiat labore alias.
Ullam ratione commodi expedita praesentium.
Porro repudiandae ipsam.
Porro temporibus itaque harum est odit vero quia.",
follows: 2202,
image: "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
slug: "blind-bike",
*/

export default function Card({id, title, description, follow_count, image, slug, songs}) {
  return (
    <div className='card-wrapper'>
        <div className='album-image-and-chip'>
            {/* image and Follows chip */}
            <div className='album-image'>
                <img src={image} alt="Album img" loading='lazy'/>
            </div>
            <div className='album-follows'>
                <Chip label={follow_count} size='small'/>
            </div>
        </div>
        <div className='album-name'>
            {/* Album name */}
            <span>{title}</span>
        </div>
    </div>
  )
}
