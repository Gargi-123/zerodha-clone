import React from 'react';

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row text-center my-5">
                    <div className="col-12 p-5">
                        <img src="/landing.png" alt="" style={{ width: "600px" }} />
                    </div>
                    <div className="col-12">
                        <h1>Invest in everything</h1>
                    </div>
                    <div className="col-12">
                        <h4 className="text-muted about p-3">online platform to invest in stocks, derivatives, mutual funds and more.</h4>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary px-5 py-2 my-4">Sign up now</button>
                    </div>
                </div>
            </div>
            <div className="container my-5 p-5">
                <div className="row mt-4">
                    <div className="col-5 p-4">
                        <img src="/largest-broker.svg" alt="" />
                    </div>
                    <div className="col-7 p-5">
                        <h1>
                            Largest stock broker in India
                        </h1>
                        <p style={{ fontSize: "18px" }} className="mb-2">
                            2+ million Zerodha clients contribute to over 15% of all retail order <br className="p-2" /> volumes in India daily by trading and investing in:
                        </p>
                        <div className="row">
                            <div className="col-6">
                                <ul className="mt-2 p-3">
                                    <li className="mt-3">Futures and Options</li>
                                    <li className="mt-3">Commodity derivatives</li>
                                    <li className="mt-3">Currency derivatives</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="mt-2 p-3">
                                    <li className="mt-3">Stocks & IPOs</li>
                                    <li className="mt-3">Direct mutual funds</li>
                                    <li className="mt-3">Bonds and Govt. Securities</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src="/press-logos.png" alt="" width="500px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 className="p-4">The Zerodha Universe</h2>
                        <h5 className="text-muted">A whole ecosystem of modern investment apps</h5>
                        <h5 className="text-muted">tailored to specific needs, built from the ground up</h5>
                    </div>

                </div>
                <div className="row text-center">
                    <div className="col-12">
                        <img src="ecosystem.png" alt="" width="1200px" />
                    </div>
                    <div className="col-12">
                        <a href="#" style={{ textDecoration: "none" }}> Explore our products  <i class="fa fa-long-arrow-right" style={{ fontSize: "20px" }} aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="row my-5 py-4">
                    <div className="col">
                        <h2 className="py-3">Unbeatable pricing</h2>
                        <div className="py-3">We pioneered the concept of discount broking and price<br /> transparency in India. Flat fees and no hidden charges. </div>
                        <a href="#" style={{ textDecoration: "none" }}> See pricing  <i class="fa fa-long-arrow-right" style={{ fontSize: "20px" }} aria-hidden="true"></i></a>
                    </div>
                    <div className="col">
                        <div className="row text-center">
                            <div className="col p-2 border">
                                <h1><i className="fa fa-inr pt-4" aria-hidden="true">0</i></h1>
                                <div className="p-4">Free equity delivery and <br /> direct mutual funds</div>
                            </div>
                            <div className="col p-2 border">
                                <h1><i className="fa fa-inr pt-4" aria-hidden="true">20</i></h1>
                                <div className="p-4">Intraday and F&O</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <img src="index-education.svg" />
                    </div>
                    <div className="col">
                        <h3 className="py-4">Free and open market education</h3>
                        <div className="py-1">Varsity, the largest online stock market education book in the world<br /> covering everything from the basics to advanced trading. </div>
                        <a href="#" style={{ textDecoration: "none" }}> Versity
                        <i class="fa fa-long-arrow-right my-4" style={{ fontSize: "20px" }} aria-hidden="true">
                            </i>
                        </a>
                        <div className="py-1">Varsity, the largest online stock market education book in the world<br /> covering everything from the basics to advanced trading. </div>
                        <a href="#" style={{ textDecoration: "none" }}> TradingQ&A
                          <i class="fa fa-long-arrow-right my-4" style={{ fontSize: "20px" }} aria-hidden="true">
                            </i>
                        </a>
                    </div>
                </div>
                <div className="row my-5 text-center">
                    <div className="col">
                        <h1>Open a Zerodha account</h1>
                        <div className="mt-3 text-muted">Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades. </div>
                        <button className="btn btn-primary px-5 py-2 my-4">Sign up now</button>
                    </div>
                </div>
            </div>
        </>
    )
}