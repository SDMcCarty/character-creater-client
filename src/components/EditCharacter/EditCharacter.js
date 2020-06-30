import React, { Component } from 'react';

class EditCharacter extends Component {

  render() {
    return (
      <>
        <p>Click on section below to edit it</p>

        <form>
        <section class="character">
          <p>Name: <input type="text" placeholder="[Name or initials]"></input></p>
          <p>Major Trait:</p>
          <p>The event:<textarea>[event]</textarea></p>
        </section>
      
        <a href="characterID.html"><button type="submit">Save Character</button></a>
        <a href="characterlist.html"><button type="button">Cancel Edit</button></a>
        <a href="/back"><button type="button">Delete character</button></a>
        </form>
      </>
    )
  }
}

export default EditCharacter