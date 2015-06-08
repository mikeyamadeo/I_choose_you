import './style'
import React from 'react'
import pokemon from 'pokemon.store'
import FlexBox from 'obj.FlexBox'
import PokeballSet from './components/mol.PokeballSet'

const SelectPokemonView = React.createClass({

  getInitialState() {
    return {
      starters: pokemon.getStarters(),
      selectedPokemon: { index: -1 },
    }
  },

  handleSelect(index) {
    const { starters } = this.state

    this.setState({
      selectedPokemon: starters[index]
    })
  },

  render() {
    const {
      state,
      handleSelect
    } = this

    const {  
      starters,
      selectedPokemon
    } = state


    return (
      <FlexBox style={{height: '100%'}} alignItems='center' justify='center'>
        <FlexBox direction='column' alignItems='center'>
          { renderPokemon(selectedPokemon) }
          <div>
            <PokeballSet pokemon={ starters } 
              selectedPokemonIndex={ selectedPokemon.index }
              onSelect={ handleSelect } />
          </div>
          <button className={ `SelectPokemon_btn ${selectedPokemon.type}Type` }>
            <span className={ `SelectPokemon_name ${selectedPokemon.type}Type` }>
            { selectedPokemon.name }
            </span>
          </button>
        </FlexBox>
      </FlexBox>
    )
  }
})

export default SelectPokemonView

function renderPokemon(p = {}) {
  const classNames = (p.img) ?
    `SelectPokemon_showcase isOpen` :
    `SelectPokemon_showcase`

  return (
    <div className={classNames}>
      <img src={ p.img } />
    </div>
  )
}




