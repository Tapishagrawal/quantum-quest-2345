import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

export const ShopBagItem = ({ index, _id, title, discount, price, img, handleRemoveFrombag, bag }) => {
    return (
        <tr className='bg-white border-b dark:bg-[#1f2d40] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#1B2635] transition'>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
            <td className="px-6 py-4 ">
                <img className='w-24 rounded-md' src={img} alt="" />
            </td>
            <td className="px-6 py-4">{title}</td>
            <td className="px-6 py-4">Rs. {price?.toFixed(2)}</td>
            <td className="px-6 py-4">{discount * 100}%</td>
            <td className="px-6 py-4">Rs. {(price * (1 - discount))?.toFixed(2)}</td>
            <td className="px-6 py-4 text-right">
                <Link onClick={() => handleRemoveFrombag(_id, { bag: !bag })}>
                    <MdDelete/>    
                </Link>
            </td>
        </tr>
    )
}
