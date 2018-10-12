import React, {Component, Fragment} from 'react';
import ShareholderTable from '../ShareholderTable';

class ShareHolders extends Component{
  constructor(){
    super()

    this.state = {
      shareholders_corporate: ' '
    }

    this.tableRef = [] // hold an array for tables scrollbars
  }

  // called from the parent onBlur or checkbox onClick
  updateState = (name, componentState) => {
    this.setState({ ...this.state,
      [name]: componentState
    });
  }

  render(){

    const corporatesTable = {
      topRow: [
        {}, {},
        {
          colspan: 4,
          icon: "sh-person",
          name: "Corporate representative"
        },
        {
          icon: "sh-person",
          name: "Administrative Assistant",
          tooltip: "Let us know if you prefer us to forward the onboarding paperwork for the Corporate Representative to be completed by an Administrative Assistant. The Corporate Representative will only need to verify and sign-off the completed onboarding documents."
        }
      ],
      thead: [
        {
          icon: "sh-name",
          name: "Company name"
        },
        {
          icon: "sh-id",
          name: "Company registration #"
        },
        {
          icon: "sh-person",
          name: "Full name"
        },
        {
          icon: "sh-id",
          name: "Id"
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
          icon: "sh-email",
          name: "Email"
        },
      ],
      tbody: [
        {
          type: "input",
          placeholder: "Company name",
          name: "company_name"
        },
        {
          type: "input",
          placeholder: "Company registration #",
          name: "uen"
        },
        {
          type: "input",
          placeholder: "Insert full name",
          name: "full_name"
        },
        {
          type: "input",
          placeholder: "ID",
          name: "id"
        },
        {
          type: "input",
          placeholder: "Phone number",
          name: "phone"
        },
        {
          type: "input",
          placeholder: "E-mail",
          name: "email"
        },
        {
          type: "input",
          placeholder: "E-mail",
          name: "rep_email"
        }
      ]
    }

    return(
      <Fragment>
        <ShareholderTable
          onRef={(ref) => { this.tableRef[1] = ref; }}
          title="List of all non-corporate stakeholder(s) (shareholders and directors)"
          addMoreText="Additional ShareHolders"
          schema={corporatesTable}
          updateState={this.updateState.bind(this, "shareholders_corporate")}
        />
      </Fragment>
    )
  }
}

export default ShareHolders
