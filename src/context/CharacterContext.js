import React from 'react'

const CharacterContext = React.createContext({
  charaList: [],
  newChara: {},
  error: null,
  // setError: () => {},
  // clearError: () => {},
  // setCharaList: () => {},
  saveNewCharacter: () => {},
  setNewCharacter: () => {},
  deleteCharacter: () => {},
  // onLogin: () => {},
  fetchCharacters: () => {},
})

export default CharacterContext

// export class CharacterProvider extends Component {
//   state = {
//     charaList: [],
//     newChara: {},
//     error: null,
//   };

//   setCharaList = charaList => {
//     this.setState({ charaList })
//   }

//   setError = error => {
//     console.log(error)
//     this.setState({ error })
//   }

//   clearError = () => {
//     this.setState({ error: null })
//   }

//   setNewCharacter = (newChara) => {
//     this.setState({ newChara: newChara })
//   }

//   render() {
//     const value = {
//       charaList: this.state.charaList,
//       error: this.state.error,
//       setError: this.setError,
//       clearError: this.clearError,
//       setCharaList: this.setCharaList,
//     }
//     return (
//       <CharacterContext.Provider value={value}>
//         {this.props.children}
//       </CharacterContext.Provider>
//     )
//   }

// }