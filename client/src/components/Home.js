import React from 'react';
import {Link} from 'react-router-dom';
const Home = (props) => {
	return (
		
			<>
            <h1>Hello Home!!</h1>
            <a href="/reactProxy">GO ReactProxy</a> <br></br>
            <Link to={'/reactProxy'}>GO ReactProxy</Link>
            </>
		
	);
};

export default Home;