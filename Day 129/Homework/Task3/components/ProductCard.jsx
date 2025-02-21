const ProfileCard = ({product}) => {
    
    return (
        <div className="ProductCard">
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Description {product.description}</p>
        </div>
    )
}

export default ProfileCard;