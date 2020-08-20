import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header-component-styles.scss';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase-utils';

const Headers = ({currentUser}) =>{
    return(
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACTS
            </Link>
            
            { currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>
                    Sign Out
                </div>
                :
                <Link className='option' to='/signin'>Sign in</Link>

            }
            </div>
        </div>
    );
}

export default Headers;