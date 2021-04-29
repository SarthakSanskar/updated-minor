import React , {useState} from 'react';
import CreateProfile from '../../components/forms/CreateProfile';
import UserNav from '../../components/nav/UserNav';
import {toast} from 'react-toastify';
import {useSelector} from 'react-redux';
import {createProfile} from '../../functions/user';

const initState = {
  name: '',
  email: '',
  phone_no: '',
  reset_password: '',
  profile: [],
}


const newcreateProfile = () => {
  const [values, setValues] = useState(initState);


// redux
const {user} = useSelector((state) => ({...state}));

const handleSubmit = (e) => {
  e.preventDefault();
  createProfile(values, user.token)
  .then(res => {
    console.log(res);
    toast.success("Profile Create Completed");
    window.alert(`profile  is created`);
    window.location.reload();
  })
  .catch((err) => {
    console.log(err);
    // if (err.response.status === 400) toast.error(err.response.data);
    toast.error(err.response.data.err);
  })
}



  return(
  <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-2'>
            <UserNav />
        </div>
        <div className='col'>
            <CreateProfile
            values = {values}
            handleSubmit={handleSubmit}
            />
        </div>
    </div>
  </div>
);
  }

export default newcreateProfile;