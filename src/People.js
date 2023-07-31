import React from 'react'

const People = ({ data }) => {
    return (
        <div>
            {data ? (
                <div className='image_root'>
                    <div className='image1'>
                        <img src='./glassesImage/model.jpg' alt='' />
                        <div className='content'>
                            <p>{data.name}</p>
                            <p >{data.desc}</p>
                        </div>
                        {data && <img src={data.url} alt='' className='lasses_' />}
                    </div>
                    <div className='image2'>
                        <img src='./glassesImage/model.jpg' alt='' />
                        {data && <img src={data.url} alt='' className='lasses_' />}//
                    </div>
                </div>
            ) : (
                <div className='image_root'>
                    <div className='image1'>
                        <img src='./glassesImage/model.jpg' alt='' />
                    </div>
                    <div className='image2'>
                        <img src='./glassesImage/model.jpg' alt='' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default People
