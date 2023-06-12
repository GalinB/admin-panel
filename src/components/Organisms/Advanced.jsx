import Button from '@/components/atoms/Button'
import CurrencyDropdown from '@/components/atoms/CurrencyDropdown'
import MenuImage from '@/components/atoms/MenuImage.jsx'
import Tabs2 from '@/components/molecules/Tabs2'

export default function Advanced({ onButtonClick }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 border border-solid border-gray-200 shadow-sm rounded-lg p-3 mb-4">
        <div className="text-black font-bold mb-2 flex justify-center">Advanced</div>
        <div className="text-gray-400 flex flex-col gap-1">
          <div className="pl-4">Subscription billed</div>
          <CurrencyDropdown
            width="w-ful"
            defaultCurrency="Monthly"
            currencies={['Monthly', 'Weekly']}
          />
          <div className="pl-4">
            Choose if subscriptions will be billed at 1st day of new month or new week
          </div>
        </div>
        <div className="flex flex-col mt-3 gap-2">
          <Tabs2
            tabname="Limited Subscriptions"
            src2="/btn_active.svg"
            src3="/btn_inactive.svg"
            size={50}
          />
          <Tabs2
            tabname="100"
            subscribed={`24 subs`}
            textcolor="text-black font-bold mb-3"
            size={50}
          />
          <div className="text-gray-400 ml-3">
            This option is to limit maximum amount of subscribers for the selected tier
          </div>
        </div>
        <div className="flex flex-col mt-3 gap-1">
          <Tabs2
            tabname="Shipping Addresses"
            src2="/btn_inactive.svg"
            src3="/btn_active.svg"
            size={50}
          />
          <div className="text-gray-400 ml-3">
            If the option is enabled the subscribers will be asked to input their shipping addresses
            at the checkpoint
          </div>
        </div>
        <div>
          <div className="bg-gray-50 border border-opacity-4 shadow-sm rounded-lg p-4">
            <div className="flex justify-between mb-10">
              <div>Manage Tier</div>
              <div className="flex flex-row gap-3">
                <div className="text-purple-700">Published</div>
                <MenuImage src="/vector.svg" width={9} height={9} alt="Up" />
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <Button label="Unpublish Tier" />
              <Button label="Delete Tier" textcolor="text-red-500" />
            </div>
          </div>
          <div className="text-gray-400 ml-3 mt-1">
            Actions associated with publication of your subscription tier
          </div>
        </div>
      </div>
      <Button label="Save changes" modifier="third" onClick={onButtonClick} />
    </div>
  )
}
