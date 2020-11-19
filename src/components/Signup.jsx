import React from 'react';

export default function Signup() {
    return (
        <>
            <div className="container my-5">
                <div className="row mt-5 text-center">
                    <div className="col">
                        <h2 className=" mt-5 pt-5">Join 2+ million investors & traders</h2>
                        <div style={{ fontSize: "20px", paddingBottom: "20px" }}>Open a trading and Demat account online and start investing for free </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <img src="account_open.png" alt="" />
                    </div>
                    <div className="col pt-5" style={{ paddingLeft: "20%" }}>
                        <h2>Signup now</h2>
                        <p className="text-muted">Or track your existing application</p>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">+91</div>
                            </div>
                            <input type="text" className="form-control p-4 py-4 input" width="100px" placeholder="Your 10 digit mobile number" />
                        </div>
                        <p style={{ fontSize: "10px" }} className="text-muted">You will receive an OTP on your number</p>
                        <button className="btn btn-primary px-5 py-2 my-4">Continue</button>
                        <a href="#" style={{ textDecoration: "none", fontSize: "15px" }}><p>Want to open an NRI account?</p></a>
                    </div>
                </div>
            </div>
        </>
    )
}