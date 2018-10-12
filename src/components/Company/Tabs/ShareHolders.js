import React, {Component} from 'react';
import ShareholderTable from '../ShareholderTable';

class ShareHolders extends Component{
  constructor(){
    super()

    this.state = {
      shareholders_corporate: ' '
    }
  }

  // called from the parent onBlur or checkbox onClick
  updateState = (name, componentState) => {
    this.setState({ ...this.state,
      [name]: componentState
    })
  }

  render(){

    const individualsTable = {
      thead: [
        {
          icon: "sh-name",
          name: "Full name"
        },
        {
          icon: "sh-id",
          name: "ID"
        },
        {
          icon: "sh-phone",
          name: "Phone number"
        },
        {
          icon: "sh-email",
          name: "Email"
        },
        {
          name: "Shareholder?"
        },
        {
          name: "Director?"
        }

      ],
      tbody: [
        {
          type: "input",
          placeholder: "Full name",
          name: "full_name"
        },
        {
          type: "input",
          placeholder: "Insert ID",
          name: "id_number"
        },
        {
          type: "input",
          placeholder: "Insert number",
          name: "phone_number"
        },
        {
          type: "input",
          placeholder: "Insert email",
          name: "email"
        },
        {
          type: "checkbox",
          name: "is_shareholder"
        },
        {
          type: "checkbox",
          name: "is_director"
        }
      ]
    }

    return(
      <ShareholderTable
        title="List of relevant corporate entities (i.e. corporate shareholders or directors)"
        schema={individualsTable}
        updateState={this.updateState.bind(this, "shareholders_corporate")}
      />
    )
  }
}

export default ShareHolders
