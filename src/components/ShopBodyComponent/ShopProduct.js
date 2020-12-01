import React from 'react';
import ShopSideBar from "./ShopSideBar"
import SlideSaleOff from "./SlideSaleOff"
import axios from 'axios'
import {BASE_URL} from '../../consts';

import ShopItemFilter from "./ShopItemFilter"
import ShopProductItem from "./ShopProductItem"

class ShopProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: []};
    }
    componentDidMount(){
        axios.get(BASE_URL + '/foods').then((respone) => this.setData(respone)).catch(console.log)
    }

    setData(respone){
        console.log(respone)
        switch(respone.status){
            case 200:{
                this.setState({data:respone.data},console.log());
                break;
            }
            default:{
                break;
            }
        }
    }

    render() {
        return (
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <ShopSideBar></ShopSideBar>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div className="section-title product__discount__title">
                                <h2>Shop</h2>
                            </div>
                            <ShopItemFilter></ShopItemFilter>
                            <div className="row">
                                {this.state.data.map(()=>{
                                    return (<ShopProductItem></ShopProductItem>);
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopProduct;