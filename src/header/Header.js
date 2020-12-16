import React from 'react' 
import {Link} from 'react-router-dom'   
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/Shop"



function Header() {
    return (
        <nav className="header">
            <Link to="/login">
            <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt=""
                />
            </Link>
            <div className="header_search">
            <input type="text" className="header_searchInput"></input>
            <SearchIcon className="header_searchIcon" />
            </div>
            {/* link for 1 */}
            <div className="header_Nav">
                <Link className="header_link">
                    <div className="header_option">                        
                        <span className="header_optionLineOne">Hello</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>
            </div>
            {/* link for 2 */}
            <div className="header_Nav">
                <Link className="header_link">
                    <div className="header_option">                        
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo" >& Order</span>
                    </div>
                </Link>
            </div>
            {/* link for 3 */}
            <div className="header_Nav">
                <Link className="header_link">
                    <div className="header_option">                        
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            {/* link for 4 */}
            <Link className="header_link" to="/checkout">
                <div className="header_optionBasket">                        
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo" className="header_optionCount">0</span>
                </div>
            </Link>
        </nav>
    )
}
export default Header;