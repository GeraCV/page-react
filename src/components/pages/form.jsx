import React from 'react'


class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: ''
    }

    this.duplicateText = this.duplicateText.bind(this)
  }


  duplicateText({ value }, type) {
    this.setState({
      [type]: value
    })
  }

  render() {
    return (
      <div className="ed-grid">
        <h1 className="center"> Formulario </h1>
        <form>
          <div className="ed-grid m-grid-2">
            <div className="form__item">
              <label htmlFor=""> Ingresa tu nombre </label>
              <input type="text"
                onChange={(e) => this.duplicateText(e.target, 'name')
                }
              />
            </div>
            <div className="form__item">
              <label htmlFor=""> Ingresa tu correo </label>
              <input type="email"
                onChange={(e) => this.duplicateText(e.target, 'email')}
              />
            </div>
          </div>
        </form>
        <div>
          <h4> {`Hola ${this.state.name}`} </h4>
          {<h4> {`tu correo es ${this.state.email}`} </h4>}
        </div>
      </div>
    )
  }
}

export default Form
