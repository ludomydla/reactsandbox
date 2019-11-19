import React from 'react'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { MenuCategory } from '../_shared/types/definitions'
//import Input from '../_shared/components/Input'
//import Button from '../_shared/components/Button'
import Image from '../_shared/components/Image'
//import './OrdersPage.scss'
//import * as actions from './store/actions'
//import logo from '../../assets/images/qv-arch.svg'
//import { getUserName, getPassword } from './store/getters'
//import { bindActionCreators } from 'redux'

type OrdersPageProps = {
  menu: Array<MenuCategory>
}

type OrdersPageDispatchProps = {}
type OrdersPageState = {}

class OrdersPage extends React.Component<
  OrdersPageProps & OrdersPageDispatchProps,
  OrdersPageState
> {
  static mapStateToProps = (state: OrdersPageProps) => {
    return {
      menu: state.menu
    }
  }

  static mapDispatchToProps = (dispatch: any) => {}

  render() {
    const { menu } = this.props

    return (
      <div className='order-form__page'>
        {menu.map(category => (
          <div>
            <h3>{category.categoryId}</h3>
            <Image src={category.imageUrl} simple={true} />
          </div>
        ))}
      </div>
    )
  }
}

export default connect(
  OrdersPage.mapStateToProps,
  null
  //OrdersPage.mapDispatchToProps
)(OrdersPage)
