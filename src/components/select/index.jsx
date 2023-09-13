/** @format */

import './style.css';
import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const listWallet = [
  { _id: 1, title: 'Ví sinh hoạt', price: 100000, isDefault: true },
  { _id: 2, title: 'Ví sinh hoạt', price: 100000, isDefault: true },
  { _id: 3, title: 'Ví sinh hoạt', price: 100000, isDefault: true },
];

export default function Select({ data, value, onChangeValue }) {
  const [isShow, setShow] = useState();
  const [isShowWalletBalance, setShowWalletBalance] = useState();

  const handleShowMenu = () => setShow(!isShow ? 'showMenu' : '');
  const handleToggleShowWallet = () => setShowWalletBalance(!isShowWalletBalance);
  const handleSelectItem = () => {
    handleShowMenu();
  };

  return (
    <div className="selectCustom relative rounded-lg w-11/12 m-auto my-5 " onBlur={handleShowMenu}>
      <div className="flex flex-row h-full px-5" onClick={handleShowMenu}>
        <div className="w-full self-center">
          <span>willet</span>
          <h2>4500000</h2>
        </div>
        {isShowWalletBalance ? (
          <EyeIcon className="h-6 w-6 self-center" onClick={handleToggleShowWallet} />
        ) : (
          <EyeSlashIcon className="h-6 w-6 self-center" onClick={handleToggleShowWallet} />
        )}
      </div>
      <ul className={`menu ${isShow}`}>
        {listWallet.map((item, index) => (
          <li key={index} onClick={handleSelectItem}>
            <i className="fa fa-thumbs-down" /> {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
