import React, { Component } from 'react'
import SearchInput from '../../components/SearchInput'
import Content from '../../components/Content';
import API from '../../utils/API';

class HomePage extends Component {

    //State
    state = {
        result : [],
        filteredResult : [],
        sortedResult : [],
        search: "",
        counter: 1
    }

    //react lifecycle

    componentDidMount(){
        this.loadEmployees();
    }

    //Function
    loadEmployees = () => {
        API.getEmployeesList().then(response =>{
            console.log(response.data.results)
            this.setState({result: response.data.results})
        }).catch(error => console.log(error))
    }

    handleInputChange = async(event) => {
        console.log(event.target.value)
        await (this.setState({search :event.target.value}))
        this.filterEmployees()
      }
      
    filterEmployees = () =>{
       
        let newResult = this.state.result.filter((employee)=> employee.name.first.toLowerCase().includes(this.state.search.toLowerCase())
        ||employee.name.last.toLowerCase().includes(this.state.search.toLowerCase()))
        console.log('testing',newResult)
        this.setState({filteredResult: newResult})
        console.log('filtered state',this.state.filteredResult)
    }

    sortEmployees = async(e) => {
        // this.state.counter++
        console.log('testing e', e.target.id)
        // let selected =e.target.id
        let sorting= await this.state.result.sort((a,b) => (a.name.first > b.name.first) ? this.state.counter : ((b.name.first > a.name.first) ? this.state.counter*-1 : 0))
        console.log('sorting',sorting)
        this.setState({counter: this.state.counter*(-1)})
        console.log(this.state.counter)
        this.setState({result: sorting})
        console.log('this.state.sortedResult',this.state.result )

    }

    //Render JSX
    render() {
        return (
            <div >
                <h1 style={{textAlign:'center', color:'white', cursor:'default'}}>Employee Directory</h1>
                {/* <p style={{textAlign:'center', color:'white', cursor:'default'}}>Welcome Back Manager</p> */}
                <SearchInput  handleInputChange = {this.handleInputChange}/>
                <Content result={ (this.state.search.length>0) ? this.state.filteredResult: this.state.result}
                sortEmployees = {this.sortEmployees} />
            </div>
        )
    }
}


export default HomePage;