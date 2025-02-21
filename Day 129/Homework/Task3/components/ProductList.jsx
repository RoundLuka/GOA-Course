import ProfileCard from "./ProductCard"

const ProfileList = ( {products} ) => {
    return (
        <>
            {products.map((product, index) => (
                <ProfileCard key={index} product={product} />
            ))}
        </>
    )
}

export default ProfileList