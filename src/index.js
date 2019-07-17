import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './seasonDisplay'
import Spinner from './spinner';

class App extends Component{
    
    state={
        lati:'',
        errorMessage:'',
        error:false
    } 


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {this.setState({lati:position.coords.latitude})},
            (err)=>{this.setState({errorMessage:err.message,error:true})}
        )
    }

    renderContent(){
        if(this.state.error){
            return <div>Error:{this.state.errorMessage}</div>
        }
        if(this.state.lati){
            return <div><SeasonDisplay lat={this.state.lati}/></div>
        }
        return <Spinner message='Please accept location Request'/>
       }
    

render(){
return(
    <div className='borderRed'>
        {this.renderContent()}
    </div>
);
    
}
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)