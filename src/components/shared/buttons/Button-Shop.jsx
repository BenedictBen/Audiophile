import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from '../scroll-utils/ScrollToTop';

function ButtonShop(props) {
  return (
    <motion.button
      className='text-gray hover:text-brightOrange transition-colors duration-300'
      onClick={ScrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <Link className='text-subtitle ' to={props.to} onClick={props.onClick}>
        SHOP{' '}
        <img
          className='inline-block align-middle -mt-1'
          src='/assets/shared/desktop/icon-arrow-right.svg'
          aria-label='hidden'
        />
      </Link>
    </motion.button>
  );
}

export default ButtonShop;
