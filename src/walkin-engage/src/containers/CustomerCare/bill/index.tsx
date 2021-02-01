import React from 'react';
import Search from '../search';
import './style.css';

const Bill = () => {
  return (
    <>
      <Search />
      <div className={`billContainer`}>
        <div className={`firstColumn`}>
          <div>
            <div>
              <span className={`leftValue title-lg`}>ID : 2016515465</span>
              <span className={`rightValue`}>23rd Nov 2020 5:45</span>
            </div>
            <div>
              <span className={`leftValue`}>Store Name</span>
              <span className={`rightValue`}>Abcd</span>
            </div>
            <div>
              <span className={`leftValue`}>
                Customer Facing transaction id
              </span>
              <span className={`rightValue`}>125156554</span>
            </div>
            <div>
              <span className={`leftValue`}>Internatinal transaction id</span>
              <span className={`rightValue`}>125156554</span>
            </div>
          </div>
          <div>
            <div>
              <span className={`leftValue title-lg`}>Order</span>
              <span className={`rightValue`}>Status : Delivered</span>
            </div>
            <div className={`coloredbackground`}>
              <span className={`leftValue`}>Item</span>
              <span className={`rightValue`}>Cost</span>
            </div>
            <div className={`itemDiv`}>
              <span className={`leftValue`}>Cola</span>
              <div className={`itemvalues`}>
                <span>250.25</span>
                <span>3x</span>
                <span>250.25</span>
              </div>
            </div>
            <hr />
            <div className={`itemDiv`}>
              <span className={`leftValue`}>burger</span>
              <div className={`itemvalues`}>
                <span>250.25</span>
                <span>3x</span>
                <span>250.25</span>
              </div>
            </div>
            <hr />
            <div>
              <span className={`leftValue`}>Subtotal</span>
              <span className={`rightValue`}>25</span>
            </div>
            <div>
              <span className={`leftValue`}>Charges</span>
              <span className={`rightValue`}>25</span>
            </div>
            <div>
              <span className={`leftValue`}>
                Tax &nbsp;&nbsp;&nbsp; VA state 2.5%
              </span>
              <span className={`rightValue`}>54</span>
            </div>
            <div>
              <span className={`leftValue`}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Fair tax country 2.5%
              </span>
              <span className={`rightValue`}>54</span>
            </div>
            <div>
              <span className={`leftValue`}>Delivery Amount</span>
              <span className={`rightValue`}>54</span>
            </div>
            <div>
              <span className={`leftValue`}>Total</span>
              <span className={`rightValue`}>54</span>
            </div>
            <div>
              <span className={`leftValue`}>Payment Status</span>
              <span className={`rightValue`}>Delivered</span>
            </div>
          </div>
        </div>
        <div className={`secondColumn`}>
          <div>
            <div>
              <span className={`leftValue title-lg`}>Loyalty Point</span>
            </div>
            <div>
              <span className={`leftValue`}>Earned</span>
              <span className={`rightValue`}>54</span>
            </div>
            <div>
              <span className={`leftValue`}>Redeemed</span>
              <span className={`rightValue`}>54</span>
            </div>
            <div>
              <span className={`leftValue`}>Balance Befor transaction</span>
              <span className={`rightValue`}>785</span>
            </div>
            <div>
              <span className={`leftValue`}>Balance After transaction</span>
              <span className={`rightValue`}>785</span>
            </div>
          </div>
          <div>
            <div>
              <span className={`leftValue title-lg`}>
                Block on Future transation
              </span>
            </div>
            <div>
              <span className={`leftValue`}>Form earning points</span>
              <span className={`rightValue`}>54</span>
            </div>
            <div>
              <span className={`leftValue`}>From Redeemed points</span>
              <span className={`rightValue`}>54</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bill;
