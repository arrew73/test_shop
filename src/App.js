import React from "react";
import './App.css';
import {getTVList} from "./Redux/Reducers/shop-reducers";
import {connect} from "react-redux";
import {ShopPage} from "./Components/ShopPage/ShopPage";

class App extends React.Component {
    componentDidMount() {
        this.props.getTVList()
    }

    render() {
        return (
            <div className="App">
                <h1 style={{textAlign:"center"}}>TV-SHOP</h1>
                <ShopPage itemsCount={this.props.totalCount} tvList={this.props.TV}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        TV: state.shop.tvList,
        totalCount: state.shop.itemsCount
    }
}

export default connect(mapStateToProps, {getTVList})(App);
