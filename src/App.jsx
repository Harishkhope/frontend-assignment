import React from 'react'
import acc from "../src/assets/acc.png"
import green from "../src/assets/green.png"
import down from "../src/assets/download.png"

const App = () => {
  return (
    <div className="bg-[#F4F7F9] font-pop ">
      <div className="flex">
        <div className="w-64 bg-[#1E2640] p-5 text-white min-h-screen">
          <div className="flex items-center space-x-5 mb-5">
            <img src={acc} alt="" className='h-8 w-8' />
            <span className="font-semibold">Nishyan</span>
          </div>
          <div className="mb-5" variant="secondary">
            Visit store
          </div>
          <nav className="space-y-1 ">
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Home
            </div>
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Orders
            </div>
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Products
            </div>
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Delivery
            </div>
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Marketing
            </div>
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Analytics
            </div>
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Payouts
            </div>
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Discounts
            </div>
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Audience
            </div>
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Appearance
            </div>
            <div className="block py-2 px-3 rounded-lg hover:bg-slate-500" href="#">
              Plugins
            </div>
          </nav>
          <div className="mt-5 bg-slate-400 p-2 rounded-md">
            <span className="text-sm ">Available credits</span>
            <div className="text-lg font-semibold">222.10</div>
          </div>
        </div>
        <div className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Payouts</h1>
              <HelpCircleIcon className="h-6 w-6" />

            </div>

            <div className="flex items-center mr-24">
              <input className=' border h-10 w-96 border-slate-950 rounded-md p-2' placeholder="Search features, tutorials, etc." />
            </div>

            <div className="flex items-center space-x-4">
              <SignalIcon className="h-6 w-6" />
              <img src="" alt="" />
            </div>
          </div>


          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-500 text-white rounded-md">
              <div>
                <span className='p-1'>Next Payout</span>
              </div>
              <div>
                <div className="text-3xl font-bold p-1">₹2,312.23</div>
                <div className='p-1'>23 orders</div>
                <div className="text-sm bg-slate-700  w-full p-2 rounded-md">Next payout date: Today, 04:00PM</div>
              </div>
            </div>
            <div className="bg-slate-200 p-2 rounded-md">
              <div>
                <span>Amount Pending</span>
              </div>
              <div>
                <div className="text-3xl font-bold">₹92,312.20</div>
                <div>13 orders</div>
              </div>
            </div>
            <div className="bg-slate-200 p-2 rounded-md">
              <div>
                <span>Amount Processed</span>
              </div>
              <div>
                <div className="text-3xl font-bold">₹23,92,312.19</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">Transactions | This Month</h2>
              <div>
                <div id="">
                  <span placeholder="This Month" />
                </div>
              </div>
            </div>
            <div>
              <div className='mb-2'>
                <div>Payouts (22)</div>
                <div>Refunds (6)</div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <input className=' p-2 rounded-md border border-gray-700 w-96' placeholder="Order ID" />
              <div className="flex space-x-2">
                <button className='text-lg border border-slate-600 rounded-md' variant="outline">Sort ↓↑</button>
                <img src={down} alt="" className='h-5 w-5 '/>
              </div>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border">Order ID</th>
                  <th className="py-2 px-4 border">Status</th>
                  <th className="py-2 px-4 border">Transaction ID</th>
                  <th className="py-2 px-4 border">Refund date</th>
                  <th className="py-2 px-4 border">Order amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-2 px-4 border">#281209</td>
                  <td className="py-2 px-4 border flex items-center">
                    <img src={green} alt="" className='h-5 w-5 mr-1' />
                    Successful
                  </td>
                  <td className="py-2 px-4 border">131634495747</td>
                  <td className="py-2 px-4 border">Today, 08:45 PM</td>
                  <td className="py-2 px-4 border">₹1,125.00</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4 border">#281208</td>
                  <td className="py-2 px-4 border flex items-center">
                    <img src={green} alt="" className='h-5 w-5 mr-1' />
                    Successful
                  </td>
                  <td className="py-2 px-4 border">131634495747</td>
                  <td className="py-2 px-4 border">Yesterday, 3:00 PM</td>
                  <td className="py-2 px-4 border">₹1,125.00</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2 px-4 border">#281208</td>
                  <td className="py-2 px-4 border flex items-center">
                    <img src={green} alt="" className='h-5 w-5 mr-1' />
                    Processing
                  </td>
                  <td className="py-2 px-4 border">131634495747</td>
                  <td className="py-2 px-4 border">Yesterday, 3:00 PM</td>
                  <td className="py-2 px-4 border">₹1,125.00</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4 border">#281208</td>
                  <td className="py-2 px-4 border flex items-center">
                    <img src={green} alt="" className='h-5 w-5 mr-1' />
                    Successful
                  </td>
                  <td className="py-2 px-4 border">131634495747</td>
                  <td className="py-2 px-4 border">Yesterday, 3:00 PM</td>
                  <td className="py-2 px-4 border">₹1,125.00</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2 px-4 border">#281208</td>
                  <td className="py-2 px-4 border flex items-center">
                    <img src={green} alt="" className='h-5 w-5 mr-1' />
                    Processing
                  </td>
                  <td className="py-2 px-4 border">131634495747</td>
                  <td className="py-2 px-4 border">Yesterday, 3:00 PM</td>
                  <td className="py-2 px-4 border">₹1,125.00</td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </div>
    </div>
  )
}

function HelpCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function SignalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}




export default App