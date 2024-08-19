import { Disclosure, Menu, MenuButton } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'

const user = {
  imageUrl:'src/assets/account.png',
}

export default function Header() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">

                <div className="flex-shrink-0">
                  <img
                    alt="Your Company"
                    src="src/assets/accuknox_logo.jpg"
                    className="h-8 w-8 rounded-full"
                  />
                </div>

              </div>

              <div className='flex items-center bg-white rounded-md h-8 w-96'>
                <img 
                  src="src/assets/Search.svg" 
                  alt="Search-Icon" 
                  className='h-6 w-10'
                />
                <input 
                  type="search"
                  placeholder='Search for widgets'
                  className='outline-none w-10/12'
                />
              </div>

              <div className="hidden md:block">

                <div className="ml-4 flex items-center md:ml-6">
                  {/* Bell Icon */}
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Profile Placeholder */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                      </MenuButton>
                    </div>
                  </Menu>
                </div>

              </div>
  
            </div>

          </div>

        </Disclosure>
      </div>
    </>
  )
}