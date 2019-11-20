import React from 'react'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { MenuCategory, Category } from '../_shared/types/definitions'
//import Input from '../_shared/components/Input'
//import Button from '../_shared/components/Button'
import Image from '../_shared/components/Image'
import './OrdersPage.scss'
//import * as actions from './store/actions'
//import logo from '../../assets/images/qv-arch.svg'
//import { getUserName, getPassword } from './store/getters'
//import { bindActionCreators } from 'redux'

type OrdersPageProps = {
  menu: Array<MenuCategory>
  categories: Array<Category>
}

type OrdersPageDispatchProps = {}
type OrdersPageState = {}

class OrdersPage extends React.Component<
  OrdersPageProps & OrdersPageDispatchProps,
  OrdersPageState
> {
  static mapStateToProps = (state: OrdersPageProps) => {
    return {
      menu: state.menu,
      categories: state.categories
    }
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  //static mapDispatchToProps = (dispatch: any) => {}

  render() {
    const { menu, categories } = this.props

    return (
      <div className='order-form__page'>
        <ul className='order-form__list'>
          {menu.map((category, catIndex) => (
            <li className='order-form__category-item' key={catIndex}>
              <Image
                src={`assets/images/${category.imageUrl}`}
                label={categories[category.categoryId - 1].name}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(
  OrdersPage.mapStateToProps,
  null
  //OrdersPage.mapDispatchToProps
)(OrdersPage)
