const ProfileCard = ({profile}) => {
    
    return (
        <div className="ProfileCard">
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <p>Occupation {profile.occupation}</p>
        </div>
    )
}

export default ProfileCard;