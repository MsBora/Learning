import axios from 'axios'

// const searchImages =()=>{

// }

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers:{
        Authorization:'Client-ID 3883afcf5768e6c8e67db67c07cf5765c866d47b152d353387817e47c3e3067c'
    }
})