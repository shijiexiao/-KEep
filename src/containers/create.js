import React from 'react'
import Ionicon from 'react-ionicons'
import {testCategories} from "../testData";
import {TYPE_OUTCOME} from "../utility";
import {Tabs,Tab} from '../components/Tabs'
import CategorySelect from '../components/CategorySelect'
import PriceForm from '../components/PriceForm'

class Create extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            selectedTab: TYPE_OUTCOME,
            selectedCategory: null,
            validationPassed: true,
        }

    }
    render(){
        const { selectedTab, selectedCategory, validationPassed } = this.state

        const filterCategories=testCategories.filter(category =>category.type ===TYPE_OUTCOME)
        return (
            <div className="create-page py-3 px-3 rounded mt-3" style={{backgroundColor:'#fff'}}>
                <Tabs activeIndex={0} onTabChange={()=>{}}>
                    <Tab>支出</Tab>
                    <Tab>收入</Tab>


                </Tabs>
                <CategorySelect
                    categories={filterCategories}
                    onSelectCategory={()=>{}}
                    selectedCategory={selectedCategory}
                >

                </CategorySelect>
                <PriceForm
                    onFormSubmit={()=>{}}

                    onCancelSubmit={()=>{}}>

                </PriceForm>


            </div>
        )
    }

}
export default Create