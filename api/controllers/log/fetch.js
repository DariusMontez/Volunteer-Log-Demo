module.exports = {
    
    friendlyName: `Fetch log`,
    
    inputs: {
        id: { type: `number`, required: true },
    },
    
    exits: {
        found: { statusCode: 200 },
        notFound: { responseType: `notFound` },
    },
    
    async fn(inputs, exits) {
        const log = await Log.findOneById(inputs.id).populate(`entries`);
        
        if (!log) {
            return exits.notFound();
        }
        
        return exits.found({log});
    },
    
};
