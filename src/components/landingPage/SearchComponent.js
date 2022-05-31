import React, { useState } from 'react'
import '../../assets/style/LandingPageStyles.css';
import '../../assets/style/GeneralStyles.css';
import CustomButton from '../../utils/CustomButton';
import CustomInput from '../../utils/CustomInput';
import http from '../../Utils';
import { toast } from 'react-toastify';
import { IoLocationOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {

    const [state, setState] = useState({ query: '', fetchedItems: {}, loading: false, showDropdown: false })

    const onChangeQuery = (e) => {
        setState({ ...state, query: e.target.value })
    }


    const search = async () => {

        setState({ ...state, loading: true })
        console.log(state.query)
        try {
            const res = await http.get('search-property', { search: state.query })
            setState({ ...state, fetchedItems: res.data, showDropdown: true, loading: false })
            console.log(res)
        } catch (error) {
            setState({ ...state, loading: false })
            toast.error('Sorry, could not find property', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(error)
        }

    }

    const navigate = useNavigate()
    function selectResourceType(val) {
        // console.log(val._id)
        if (val) {
            navigate('/properties-details', { state: { propertyId: val._id } })
        }

    }



    const searchResult = !Object.keys(state.fetchedItems).length ? (<p>No property found</p>) : state.fetchedItems.docs.map((property, index)   => {
        const { gallery, propertyTitle, friendlyAddress, status, price } = property
        const checkGallery = gallery[0] ? typeof gallery[0] : 'string'
        return (
            <section key={index} className={'transactionRowContainer'} style={{ overflow: 'auto' }}>
                <ul className={'fav-container overviewGrid pb10'}>
                    <li className={'f14 headerColor'} >
                        <div onClick={() => selectResourceType(property)} className='cPointer image-wrapper search-img'>
                            <div className="overlay"></div>
                            <span className="property-status">{status}</span>
                            <img src={ checkGallery === 'string' ? gallery[0] : gallery[0].url } alt={''}  />
                        </div>
                    </li>
                    <li className={'f14 headerColor'}>
                        <div className='flex alignCenter justifyBetween'>
                            <div>
                                <h3 onClick={() => selectResourceType(property)} className='headerColor cPointer'>{propertyTitle}</h3>
                                <div className='my20'>
                                    <IoLocationOutline />
                                    <span className='pl10'>{friendlyAddress}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="property-price redText">{price}</li>
                    {/* <li className={'f14 redText'}>{property.createdAt}</li> */}
                </ul>
            </section>
        )
        }
    )

    window.onclick = (e) => {
        const elem = document.querySelector('#searchModal')

        if (e.target !== elem) {
            setState({ ...state, showDropdown: false })
        }
    }

    return (
        <>
            <section className='transparentContainer'>
                <div className='searchBox'>
                    <CustomInput value={state.query} placeholder={'Please enter text'} onChange={onChangeQuery} name={'query'} />
                    <CustomButton onClick={search} title={'Search'} customStyle={{
                        backgroundColor: '#3E4C66', color: '#fff', padding: '10px 30px',
                        borderRadius: '6px', display: 'flex', justifyContent: 'center'
                    }} />

                    {state.showDropdown || state.loading ? 
                    <div className="searchDropdown" id='searchModal'>
                        <div>
                            {state.loading && <p>Loading...</p>}
                            {state.loading ? '' : searchResult}
                        </div>
                    </div> : ''}
                </div>
            </section>
        </>
    )
}

export default SearchComponent