import React from 'react';

class Userclass extends React.Component {
    //for props
    constructor() {
        super();
        // this.name = props.name;
        //stateVar and state is reserved word 
        // this.state ={
        //     count:0,
        // }
        console.log('constructor called');
        this.state = {
            userInfo :{
                name: 'ram',
                location: 'default',
                avatar_url: 'https://dummy'
            }
        }


    }
   async componentDidMount(){
    console.log('componentDidMount called');
    //API call
     const data = await fetch('https://api.github.com/users/shubham9624');
     const jsonData = await data.json();
    //  console.log(jsonData);
     this.setState({
        userInfo:jsonData
     });
   }
   componentDidUpdate(){
    console.log('componentDidUpdate called');
    // update UI based on new state
   }
   componentWillUnmount(){ 
    console.log('componentWillUnmount called');
   }
    render() {
        console.log('render() called');
        // const {count} = this.state;
        const {name, location,avatar_url} = this.state.userInfo;
        return (
            <div className='usercard'>
            {/* <h1>Count : {count}</h1> */}
            {/* change state variable and never update state var directly ex:- this.state.count+1 */}
            {/* <button style={{ width: '100px' }} onClick={()=>{
                this.setState(
                    {
                        count: this.state.count + 1
                    }
            );
            }}>Change State var</button> */}
            <img className='avtar-image'src={avatar_url}></img>
            <h2>Name : {name}</h2>
            <h3>Location :- {location}</h3>
            <h3>Contact :- 8871924356</h3>
        </div>
        )
    }

};

export default Userclass;

/**
 * constructor (dummy)
 * Render dummy
 *   <HTML> dummy
 * component did mount
 *      <API calls>
 *      <this.setState> (stata var is updated)
 * 
 * --- UPDATE --------------------------------
 * 
 *   render (API data)
 *      <HTML new (new API data)>
 *   component did update call
 * 
 * 
 */