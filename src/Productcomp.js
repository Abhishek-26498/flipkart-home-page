import React from "react";
function Products(props){
return(
    <>
     <div className="product__1" >
                <img className="img__1"style={{cursor:"pointer"}} src={props.imgsrc} alt="" height="130px" width="160px" />
                <h3 className="product__name" style={{cursor:"pointer"}}>{props.productname}</h3>
                <span className="Offer" style={{cursor:"pointer"}}>{props.offer}</span><br/>
                <span className="offer1 " style={{cursor:"pointer"}}>{props.offer1}</span>
</div>
    </> 
)
}
export default Products;