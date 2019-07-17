import React,{Component} from 'react'
import unsplash from './api/unsplash'
import SearchBar from './searchBar'
import ImageList from './imageList'
class App extends Component{
    
    state={
        images:[]
    }

    onSearchSubmit = async (term) => {                                //async
        const response=await unsplash.get('/search/photos',{                             //const response = await axios.get("",{}) 
            params:{ query:term}
        })
        /*Alternate way----> can use here at the end of the axios call 
        .then((response)=>{
            console.log(response.data.results)
        })*/
        this.setState({images:response.data.results})

    }
    
    render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <ImageList images ={this.state.images}/>
            </div>
        )
    }
}

export default App