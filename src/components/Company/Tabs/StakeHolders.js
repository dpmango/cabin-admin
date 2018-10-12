import React, {Component, Fragment} from 'react';
import ShareholderTable from '../ShareholderTable';

class StakeHolders extends Component{
  constructor(){
    super()

    this.state = {
      shareholders_individulas: '',
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

    const corporatesTable = {
      thead: [
        {
          icon: "sh-name",
          name: "Company name"
        },
        {
          icon: "sh-id",
          name: "UEN"
        },
        {
          icon: "sh-person",
          name: "Name of corporate representative"
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
          placeholder: "Company name",
          name: "company_name"
        },
        {
          type: "input",
          placeholder: "UEN",
          name: "uen"
        },
        {
          type: "input",
          placeholder: "Corporate representative",
          name: "corporate_representative"
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
      <Fragment>
        <ShareholderTable
          title="List of key individuals (shareholders and directors)"
          schema={individualsTable}
          updateState={this.updateState.bind(this, "shareholders_individulas")} />

        <ShareholderTable
          title="List of relevant corporate entities (i.e. corporate shareholders or directors)"
          schema={corporatesTable}
          updateState={this.updateState.bind(this, "shareholders_corporate")} />
      </Fragment>
    )
  }
}

export default StakeHolders
