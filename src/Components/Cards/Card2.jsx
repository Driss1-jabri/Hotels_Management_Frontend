
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import Card1 from './Card1';


export default function ResponsiveDemo() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 4
        }
    ];

    
    
    useEffect(() => {
        setProducts([1,2,3,45,5,5,55,5,5,5,5,5,5,5,5,5,5,7])
    }, []);

    const productTemplate = (product) => {
        return (
            
                <Card1 className="me-2"></Card1>
            
        );
    };

    return (
        <div className="card  m-3 d-block border-0" style={{"margin":"0px",padding:"0px"}}>
            <Carousel className='' value={products} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        