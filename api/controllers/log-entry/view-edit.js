module.exports = {


  friendlyName: 'View edit',


  description: 'Display "Edit" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/log-entry/edit'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
