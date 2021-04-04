import React from 'react';

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=J48fB1DB6JEKkay1CGzEb2WxhQwYP0Y2`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })


    return gifs;

    // console.log(gifs);
    // setImages(gifs);
}