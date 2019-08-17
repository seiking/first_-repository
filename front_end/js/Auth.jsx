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
      player_lists: [{name: '', position_number: 0}], //[{player1},{player2},..,{player10}]の形で入れる。
    }
    this.roulet = this.roulet.bind(this)//stateの値を変える時にbindが必要
    this.playerNameSubmit = this.playerNameSubmit.bind(this)
    this.playerCount = this.playerCount.bind(this)

  }
  roulet(e){
    e.preventDefault()
    // randnum_newは1~10のランダムな数字を変数に入れて、stateのrandnumに代入する
    // reactのstateでは配列の特定の一部の値を変更できないので変数にコピーをつくってあげて一気に変える
    var randnum_new =  Math.ceil( Math.random()* 10)
    var player_lists_new = this.state.player_lists
    player_lists_new[0].position_number = player_lists_new[0].position_number + randnum_new
    this.setState({ randnum: randnum_new, player_lists: player_lists_new })//setStateはstateの変数を値に代入する時（stateは普通の変数と違ってこうしないと書き換えれない）
  }
  playerNameSubmit(e){
    e.preventDefault()
    var player_lists_new = this.state.player_lists
    player_lists_new[0].name = document.getElementById("playername").value
    this.setState({ player_lists: player_lists_new })
  }
  playerCount(e){
    e.preventDefault()
    var numOfPeople = Number(document.getElementById("playerCount").value)
    var result = window.confirm(`${numOfPeople}人で始めますか？`)
    if(result) {
      var player_lists_new = []
      for (var i = 0; i < numOfPeople; i++) {
        player_lists_new.push({name: '', position_number: 0})
      }
      // console.log(player_lists_new)
      this.setState({ player_lists: player_lists_new })
      console.log("start!!!!!!!!!!!!!!!")
    } else {
      location.reload()
    }
  }
  render(){
    return(
      <div>
        <p>{this.state.randnum}</p>
        <input type="button" value="サイコロ" onClick={this.roulet}/>
        <p>名前/位置</p>
        <p>{`${this.state.player_lists[0].name}/${this.state.player_lists[0].position_number}`}</p>
        <form onSubmit={this.playerNameSubmit}>
          <pre><input type ="text" id="playername" name="playername" placeholder="君の名前を教えて"/></pre>
          <input type="submit" value="決定"/>
        </form>
        <p>人数を教えてね</p>
        <form onSubmit={this.playerCount}>
          <select id="playerCount">
            <option value="1">1人</option>
            <option value="2">2人</option>
            <option value="3">3人</option>
            <option value="4">4人</option>
          </select>
          <input type="submit" value="決定"/>
        </form>
      </div>

    )
  }
}

export default Auth
