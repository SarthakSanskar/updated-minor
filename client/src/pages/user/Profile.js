import React from 'react';
import ProfileListItem from '../../components/cards/ProfileListItem';
import UserNav from '../../components/nav/UserNav';
import {toast} from 'react-toastify';
import {useSelector} from 'react-redux';
import { getProfile } from '../../functions/user';


  

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);

  const {user} = useSelector((state) => ({ ...state }))

  useEffect(() => {
    loadProfile()
  },[])

  const loadProfile = () => {
    setLoading(true);
    getProfile(user.token)
    .then((res) => {
      setProfileData(res.data);
      setLoading(false);
    }).catch((err) => {
      setLoading(false);
      console.log(err);
    })
  }


return(
  <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-2'>
            <UserNav />
        </div>
        <div className='col'>
            <ProfileListItem profile = {profileData}>Profile</ProfileListItem>
        </div>
    </div>
  </div>
);
}

export default Profile;