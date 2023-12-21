import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsights from '../../News/EditorsInsights/EditorsInsights';
import LeftCart from '../LeftCard/LeftCard';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://the-news-dragon-server-eight-indol.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <h5 className='bg-body-secondary mt-4 mb-4 px-4 py-3'>National News</h5>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none fw-semibold text-body-secondary fs-4' >
                            {category.name}
                        </Link>
                    </p>)
                }
            </div>

            <LeftCart></LeftCart>
        </div>
    );
};

export default LeftNav;