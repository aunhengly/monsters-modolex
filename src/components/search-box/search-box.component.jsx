import './search-box.styles.css';

const SearchBox = ({className, onChangeHandle, placeholder})=>{
   return(
      <div>
         <input 
            className= {`'search-box' ${className}`}
            type='search'
            placeholder= {placeholder}
            onChange={onChangeHandle}
         />
      </div>      
   )
}

// class SearchBox extends Component {
//    render() {
//       const {className, onChangeHandle, placeholder} = this.props;
//       return (
//          <div>
//             <input 
//                className= {`'search-box' ${className}`}
//                type='search'
//                placeholder= {placeholder}
//                onChange={onChangeHandle}
//             />
//          </div>
//       )
//    }
// }

export default SearchBox;