import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AddIcon from '@mui/icons-material/Add';
import '../styles/Login.css'

function Login() {
  return (
    <div className='login'>
      <div className="loginin logon">
        <h2 className='new'>New Customer?</h2>
        <h2 className='sign'>Sign Up</h2>
      </div>
      <hr />
    <div className="loginin">
        <AccountBoxIcon/>
        <p className='txt1'>My Profile</p>
    </div>
    <hr />
    <div className="loginin">
        <AddIcon/>
        <p className='txt1'>Flipkart Plus Zone</p>
    </div>
    <hr />
    <div className="loginin">
        <CreateNewFolderIcon/>
        <p className='txt1'>Orders</p>
    </div>
    <hr />
    <div className="loginin">
        <FavoriteIcon/>
        <p className='txt1'>Wishlist</p>
    </div>
    <hr />
    <div className="loginin">
        <ConfirmationNumberIcon/>
        <p className='txt1'>Rewards</p>
    </div>
    <hr />
    <div className="loginin">
      <AccountBalanceWalletIcon/>
      <p className='txt1'>Gift Cards</p>
    </div>
   

    </div>
  )
}

export default Login