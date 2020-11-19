import React from 'react';

export default function Pricing() {
    return (
        <>
            <div className="container my-5">
                <div className="row  text-center">
                    <div className="col p-4 ">
                        <h1 className="pt-3 mt-5">Pricing</h1>
                        <h5 className="py-4">Free equity investments and flat
                    <i class="fa fa-inr text-small" aria-hidden="true"></i>
                    20 traday and F&O trades</h5>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 border-top">
                <div className="container ">
                    <div className="row text-center py-5">
                        <div className="col-4 p-5">
                            <img src="/pricing-eq.svg" alt="" />
                            <h2>Free equity delivery</h2>
                            <div className="text-muted p-3">
                                All equity delivery investments (NSE, BSE),<br />
                                are absolutely free — ₹ 0 brokerage.
                            </div>
                        </div>
                        <div className="col-4 p-5">
                            <img src="/other-trades.svg" alt="" />
                            <h2>Intraday and F&O trades</h2>
                            <div className="text-muted">
                                Flat Rs. 20 or 0.03% (whichever is lower) <br />
                                per executed order on intraday trades<br />
                                across equity, currency, and commodity <br />
                                trades.
                           </div>
                        </div>
                        <div className="col-4 p-5">
                            <img src="/pricing-eq.svg" alt="" />
                            <h2>Free direct MF</h2>
                            <div className="text-muted p-3">
                                All direct mutual fund investments are<br />
                                absolutely free — ₹ 0 commissions & DP<br />
                                charges.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container border-top text-center">
                <div className="row pt-5">
                    <div className="col">
                        <h1>Open a Zerodha account</h1>
                        <p className="py-3">
                            Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.
                        </p>
                        <button className="btn btn-primary px-5 py-2 my-4 font-weight-bold">Sign up now</button>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col py-3">
                        <a href="#" style={{textDecoration:"none", fontSize:"20px"}}>Brokerage calculator</a>
                    </div>
                    <div className="col py-3">
                        <a href="#" style={{textDecoration:"none", fontSize:"20px"}}>List of charges</a>
                    </div>
                </div>
                <div className="row py-3 text-left">
                    <div className="col pb-5">
                    <ul>
                        <li className="py-2 text-muted" style={{fontSize:"12px"}}>
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 per executed order.
                        </li>
                        <li className="py-2 text-muted" style={{fontSize:"12px"}}>
                            Digital contract notes will be sent via e-mail.
                        </li>
                        <li className="py-2 text-muted" style={{fontSize:"12px"}}>
                            Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
                        </li>
                        <li className="py-2 text-muted" style={{fontSize:"12px"}}>
                            For NRI's: ₹200 or 0.1% (whichever lower) per executed order
                        </li>
                        <li className="py-2 text-muted" style={{fontSize:"12px"}}>
                            A brokerage charge of 0.25% will be applied on all trades done in any cash-settled commodity contract in the last two days of trading in any expiry.
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

        </>
    )
}