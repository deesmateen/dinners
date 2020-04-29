import React from 'react';
import {imagesArray} from './images/images';

export const Gallery = () => {

    const randomize = (array1: any) => {
      let ctr = array1.length;
      let temp;
      let index;

      while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = array1[ctr];
          array1[ctr] = array1[index];
          array1[index] = temp;
      }
      return array1;
    };

  return (
      <div>
          <p>Dinner options</p>
          <div style={{display: "flex", flexWrap: "wrap", order: 4, maxWidth: "1600px"}}>
              {randomize(imagesArray.map((images, index) => {
                  return (
                      <div style={{display: "flex", flexDirection: "column"}}>
                          <p>{images.name}</p>
                          <img key={index} style={{padding: "0 20px 20px",objectFit: "cover", height: "300px", width: "300px"}} src={images.src} alt={images.name}/>
                      </div>
                    )
                  }
              ))}
          </div>
      </div>
  )
};