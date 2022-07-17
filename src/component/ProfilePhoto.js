import React from "react";
import photo from "../photo.jpeg";

const ProfilePhoto = () =>{
    return <React.Fragment>
        <div>
            <img src={photo} alt='Photo de profil' style={{width:'100%'}} />
        </div>
    </React.Fragment>
}

export default ProfilePhoto;