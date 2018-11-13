module.exports = {


  friendlyName: 'View add',


  description: 'Display "Add" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/log-entry/add'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
