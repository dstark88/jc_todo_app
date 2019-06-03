'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#App_container');
ReactDOM.render(e(App), domContainer);


// import React from 'react';

// function App() {
//   return (
//     <div>
//         <p>
//           Learn React
//         </p>
//     </div>
//   );
// }

// export default App;
