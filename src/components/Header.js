import React from 'react'
import "./Header.css"
import "./Header2.css"
import testimage from './assets/nature.jpg'
const Header = () => {
    const lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";


    return (
        <div>
                      <div className="gradient"></div>
        <div className='image3' style={{backgroundImage:`url(${testimage})`}}>
        </div>
      <div className="headerContainer">

        <h1 className="header mainHeader">Travel Anywhere</h1>
        <h2 className="header subHeader">Explore the World</h2>
        <p className="header headerText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
    );
}

export default Header
