import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';
 

const Home = () => {
    const newsTopic = useLoaderData();  
  
    return (
        <div>
            <h2>Home news {newsTopic.length}  </h2>

            {
                newsTopic.map(news => 
                <NewsSummaryCart
                    key={news._id}
                    news={news}
                ></NewsSummaryCart>
                )
            }
             
        </div>
    );
};

export default Home;