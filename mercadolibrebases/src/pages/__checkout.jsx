import React from 'react'

export default function checkout() {
return (
<div className="mt-5 container">
    <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Product name</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Second product</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Third item</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">-$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
                </li>
            </ul>

            <form className="card p-2">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code"></input>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary">Redeem</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>

            <form className="needs-validation" novalidate>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value=""
                            required></input>
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" value=""
                            required></input>
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label for="email">Email <span className="text-muted">(Optional)</span></label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>

                <div className="mb-3">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                        required></input>
                    <div className="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                </div>

                <div className="mb-3">
                    <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"></input>
                </div>

                <div className="row">
                    <div className="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select className="form-select d-block w-100" id="country" required>
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select className="form-select d-block w-100" id="state" required>
                            <option value="">Choose...</option>
                            <option>California</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required></input>
                        <div className="invalid-feedback">
                            Zip code required.
                        </div>
                    </div>
                </div>
                <hr className="mb-4">
                </hr>
                <h4 className="mb-3">Payment</h4>

                <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked
                            required></input>
                        <label className="custom-control-label" for="credit">Credit card</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input"
                            required></input>
                        <label className="custom-control-label" for="debit">Debit card</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input"
                            required></input>
                        <label className="custom-control-label" for="paypal">PayPal</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required></input>
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                            Name on card is required
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required></input>
                        <div className="invalid-feedback">
                            Credit card number is required
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required></input>
                        <div className="invalid-feedback">
                            Expiration date required
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required></input>
                        <div className="invalid-feedback">
                            Security code required
                        </div>
                    </div>
                </div>
                <hr className="mb-4">
                </hr>
                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>

            </form>
            <br /><br />
        </div>
    </div>
</div>
)}