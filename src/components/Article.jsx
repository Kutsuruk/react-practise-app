import React, { PureComponent } from 'react'

class Article extends PureComponent {
    constructor(props) {
        super(props)
            this.state = {
                count: 0,
            }
    }

    /* shouldComponentUpdate(nextProps, nextState) {
        console.log('---', 'should update')

        return this.state.isOpen !== nextState.isOpen
    } */

    componentWillMount() {
        console.log('---', 'mounting')
    }

    /* componentWillReceiveProps(nextProps) {
        console.log('---', 'will receive props')

        if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    } */

    componentWillUpdate() {
        console.log('---', 'will update')
    }
    

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section className="card-text">{article.text}</section>
    return(
        <div className="card mx-auto" style={{width: '50%'}}>
            <div className="card-header">
                <h2 onClick={this.incrementCounter}>
                {article.title}
                 <div>clicked {this.state.count}</div>
                <button onClick={onButtonClick} className="btn btn-primary btn-md float-right">
                    {isOpen ? 'Close' : 'Open'}
                </button>    
                </h2>
            </div>
            <div className="card-body">
                {body}
                <h6 className="card-subtitle text-muted">
                    creation date: {(new Date(article.date)).toDateString()}
                </h6>
            </div>
        </div>
        )
    }

    incrementCounter = () => {
        console.log('---', 'counted')
        this.setState({
            count: this.state.count + 1
        })
    }

}



export default Article