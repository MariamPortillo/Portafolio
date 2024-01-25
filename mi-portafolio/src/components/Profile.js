import React from 'react';
import MyImage from '../images/profile.jpg'


function Profile(){
    return(
        <div className='profile'>
            <img src={MyImage} alt='image' />

        </div>
    );
}
export default Profile;
