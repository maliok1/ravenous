import React from 'react';
import './BusinessList.css'
import Business from '../Business/Business.js'

class BusinessList extends React.Component {
  render(){
    const business = this.props.businesses.map(business => {
      return <Business key={business.id} business={business} />
    })
    return(
      <div className="BusinessList">
       {business}
      </div>
    )
  }
}

export default BusinessList;
