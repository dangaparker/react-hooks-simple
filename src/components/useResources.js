import { useState, useEffect } from 'react';
import axios from 'axios';


const useResources = (resource) => {
    const [resources, setResources] = useState([])

    // const fetchResource = async (resource) => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    //     setResources(response.data)
    // }

    useEffect(() => {
        //code below replaces the need to define fetchResources outside useEffect - we're defining a 
        //function and immediately invoking it.
        // fetchResource(resource)
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            setResources(response.data);
        })(resource);
    }, [resource])
    //need to have [] as second argument to prevent repeatedly updating (componendDidMount & componentDidUpdate issue)
    

    return resources;
}

export default useResources