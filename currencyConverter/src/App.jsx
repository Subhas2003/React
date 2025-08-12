import { Input } from './component/index'
import usecurrencyinfo from './hook/usecurrencyinfo'
import './App.css'
import { useState } from 'react'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setfrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmt, setconvertedAmt] = useState(0)


  const currencyinfo = usecurrencyinfo(from)
  const option = Object.keys(currencyinfo)

  const swap = () => {
    setfrom(to)
    setTo(from)
    setconvertedAmt(amount)
    setAmount(convertedAmt)
  }

  const convert = () => {
    setconvertedAmt(amount * currencyinfo[to])

  }
  return (
    <>
 <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover md:bg-cover md:bg-center bg-no-repeat"
            style={{
                
                backgroundImage: `url('https://images.unsplash.com/photo-1754756736142-b5251258b167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="To"
                                amount={amount}
                                currencyoptions={option}
                                onCurrencyChange={(currency)=>setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                            onClick={swap} 
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedAmt}
                                currencyoptions={option}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                                
                            />
                        </div>
                        <button
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
