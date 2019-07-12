import React from 'react'
import logo from '../logo.svg'
import {CHART_VIEW, LIST_VIEW, padLeft, parseToYearAndMonth, TYPE_OUTCOME} from '../utility'
import PriceList from '../components/PriceList'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'
import CreateBtn from '../components/CreateBtn'
import ViewTab from '../components/ViewTab'

const categories = {
    1: {
        id: 1,
        name: '旅行',
        type: 'outcome',
        iconName: 'ios-plane'
    },
    2: {
        id: 1,
        name: '旅行',
        type: 'outcome',
        iconName: 'logo-yen'
    }
}

const items = [{
    id: 1,
    title: "去杰哥的城堡旅游",
    price: 200,
    date: "2019-07-12",
    cid: 1
}, {
    id: 2,
    title: "去天界的城堡旅游",
    price: 999,
    date: "2019-06-12",
    cid: 1
}, {
    id: 3,
    title: "去堡旅游",
    price: 999,
    date: "2019-01-12",
    cid: 2
}, {
    id: 4,
    title: "Jack森保旅游",
    price: 999,
    date: "2019-01-12",
    cid: 2
}]

const newItem = {
    id: 5,
    title: "new geiba",
    price: 666,
    date: "2019-01-12",
    cid: 2
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW
        }
    }

    changeView = (view) => {
        this.setState({
            tabView: view
        })

    }
    changeDate = (year,month) => {

        this.setState({
            currentDate:{year,month}
        })
    }
    modifyItem = (modifyItem) => {
        console.log('shabi');
        const modifiedItems=this.state.items.map(
            item => {
                if (item.id === modifyItem.id)
                {
                    return {...item,title:'更新后的标题'}
                }else{
                    return item
                }
            }
        )
        this.setState({
            items:modifiedItems
        })
    }
    createItem = () => {
        this.setState({
            items: [newItem, ...this.state.items]

        })
    }
    deleteItem = (deletedItem) => {
        const filteredItems = this.state.items.filter(items => items.id !== deletedItem.id)
        this.setState({
            items: filteredItems
        })


    }

    render() {
        const {items, currentDate, tabView} = this.state
        const itemWithCategory = items.map(e => {
            e.category = categories[e.cid]
            return e
        }).filter(item =>{
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)

        })


        let totalIncome = 0, totalOutcome = 0
        itemWithCategory.forEach(item => {
            if (item.category.type == TYPE_OUTCOME) {
                totalOutcome += item.price
            } else {
                totalIncome += item.price
            }
        })
        return (
            <React.Fragment>
                <header className="App-header">
                    <div className="row mb-5 mt-5">
                        <img src={logo} className="App-logo" alt="logo"/>

                    </div>
                    <div className="row col-10 mt-5">
                        <div className="col">
                            <MonthPicker
                                year={currentDate.year}
                                month={currentDate.month}
                                onChange={this.changeDate}
                            ></MonthPicker>
                        </div>
                        <div className="col">
                            <TotalPrice
                                income={totalIncome} outcome={totalOutcome}>

                            </TotalPrice>
                        </div>
                    </div>

                </header>
                <div className="content-area py-3 px-3">
                    <ViewTab
                        activeTab={tabView}
                        onTabChane={this.changeView}
                    ></ViewTab>
                    <CreateBtn onClick={this.createItem}>

                    </CreateBtn>

                    {tabView === LIST_VIEW &&


                    <PriceList items={itemWithCategory}
                               onModifyItem={this.modifyItem}
                               onDeleteItem={this.deleteItem}
                    ></PriceList>

                    }
                    {tabView === CHART_VIEW &&
                    <h1>fuck chart</h1>


                    }

                </div>


            </React.Fragment>
        )
    }
}


export default Home