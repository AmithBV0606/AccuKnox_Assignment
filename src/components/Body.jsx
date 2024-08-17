import React from 'react'
import WidgetBTN from '../components/WidgetBTN'
import WidgetSettingsBTN from './WidgetSettingsBTN'
import CSPMCategory from './CSPMCategory'
import CWPPCategory from './CWPPCategory'
import RegistryCategory from './RegistryCategory'
import TicketCategory from './TicketCategory'

function Body() {
  return (
    <main>
      <div className="m-2 max-w-full px-4 py-6 sm:px-6 lg:px-8 bg-sky-200 rounded-lg space-y-8">

        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-semibold'>CNAPP Dashboard</h2>

          <WidgetSettingsBTN />
        </div>

        <div className='space-y-5'>
          <CSPMCategory />
          <CWPPCategory />
          <RegistryCategory />
          <TicketCategory />
        </div>
      </div>
    </main>
  )
}

export default Body