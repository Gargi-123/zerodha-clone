import React from "react";

export default function Footer() {
    return (
        <div className="container-fluid bg-light border-top">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <div className="p-2">
                            <img src="/logo.svg" className="p-1" style={{ width: "150px" }} />
                        </div>
                        <div className="p-2">
                            <i class="fa fa-phone fa-lg" aria-hidden="true"> +91 80 4718 1888 </i>
                        </div>
                        <div className="p-2 text-size">
                            <p>© 2010 - 2020, Zerodha Broking Ltd.<br />
                        All rights reserved.
                        </p>
                        </div>
                        <div className="p-0">
                            <i class="fa  text-muted fa-twitter fa-lg m-2" aria-hidden="true"></i>
                            <i class="fa  text-muted fa-facebook-official fa-lg m-2" aria-hidden="true"></i>
                            <i class="fa  text-muted fa-instagram m-2 fa-lg" aria-hidden="true"></i>
                            <i class="fa  text-muted fa-linkedin m-2 fa-lg" aria-hidden="true"></i>
                            <i class="fa  text-muted fa-telegram m-2 fa-lg" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="p-2">
                            <div className=" font-weight-bold">Company</div>
                        </div>
                        <div className="p-2 text-muted">
                            About
                    </div>
                        <div className="p-2 text-muted">
                            Products
                    </div>
                        <div className="p-2 text-muted">
                            Pricing
                    </div>
                        <div className="p-2 text-muted">
                            Referral programme
                    </div>
                        <div className="p-2 text-muted">
                            Careers
                    </div>
                        <div className="p-2 text-muted">
                            Zerodha.tech
                    </div>
                        <div className="p-2 text-muted">
                            Press & media
                    </div>
                        <div className="p-2 text-muted">
                            Zerodha cares (CSR)
                    </div>
                    </div>
                    <div className="col-3">
                        <div className="p-2">
                            <div className=" font-weight-bold">Support</div>
                        </div>
                        <div className="p-2 text-muted">
                            Contact
                    </div>
                        <div className="p-2 text-muted">
                            Support portal
                    </div>
                        <div className="p-2 text-muted">
                            Z-Connect blog
                    </div>
                        <div className="p-2 text-muted">
                            List of charges
                    </div>
                        <div className="p-2 text-muted">
                            Downloads & resources
                    </div>
                    </div>

                    <div className="col-3">
                        <div className="p-2">
                            <div className=" font-weight-bold">Account</div>
                        </div>
                        <div className="p-2 text-muted">
                            Open an account
                    </div>
                        <div className="p-2 text-muted">
                            Fund transfer
                    </div>
                        <div className="p-2 text-muted">
                            60 day challenge
                    </div>
                    </div>

                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <p className="small-text">Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF </p>
                        <p className="small-text">
                            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                        </p>
                        <p className="small-text">
                            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                        </p>
                        <p className="small-text">
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row  text-center">
            <div className="col">
                <span className="p-3 text-size">NSE</span>
                <span className="p-3 text-size">BSE</span>
                <span className="p-3 text-size">MCX</span>
                <span className="p-3 text-size">Terms & conditions</span>
                <span className="p-3 text-size">Policies & procedures</span>
                <span className="p-3 text-size">Privacy policy</span>
                <span className="p-3 text-size">Disclosure</span>
                </div>
            </div>
        </div>
    )
}