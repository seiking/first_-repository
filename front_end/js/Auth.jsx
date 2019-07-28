import React from 'react'
// import ReactDom from 'react-dom'
// import Counter from './counter/Counter'
// import Signin from './Signin'
// import Style from './App.css'
class Auth extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      randnum: 0,
      player_lists: [{name: 'nao', position_number: 0},{name: 'seiya', position_number: 0}] //[{player1},{player2},..,{player10}]の形で入れる。
    }
    this.roulet = this.roulet.bind(this)
  }
  roulet(e){
    e.preventDefault()
    this.setState({ randnum: Math.ceil( Math.random()* 10) })
  }
  render(){
    console.log(this.state.player_lists[0])
    return(
      <div>
        <p>{this.state.randnum}</p>
        <input type="button" value="サイコロ" onClick={this.roulet}/>
        <p>名前/位置</p>
        <p>{`${this.state.player_lists[0].name}/${this.state.player_lists[0].position_number}`}</p>
        <p>{`${this.state.player_lists[1].name}/${this.state.player_lists[1].position_number}`}</p>
      </div>
    )
  }
}

export default Auth
