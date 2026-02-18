const Card =(props)=>{
    const {resName,rating,image,deliveryTime,cuisines}= props;
    // console.log(image);
    
    return(
        <div className="card">
                    <img
                        className="card-image"
                        src={image}
                        alt="card-image"
                    />
                    <h3>{resName}</h3>
                    <h4 className="rating">*{rating}</h4>
                    <h4>{deliveryTime}</h4>
                    <p>{cuisines}</p>
                </div>
    )
}

export default Card;