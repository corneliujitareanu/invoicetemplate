import React from 'react';

const Template = ({data}) => {

  return (
      <div id={'invoice'}>
        <h1>{data.title||'Invoice'}</h1>
        <h3>Client: {data.bill_to}</h3>
        <table width={'700px'}>
            <thead>
                <tr><td>Item</td><td>Description</td><td>Price/Unit</td><td>Price</td></tr>
            </thead>
            <tbody>
              {data.invoiceitems && data.invoiceitems.map( item => {
                return (
                  <tr key={item.id}><td>{item.item}</td><td>{item.description}</td><td>{item.quantity}</td><td>{item.price_unit*item.quantity}</td></tr>
                )
              })}
            </tbody>
        </table>
      </div>
  )
}
  
export default Template