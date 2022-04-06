import React from 'react'
import Item from './item'
import './prize.css'

function PrizeContainer() {
  return (
    <div className='main'>
        <Item
            title = 'FREE'
            prize = '$0'
            month ='/month'
            img = '../img/1.png'
            img2 = '../img/2.png'
            img3 = '../img/2.png'
            img4 = '../img/2.png'
            img5 = '../img/2.png'

            spec1 = 'Single User'
            spec2 = '5GB Storage'
            spec3 = 'Unlimited Public Projects'
            spec4 = 'Community Access'
            spec5 = 'Inlimited Private Projects'
            spec6 = 'Dedicated Phone Support'
            spec7 = 'Free Subdomine'
            spec8 = 'Monthly Status Reports'
        />
        <Item
            title = 'PLUS'
            prize = '$9'
            month ='/month'
            img = '../img/1.png'
            img3 = '../img/1.png'
            img4 = '../img/1.png'
            img5 = '../img/1.png'
            img2 = '../img/2.png'
            
            spec1 = '5 User'
            spec2 = '50GB Storage'
            spec3 = 'Unlimited Public Projects'
            spec4 = 'Community Access'
            spec5 = 'Unlimited Private Projects'
            spec6 = 'Dedicated Phone Support'
            spec7 = 'Free Subdomine'
            spec8 = 'Monthly Status Reports'
        />
        <Item
            title = 'PRO'
            prize = '$49'
            month ='/month'
            img = '../img/1.png'
            img3 = '../img/1.png'
            img4 = '../img/1.png'
            img5 = '../img/1.png'
            img2 = '../img/1.png'
            
            spec1 = 'Unlimited User'
            spec2 = '150GB Storage'
            spec3 = 'Unlimited Public Projects'
            spec4 = 'Community Access'
            spec5 = 'Unlimited Private Projects'
            spec6 = 'Dedicated Phone Support'
            spec7 = 'UnlimitedFree Subdomine'
            spec8 = 'Monthly Status Reports'
        />
    </div>
  )
}


export default PrizeContainer