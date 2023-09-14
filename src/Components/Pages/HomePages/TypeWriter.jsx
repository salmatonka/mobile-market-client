import React from 'react';
import  { useRef, useState } from 'react';
// import TypeAnimation from '../TypeAnimation';
import { TypeAnimation as RawTypeAnimation } from 'react-type-animation';
const TypeWriter = () => {
    return (
        <span
        style={{ fontSize: '20px' }}
        className="w-full font-bold block bg-blue-400 bg-opacity-10 p-3 rounded-lg text-center "
      >
        <span>Get Your Desired Product from Featured Category!: </span>{' '}
        <RawTypeAnimation
          sequence={[
            'iphone',
            1000,
            'samsung-galaxy',
            1000,
            'redmi',
            1000,
            'Symphony',
            1000,
          ]}
          repeat={Infinity}
        />
      </span>
    );
};

export default TypeWriter;