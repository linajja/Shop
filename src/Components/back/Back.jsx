import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import axios from 'axios';
function Back() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3003/admin/products')
            .then((res) => setProducts(res.data));
    }, []);

    return (
        <BackContext.Provider value={{ products }}>
            <div className="container">
                <div className="row">
                    <NavBar></NavBar>
                    <div className="col-5">CREATE</div>
                    <ProductsList></ProductsList>
                </div>
            </div>
        </BackContext.Provider>
    );
}

export default Back;
