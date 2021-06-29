import React from 'react';

export default class Footer extends React.Component {
  render() {
    return <footer className="footer">
      <div className="footer-info">
        <div className="footer-info__menu">
          <h3>Menu</h3>
          <nav>
            <span>Cake</span>
            <span>Bread & Panstry</span>
            <span>Beverages</span>
          </nav>
        </div>
        <div className="footer-info__contact">
          <div>Address: No.1 Nguyen Trai, Thanh Xuan, Ha Noi</div>
          <div>Tel: +84 0506070809</div>
          <div>Mail: bakery@gmail.com</div>
        </div>
      </div>
      <div className="copyright">
        <span>Copyright 2021. All rights reserved by someone</span>
      </div>
    </footer>;
  }
}