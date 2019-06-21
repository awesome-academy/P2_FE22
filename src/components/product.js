import React, {Component} from 'react';
import SectionHeading from './ProductPage/section_heading';
import AsideList from './Aside/aside_list';
import ProductGrid from './ProductPage/product_grid';
export default class Product extends Component {
    render(){
        return(
            <section className ='section-gridproduct'>
                <SectionHeading />
                <div className="section__content">
                    <AsideList />
                    <ProductGrid />
                </div>
            </section>
        );
    }
}