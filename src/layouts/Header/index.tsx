import React, { FC, useState } from 'react';
import Image from 'next/image';
import headerWave from 'public/svg/header_wave.svg';
import * as Icon from 'react-feather';
import useLocalStorage from '@/hooks/useLocalStorage';
import PulseHelpButton from '@/components/PulseHelpButton';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="relative">
      <img
        className="w-full object-cover object-bottom"
        style={{
          height: '140px',
        }}
        alt="hehe"
        src="/svg/header_wave.svg"
      />
      <div className="absolute top-0 left-0 w-full pt-8 lg:pt-4 pl-4 lg:pl-default font-bold ">
        <div className="flex space-x-8 text-xl lg:text-2xl items-center">
          <h1>Healthy Scheduler</h1>
          <PulseHelpButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
