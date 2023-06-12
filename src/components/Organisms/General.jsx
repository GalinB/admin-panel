import CurrencyDropdown from '@/components/atoms/CurrencyDropdown'
import MenuImage from '@/components/atoms/MenuImage.jsx'
import Form from '@/components/molecules/Form'
import React, { useState } from 'react'

export default function General() {
  const [price, setPrice] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    if (price) {
      const reducedPrice = parseFloat(price) * 0.8 // 20% reduction
      setPrice(reducedPrice.toFixed(2)) // Round the reduced price to two decimal places
      setIsClicked(true)
    }
  }

  return (
    <div className="border border-solid border-gray-200 shadow-sm rounded-lg p-3 mb-6">
      <div className="flex justify-center text-black font-bold mb-2 ">General</div>
      <div className="flex flex-row justify-between gap-3">
        <div className="grow">
          <div className="ml-3 m-1 text-gray-400">Tier name</div>
          <Form name="name" placeholder="Enter tier name" textcolor="text-black" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-gray-400">Class</div>
          <CurrencyDropdown
            width="w-48"
            defaultCurrency="Tier II"
            currencies={['Tier I', 'Tier II', 'Tier III', 'Tier IV', 'God Tier 🚀']}
          />
        </div>
      </div>
      <div className="flex flex-row items-end gap-3 justify-between">
        <div className="mt-5 grow">
          <div className="text-gray-400 ml-3 pb-1">Price</div>
          <input
            className="border border-gray-200 shadow-sm rounded-lg p-2 pl-3 w-full "
            type="text"
            label="Price"
            name="name"
            placeholder="Enter price                                              (inc. VAT)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              color: isClicked ? 'purple' : 'inherit',
              pointerEvents: isClicked ? 'none' : 'auto',
            }}
          />
        </div>

        <CurrencyDropdown
          width="w-48"
          defaultCurrency="USD"
          currencies={['USD', 'NOK', 'EUR', 'GBP', 'JPY']}
        />
      </div>
      <div
        className={`text-purple-700 mb-3 ml-3 ${
          isClicked ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={isClicked ? null : handleClick}
      >
        + Add sale offer
      </div>
      <div>
        <div className="text-gray-700">Tier icon</div>
        <div className="flex flex-row items-center bg-gray-50 border border-opacity-4 shadow-sm rounded-lg p-4 gap-3 w-1/2">
          <MenuImage src={'/tier2.svg'} width={46} height={46} alt="Right Chevron Icon" />
          <div className="text-gray-400 font-medium mb-2">Tier II Icon</div>
        </div>
      </div>
      <Form
        label="Description (optional)"
        name="name"
        placeholder="Enter description"
        inputh="h-40"
      />
      <div className="flex flex-row justify-between pl-4 pr-4">
        <div>Characters</div>
        <div className="flex flex-row gap-1 items-center">
          <MenuImage src={'/upload.svg'} width={22} height={22} alt="Right Chevron Icon" />
          <div>180</div>
        </div>
      </div>
    </div>
  )
}
