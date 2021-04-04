import React, { useState, useEffect, Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <Fragment>
        <h3 className="animate__heartBeat">{category}</h3>

        { loading && <p className="animate__animated animate__fadeIn">Loading...</p>}

        <div className="card-grid">
                { 
                    images.map( img => (
                        <GifGridItem 
                           key={img.id}
                           { ...img }
                        />
                    ))
                }
        </div>
        </Fragment>
    )
}
