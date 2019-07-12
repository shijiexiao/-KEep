import React from 'react'
import Ionicon from 'react-ionicons'
import {LIST_VIEW ,CHART_VIEW} from "../utility";

const generateLinkClass=(current,view)=>{
    return (current===view) ? 'nav-link active':'nav-link'
}
const ViewTab=({activeTab,onTabChane})=>(
    <ul className="nav nav-tabs nav-fill my-4">
        <li className="nav-item">

            <a href="#"
               onClick={Event =>{Event.preventDefault(); onTabChane(LIST_VIEW)}}

               className={generateLinkClass(activeTab,LIST_VIEW)}>
                <Ionicon className="rounded-circle mr-2"
                         fontSize="25px"
                         color={'#007bff'}
                         icon='ios-paper'

                >

                </Ionicon>
                列表模式
            </a>

        </li>
        <li className="nav-item">
            <a href="#"
               onClick={Event =>{Event.preventDefault(); onTabChane(CHART_VIEW)}}

               className={generateLinkClass(activeTab,CHART_VIEW)}>
                <Ionicon className="rounded-circle mr-2"
                         fontSize="25px"
                         color={'#007bff'}
                         icon='ios-pie'

                >

                </Ionicon>
                图表模式
            </a>

        </li>
    </ul>
)
export default ViewTab