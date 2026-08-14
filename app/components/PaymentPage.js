"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { fetchpayment, fetchuser, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


export const PaymentPage = ({ value }) => {
    const router = useRouter()
    const { data: session } = useSession()
    const searchparams = useSearchParams()
    const [Form, setForm] = useState({
        name: '',
        message: '',
        amount: ''
    });
    useEffect(() => {
        document.title = "Payment Page"
    }, [])

    useEffect(() => {
        if (searchparams.get("paymentdone") === "true") {
            router.push(`/${value}`)
        }
    }, [searchparams, router, value])

    useEffect(() => {
        if (value) {
            getDataUser(value)
        }
        getDataPayment()
    }, [value])

    const [paymentform, setpaymentform] = useState([])
    const [currentuser, setcurrentuser] = useState({})

    const handleChange = (e) => {
        setForm({
            ...Form,
            [e.target.name]: e.target.value
        });
    };

    const getDataUser = async (val) => {
        let u = await fetchuser(val)
        setcurrentuser(u)
    }

    const getDataPayment = async () => {
        let dbPayment = await fetchpayment()
        setpaymentform(dbPayment);
    }

    const pay = async (amount) => {
        // Initiate order on backend (amount in rupees)
        let a = await initiate(amount, value, Form);
        let orderId = a.id;

        var options = {
            "key": (currentuser?.razorpayId && currentuser.razorpayId.trim()) || process.env.NEXT_PUBLIC_KEY_ID,
            "amount": a.amount || amount * 100, // Amount in paise
            "currency": "INR",
            "name": "Buy Me a Headphone",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/razorpay`,
            "prefill": {
                "name": Form.name || session?.user?.name || "Gaurav Kumar",
                "email": session?.user?.email || "gaurav.kumar@example.com",
                "contact": "+919876543210"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    // Helper checks for button validation logic
    const isNameAndMessageFilled = Form.name.trim().length >= 3 && Form.message.trim().length >= 3;
    const isAllFieldsFilled = isNameAndMessageFilled && Form.amount.trim() !== '' && Number(Form.amount) > 0;

    return (
        <>
            {/* Load Razorpay Checkout Script */}
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

            <div className='relative w-full mb-14 sm:mb-16'>
                <div className='w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden'>
                    <img
                        src={currentuser?.coverPicture || "Background.gif"}
                        onError={(e) => { e.currentTarget.src = "Background.gif" }}
                        className='w-full h-full object-cover'
                        alt="cover banner"
                    />
                </div>
                <div className='absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 border-4 border-slate-950 rounded-full overflow-hidden shadow-xl bg-slate-900'>
                    <img
                        src={currentuser?.profilePicture || "/profile picture.jpg"}
                        onError={(e) => { e.currentTarget.src = "/profile picture.jpg" }}
                        className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover'
                        alt="user profile"
                    />
                </div>
            </div>
            {/* Profile Info Header */}
            <div className='text-white flex flex-col gap-1.5 justify-center items-center px-4 text-center'>
                <h1 className='text-gray-300 font-bold text-xl sm:text-2xl'>@{value}</h1>
                <div className='flex items-center text-gray-400 text-sm sm:text-base'>
                    <span>{paymentform.length} Payments • ₹{paymentform.reduce((a, b) => a + b.amount, 0)} raised</span>
                </div>
            </div>
            {/* Main Content Layout */}
            <div className='flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto px-4 my-8'>

                {/* Supporters Card */}
                <div className='supporters border border-slate-800 rounded-2xl bg-slate-900 w-full lg:w-1/2 p-4 sm:p-6 text-white'>
                    <h2 className='font-bold text-lg sm:text-xl mb-4'>Supporters</h2>
                    <ul className='space-y-3 max-h-[400px] overflow-y-auto pr-1'>
                        {paymentform.length === 0 && <li className='text-gray-400'>No payments here yet</li>}
                        {paymentform.map((p, i) => (
                            <li key={p._id || i} className='flex items-center gap-3 bg-slate-800/50 p-2.5 rounded-lg text-sm sm:text-base'>
                                <img className='w-7 h-7 rounded-full shrink-0' src='avatar.gif' alt='avatar' />
                                <span className='break-all'>
                                    <span className='font-semibold text-slate-200'>{p.name}</span> paid you <span className='font-bold text-emerald-400'>₹{p.amount}</span> with message "{p.message}"
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Payments Form Card */}
                <div className='payments border border-slate-800 rounded-2xl bg-slate-900 w-full lg:w-1/2 p-4 sm:p-6 text-white'>
                    <h2 className='font-bold text-lg sm:text-xl mb-4'>Make a Payment</h2>
                    <div className='flex flex-col gap-3.5'>
                        <input
                            name="name"
                            value={Form.name}
                            onChange={handleChange}
                            type="text"
                            placeholder='Enter Name'
                            className='bg-[#09090f] w-full border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-violet-500 transition-colors'
                        />
                        <input
                            name="message"
                            value={Form.message}
                            onChange={handleChange}
                            type="text"
                            placeholder='Enter Message'
                            className='bg-[#09090f] w-full border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-violet-500 transition-colors'
                        />
                        <div className='flex flex-col sm:flex-row gap-2.5'>
                            <input
                                name="amount"
                                value={Form.amount}
                                onChange={handleChange}
                                type="text"
                                placeholder='Enter Amount in ₹'
                                className='bg-[#09090f] w-full sm:flex-1 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-violet-500 transition-colors'
                            />
                            <button
                                disabled={!isAllFieldsFilled}
                                onClick={() => pay(Number(Form.amount))}
                                className='w-full sm:w-auto shrink-0 disabled:bg-slate-800 disabled:text-gray-500 disabled:cursor-not-allowed bg-violet-600 hover:bg-violet-500 transition-all px-6 py-2.5 rounded-lg text-white font-semibold'
                            >
                                Pay
                            </button>
                        </div>
                    </div>
                    {/* Quick Pay Buttons */}
                    <div className='mt-6 pt-4 border-t border-slate-800'>
                        <p className='text-xs text-gray-400 mb-2 font-normal'>Quick Select Amount:</p>
                        <div className='flex flex-wrap gap-2.5'>
                            <button
                                disabled={!isNameAndMessageFilled}
                                className='disabled:bg-slate-800 disabled:text-gray-500 disabled:cursor-not-allowed bg-violet-600 hover:bg-violet-500 duration-300 px-4 py-2 rounded-lg text-white font-semibold'
                                onClick={() => pay(10)}
                            >
                                Pay ₹10
                            </button>
                            <button
                                disabled={!isNameAndMessageFilled}
                                className='disabled:bg-slate-800 disabled:text-gray-500 disabled:cursor-not-allowed bg-violet-600 hover:bg-violet-500 duration-300 px-4 py-2 rounded-lg text-white font-semibold'
                                onClick={() => pay(20)}
                            >
                                Pay ₹20
                            </button>
                            <button
                                disabled={!isNameAndMessageFilled}
                                className='disabled:bg-slate-800 disabled:text-gray-500 disabled:cursor-not-allowed bg-violet-600 hover:bg-violet-500 duration-300 px-4 py-2 rounded-lg text-white font-semibold'
                                onClick={() => pay(30)}
                            >
                                Pay ₹30
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage