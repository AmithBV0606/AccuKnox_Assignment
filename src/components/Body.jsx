import React from 'react'
import WidgetBTN from '../components/WidgetBTN'
import Category from './Category'

function Body() {
  return (
    <main>
      <div className="m-2 max-w-full px-4 py-6 sm:px-6 lg:px-8 bg-sky-200 rounded-lg space-y-8">

        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-semibold'>CNAPP Dashboard</h2>

          <WidgetBTN />
        </div>

        <div className='space-y-5'>
          <Category widgetName={"CSPM Executive dashboard"}/>
          <Category widgetName={"CWPP dashboard"}/>
          <Category widgetName={"Registry Scan"}/>
          <Category widgetName={"Ticket"}/>
        </div>
      </div>
    </main>
  )
}

export default Body