import React from "react"
import "./Shop.style.scss"
import Datal from "./ShopData"
import CollectionPreview from "../../component/CollectionPreview/CollectionPreview.component"
class Shop extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state={
            Collections:Datal
        }
    }
    render()
    {
        
        return(<div>
            {this.state.Collections.map(({id,...otherCollectionProps})=>(<CollectionPreview key={id} {...otherCollectionProps}/>))}
        </div>);
    }

}
export default Shop;