import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './CollectionPreview.style.scss'
function CollectionPreview({key,title,items})
{
    return(<div className="collection-preview">
    <div className="title">{title.toUpperCase()}</div>
    <div className="preview">{items
    .filter((items,idx)=>idx<4)      
    .map(({id,...otherItemProps})=>
    (<CollectionItem key={id} {...otherItemProps}/>))}
    </div>

    </div>);
}
export default CollectionPreview;