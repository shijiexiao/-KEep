import React from 'react'

class CategorySelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategoryId: props.selectedCategoryId && props.selectedCategoryId.id

        }
    }

    selectCategory = (event, category) => {

        this.setState({
            selectedCategoryId:category.id

        })
        this.props.onSelectCategory(category)
        event.preventDefault()
    }

    render() {
        const {categories} = this.props
        const {selectedCategory} = this.state
        return (
            <div className="category-select-Component">
                <div className="row">
                    {
                        categories.map((category, index) => {
                            const activeClassName = (selectedCategory === category.id)
                                ? 'category-item col-3 active' : 'category-item col-3'

                            return (

                                <div className={activeClassName}
                                     onClick={(event) => {
                                         this.selectCategory(event, category)
                                     }}

                                     key={index}>
                                    <Ionicon
                                        className="rounded-circle"
                                        fontSize="50px"
                                        color="#555"
                                        icon={category.iconName}

                                    >

                                    </Ionicon>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}