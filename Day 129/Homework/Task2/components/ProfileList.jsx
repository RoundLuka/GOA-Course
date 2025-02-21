import ProfileCard from "./ProfileCard"

const ProfileList = ( {profiles} ) => {
    return (
        <>
            {profiles.map((profile, index) => (
                <ProfileCard key={index} profile={profile} />
            ))}
        </>
    )
}

export default ProfileList