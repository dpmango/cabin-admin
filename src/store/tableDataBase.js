const tableDataBase = {
  thead: [
    {
      id: 1,
      name: 'Company name',
      icon: '',
      sortable: true
    },
    {
      id: 2,
      name: 'UEN',
      icon: '',
      sortable: false
    },
    {
      id: 3,
      name: 'Next FYE',
      icon: '',
      sortable: true
    },
    {
      id: 4,
      name: 'Next AGM',
      icon: '',
      sortable: true
    },
    {
      id: 5,
      name: 'Renewal',
      icon: '',
      sortable: true
    },
    {
      id: 6,
      name: 'Corp sec',
      icon: '',
      sortable: false
    },
    {
      id: 7,
      name: 'Accounting',
      icon: '',
      sortable: false
    },
    {
      id: 8,
      name: 'Status',
      icon: '',
      sortable: true
    },
    {
      id: 9,
      name: 'Action needed',
      icon: '',
      sortable: false
    }
  ],
  tbody: [
    {
      id: 1,
      cells: [
        {
          id: 1, text: 'ACME Company LTE'
        },
        {
          id: 2, text: "01234567"
        },
        {
          id: 3, text: "27/03/2017"
        },
        {
          id: 4, text: "27/03/2017"
        },
        {
          id: 5, text: "27/03/2017"
        },
        {
          id: 6, text: "Yes"
        },
        {
          id: 7, text: "Monthly"
        },
        {
          id: 8,
          text: {
            isActive: true,
            isPending: false,
            isInactive: false
          }
        },
        {
          id: 9, text: "Company verification"
        }
      ]
    },
    {
      id: 2,
      cells: [
        {
          id: 1, text: 'ACME Company LTE'
        },
        {
          id: 2, text: "01234567"
        },
        {
          id: 3, text: "27/03/2017"
        },
        {
          id: 4, text: "27/03/2017"
        },
        {
          id: 5, text: "27/03/2017"
        },
        {
          id: 6, text: "Yes"
        },
        {
          id: 7, text: "Monthly"
        },
        {
          id: 8,
          text: {
            isActive: false,
            isPending: true,
            isInactive: false
          }
        },
        {
          id: 9, text: "Company verification"
        }
      ]
    },
    {
      id: 3,
      cells: [
        {
          id: 1, text: 'ACME Company LTE'
        },
        {
          id: 2, text: "01234567"
        },
        {
          id: 3, text: "27/03/2017"
        },
        {
          id: 4, text: "27/03/2017"
        },
        {
          id: 5, text: "27/03/2017"
        },
        {
          id: 6, text: "Yes"
        },
        {
          id: 7, text: "Monthly"
        },
        {
          id: 8,
          text: {
            isActive: false,
            isPending: false,
            isInactive: true
          }
        },
        {
          id: 9, text: "Company verification"
        }
      ]
    },
    {
      id: 4,
      cells: [
        {
          id: 1, text: 'ACME Company LTE'
        },
        {
          id: 2, text: "01234567"
        },
        {
          id: 3, text: "27/03/2017"
        },
        {
          id: 4, text: "27/03/2017"
        },
        {
          id: 5, text: "27/03/2017"
        },
        {
          id: 6, text: "Yes"
        },
        {
          id: 7, text: "Monthly"
        },
        {
          id: 8,
          text: {
            isActive: true,
            isPending: false,
            isInactive: false
          }
        },
        {
          id: 9, text: "Company verification"
        }
      ]
    }
  ]
}

export default tableDataBase
