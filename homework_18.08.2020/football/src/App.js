import React from 'react';
import './App.css';
import { DATA } from './data/teams.js'

class Club extends React.Component {
    render() {
        return (
            <div className="club">
                <h1>{this.props.clubCont.name}</h1>
                <img src={this.props.clubCont.image} alt={this.props.clubCont.name}/>
                <p><b>City: </b> {this.props.clubCont.city}</p>
                <p><b>Foundation date: </b> {this.props.clubCont.founation}</p>
            </div>
        )
    }
}

class Achievement extends React.Component {
    render() {
        return (
            <div className="achivement">
                <p><b>Medals: </b> {this.props.achievCont.medals}</p>
                <p><b>Cups: </b>{this.props.achievCont.cups}</p>
                <p><b>Goals: </b>{this.props.achievCont.goals}</p>
            </div>
        )
    }
}

class Team extends React.Component {
    render() {
        return (
            <div className="team">
                <p><b>Team:</b></p>
                <ul>
                    {this.props.teamCont.map(player => {
                        return (
                            <li key={player}>{player}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default class App extends React.Component {
  render() {
      const styles = [
          {color: "white", backgroundColor: "black"},
          {color: "black", backgroundColor: "white"},
          {color: "grey", backgroundColor: "orange"}];
      const getStyle = () => {
          function getRandom(max) {
              return Math.floor(Math.random() * Math.floor(max));
          }
          return styles[getRandom(styles.length)];
      };
      return (
          <div className="App" style={getStyle()}>
              {DATA.map(content => {
                  return (
                      <div className="content" key={content.id}>
                          <Club clubCont={content.club} />
                          <Achievement achievCont={content.acivement}/>
                          <Team teamCont={content.team}/>
                      </div>
                  )
              })}
          </div>
      )
  }
}