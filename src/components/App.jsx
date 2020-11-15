import React, { Component } from 'react'
import ArticleList from './ArticleList/ArticleList'
import articles from '../fixtures'



class App extends Component {
    state = {
        reverted: false
    }

    render() {
        return(
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">
                    React learning/practise
                    <button onClick={this.revert} className="btn btn-primary btn-md float-right mx-auto">Revert</button>
                </h1>
            </div>
        
            <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
        </div>
    )
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
    
}


export default App;