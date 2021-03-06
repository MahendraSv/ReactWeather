var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

var Examples = (props) => {
  return (
        <div>
          <h1 className="text-center">Examples</h1>
          <p>Here are a few exampl location to try out!</p>
          <ol>
            <li>
              <Link to='/?location=Bangalore'>Bangalore</Link>
            </li>
            <li>
              <Link to='/?location=Nellore'>Nellore, AP</Link>
            </li>
            <li>
              <Link to='/?location=Visakhapatnam'>Visakhapatnam, AP</Link>
            </li>
          </ol>
        </div>
      );
};

module.exports = Examples;
