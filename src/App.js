import React, { Component } from 'react'
import {ThumbnailComp} from './ThumbnailComp'
const BASE_URL = 'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?';
const FETCH_URL = BASE_URL + 'market=ES&album_type=single&limit=10';
const accessToken = 'BQDq4glFukWSl1fBTAYnkT5-9cX80QnHD3qDiNv6hBkMYlEoI60wYF8G7UDOYyuy-5oIg7azaS5kRyBD8zu64JZc0FK8jHSqJX1M3WSp8p6_xWb4eq8C9voUcABOK-jHJ_zYzzfJeVxbc9NbcgCuCaSyAJyBOw'
let myOptions = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    mode: 'cors',
    cache: 'default'
  };
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        albums: []
    }
  }

  componentWillMount(){
        fetch(FETCH_URL, myOptions).then(response => response.json()) .then(json=>{
          const album = json.items;
          this.setState({albums:album})

          console.log("hhhh",album)
        }) 
  }
  filter(e){ 
      this.setState({filter:e.target.value}) 
  }

  render() {
      let albumArray = this.state.albums
      // const items = arr.filter(function (i) {
      //     console.log("albumtype",i.album_type)
      //     return i.album_type
      // })
      // console.log("yyy",items)
      if(this.state.filter){
          albumArray = albumArray.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))         }

    return (
      // return JSX
      <div className="container">
          <h1 className='header'>Album App </h1>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <h2>Search Albums</h2>
                      <div id="custom-search-input">
                          <div className="input-group col-md-12">
                              <input onChange={this.filter.bind(this)} type="text" className="form-control input-lg" placeholder="search" />
                              <span className="input-group-btn">
                        <button className="btn btn-info btn-lg" type="button">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {albumArray.map((ele,key) => {
              console.log(ele+'dd'+key)
              return <ThumbnailComp key={key} data={ele}/>
          })}
      </div>
    )
  }
}
export default App;
