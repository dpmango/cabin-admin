const tableDataBase = {
  thead: [{
      id: 1,
      name: 'Company name',
      icon: 't-cname',
      sortable: true
    }, {
      id: 2,
      name: 'UEN',
      icon: 't-uen',
      sortable: false
    }, {
      id: 3,
      name: 'Next FYE',
      icon: 't-clock',
      sortable: true
    }, {
      id: 4,
      name: 'Next AGM',
      icon: 't-clock',
      sortable: true
    }, {
      id: 5,
      name: 'Renewal',
      icon: 't-clock',
      sortable: true
    }, {
      id: 6,
      name: 'Corp sec',
      icon: 't-user',
      sortable: false
    }, {
      id: 7,
      name: 'Accounting',
      icon: 't-calendar',
      sortable: false
    }, {
      id: 8,
      name: 'Status',
      icon: 't-status',
      sortable: true
    }, {
      id: 9,
      name: 'Action needed',
      icon: 't-pencil',
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
          id: 2, text: "012341567"
        },
        {
          id: 3, text: "27/03/2017"
        },
        {
          id: 4, text: "27/05/2017"
        },
        {
          id: 5, text: "27/03/2018"
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
      isSeekingAttention: true,
      cells: [
        {
          id: 1, text: 'BCME Company LTE'
        },
        {
          id: 2, text: "012342567"
        },
        {
          id: 3, text: "17/03/2017"
        },
        {
          id: 4, text: "15/03/2017"
        },
        {
          id: 5, text: "07/03/2019"
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
          id: 9, text: "Stakeholder verification"
        }
      ]
    },
    {
      id: 3,
      cells: [
        {
          id: 1, text: 'CCME Company LTE'
        },
        {
          id: 2, text: "012343567"
        },
        {
          id: 3, text: "22/03/2013"
        },
        {
          id: 4, text: "29/07/2015"
        },
        {
          id: 5, text: "03/05/2017"
        },
        {
          id: 6, text: "No"
        },
        {
          id: 7, text: "Yearly"
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
          id: 1, text: 'DCME Company LTE'
        },
        {
          id: 2, text: "012344567"
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
