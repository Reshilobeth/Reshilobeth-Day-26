import React from 'react'

function Item(props){
  return (
    <div className='container'>
        <p className='title'>{props.title}</p>
            <div className='prize'> 
                <h1 className='prize-text'>{props.prize}</h1>
                <p>{props.month}</p>
            </div>
        <div className='spec'>
            <p> <img src ={props.img} alt='icon' className='icon'/>{props.spec1}</p>
            <p> <img src ={props.img} alt='icon' className='icon'/>{props.spec2}</p>
            <p> <img src ={props.img} alt='icon' className='icon'/>{props.spec3}</p>
            <p> <img src ={props.img} alt='icon' className='icon'/>{props.spec4}</p>
            <p> <img src ={props.img5} alt='icon' className='icon'/>{props.spec5}</p>
            <p> <img src ={props.img4} alt='icon' className='icon'/>{props.spec6}</p>
            <p> <img src ={props.img3} alt='icon' className='icon'/>{props.spec7}</p>
            <p> <img src ={props.img2} alt='icon' className='icon'/>{props.spec8}</p>
        </div>
        <div className='btn-container'>
            <button className='btn'>BUTTON</button>
        </div>
    </div>
  )
}

export default Item