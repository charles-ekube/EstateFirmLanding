import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import RenderNav from '../../components/nav/RenderNav'
import CustomButton from '../../utils/CustomButton'
import CustomInput from '../../utils/CustomInput'
import CustomInputDrop from '../../utils/CustomInputDrop'
import SimpleMap from '../../utils/Map'
import '../../assets/style/PropertyStyles.css';
import SortCardTwo from '../../components/cards/SortCardTwo'
import PropertyListCards from '../../components/cards/PropertyListCard'
import PropertyGridCards from '../../components/cards/PropertyGridCards'
import Home from '../../assets/images/home.jpeg';

const PropertiesMap = () => {


    const [state, setState] = useState({
        menuDrop: false, grid: true, list: false
    })

    const showDropMenu = () => {
        if (state.menuDrop) {
            setState((prevState) => ({ ...prevState, menuDrop: false }))
        } else {
            setState((prevState) => ({ ...prevState, menuDrop: true }))
        }

    }

    const showGrid = () => {
        setState((prevState) => ({ ...prevState, grid: true, list: false }))
    }

    const showList = () => {
        setState((prevState) => ({ ...prevState, grid: false, list: true }))
    }


    return (
        <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
            <main className={'propertiesMapContainers'}>
                <section className='mapContainer'>
                    <SimpleMap />
                </section>
                <section className={'pt30 pr30 pb30 pl30 propertiesDisplay'}>
                    <div className='searchGridContainer'>
                        <div>
                            <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                color={'#484848'} placeholder={'Filter by...'}>

                            </CustomInputDrop>
                        </div>

                        <div>
                            <CustomInput placeholder={'Enter Keyword...'} icon={<IoMdArrowDropdown size={22} color={'#fff'} />} />
                        </div>
                        <div>
                            <CustomButton title={'Search'} customStyle={{ backgroundColor: '#f53c41', height: '26px' }} color={'#fff'} />
                        </div>
                    </div>

                    <div>
                        <SortCardTwo listClick={showList} gridClick={showGrid} result={'6'} />
                    </div>


                    {/* <PropertyListCards /> */}
                    {state.grid && <section className='columnsGrid'>

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
                    </section>}

                    {state.list && <section className='listGrid'>

                        <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />   <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />   <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />   <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />   <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />   <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                        />
                    </section>}
                </section>
            </main>
        </RenderNav>
    )
}

export default PropertiesMap