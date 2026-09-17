function ProfileCard(){
    const name:string = "Raihan";
    const age: number = 22;
    const favoriteHobby: string = "Photography";
    const currentYear: number = 2026;

    return(
        <div className="profile">
            <h1 className="card">My Profile Card</h1>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Hobby : {favoriteHobby}</p>
            <p>Year : {currentYear}</p>
        </div>
    )
}
export default ProfileCard