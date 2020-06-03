import React from 'react';
import axios from 'axios';
import Signup from './Signup';
export default class Shop extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            selectedCategoryID: null,
            products: []
        }
    }


    componentDidMount() {

        axios.get('https://5cdd0c20b22718001417c1ac.mockapi.io/ap1/v1/category')
            .then((response) => {
                // handle success
                this.setState({
                    categories: response.data,
                    selectedCategoryID: response.data[0].id
                })

            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    }


    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState, 'called');

        // category id changed
        if (prevState.selectedCategoryID !== this.state.selectedCategoryID) {
            //api call has to be done here.

            let url = `https://5cdd0c20b22718001417c1ac.mockapi.io/ap1/v1/category/${this.state.selectedCategoryID}/products`

            axios.get(url)
                .then((response) => {
                    // handle success
                    console.log(response, 'products data');
                    this.setState({
                        products: response.data
                    })

                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                })
                .then(() => {
                    // always executed
                });


        }


    }

    onChangeCategory = (event) => {
        this.setState({
            selectedCategoryID: event.target.value
        })
    }



    render() {
        console.log(this.state);
        return(
        <div>
        <label>Categories</label>
        <select onChange={this.onChangeCategory}>
            {
                this.state.categories.map((category) => (
                    <option value={category.id}>{category.name}</option>
                ))
            }
        </select>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                this.state.products.map((product) => (
                    <div class="card" style={{ width: '300px', height: '400px', margin: '20px' }}>
                        <img src={product.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{product.name}</h5>
                            <p class="card-text">{product.description}</p>
                            <a href="#" class="btn btn-secondary">{product.price}/- ₹</a>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                ))
            }
        </div>
    
            </div >
           
        );
    }
}

