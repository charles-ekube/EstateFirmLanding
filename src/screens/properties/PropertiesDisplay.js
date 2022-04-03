import React, { useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
// import Breadcrumbs from '../../utils/Breadcrumb'
import '../../assets/style/PropertyStyles.css';
import Home from '../../assets/images/home.jpeg';
import SortCard from '../../components/cards/SortCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShowFilterButton from '../../utils/ShowFilterButton';
import FilterModal from '../../components/modals/FilterModal';
import PropertyGridCards from '../../components/cards/PropertyGridCards';


const PropertiesDisplay = () => {


    const [state, setState] = useState({
        sortDrop: false,
        sortItem: [{ id: 1, name: 'Default' }, { id: 2, name: 'Newest' }, { id: 3, name: 'Oldest' },
        { id: 4, name: 'Lowest Price' }, { id: 5, name: 'Highest Price' }, { id: 6, name: 'Random' }],
        selected: 'Default', visible: false
    })

    const showSortDropDown = () => {
        if (state.sortDrop) {
            setState((prevState) => ({ ...prevState, sortDrop: false }))
        } else {
            setState((prevState) => ({ ...prevState, sortDrop: true }))
        }
    }


    function selectSortType(val) {
        setState((prevState) => ({ ...prevState, selected: val.name, sortDrop: false }))
        // console.log(val)
    }

    const showFilterModal = () => {
        setState((prevState) => ({ ...prevState, visible: true }))
    }
    const closeFilterModal = () => {
        setState((prevState) => ({ ...prevState, visible: false }))
    }

    return (
        // <Breadcrumbs />
        <>
            <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
                <section className='propertiesHomeContainer'>
                    <section >
                        <div>
                            <div className={'flex justifyBetween alignCenter pb40'}>
                                <div>
                                    <p className={'f30 headerColor boldText'}>Properties</p>
                                </div>
                                <div className={'flex alignCenter'}>
                                    <div>
                                        <p className={'flex alignCenter saveLink headerColor f14'}>
                                            <span style={{ marginRight: '5px' }}><FavoriteBorderIcon /></span>
                                            Save Search
                                        </p>
                                    </div>
                                    <div>
                                        <ShowFilterButton onClick={showFilterModal} />
                                    </div>
                                </div>
                            </div>
                            <div className={'pt20'}>
                                <SortCard result={'14'} onClick={showSortDropDown} dropDown={state.sortDrop} value={state.selected} >
                                    {state.sortItem.map((item) =>
                                        <p key={item.id} className={'f14 regularText headerColor pb10'} onClick={() => selectSortType(item)}>{item.name}</p>
                                    )}
                                </SortCard>
                            </div>
                        </div>
                    </section>
                    <section className='propertiesGridFull'>
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />

                    </section>
                </section>

            </RenderNav>
            <FilterModal visible={state.visible} closeModal={closeFilterModal} />

        </>
    )
}

export default PropertiesDisplay