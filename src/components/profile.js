import LoggedInProfile from './profile/logged_in';
import AnonymousProfile from './profile/anonymous';

function Profile ({user}){
    const firstname = user ? user.name.split(' ').slice(0, -1).join(' ') : ''
    console.log(firstname)

    return(
        user ? <LoggedInProfile firstname={firstname} /> : <AnonymousProfile />
    )
}

export default Profile