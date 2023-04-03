import React, { useState } from 'react'
import styled from 'styled-components'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)

  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt=""></img>
        </a>
        <Menu>
            {cars && cars.map((car, index)=> {
                <a key={index} href="#">{car}</a>
            }) }
        </Menu>

        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla</a>
            <CustomMenu onClick={()=>{setBurgerStatus(true)}}>
                <a id="menu" href="#">=</a>
            </CustomMenu>
        </RightMenu>

        <BurgerNav show={burgerStatus}>
            <li id="close-li" onClick={()=>{setBurgerStatus(false)}}><a id="close" >X</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Existing Inventory</a></li>

        </BurgerNav>


    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

    #menu {
        font-weight: 800;
        font-size: 20px;
    }
`

const CustomMenu = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
  
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }

    #close {
        font-weight: 600;
        font-size: 20px;
        margin-top: 0;
        color: black;
        cursor: pointer;
    }

    #close-li {
        padding: 0;
        padding-right: 10px;
        text-align: end;
        border-bottom: none;
    }

    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
`