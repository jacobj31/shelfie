module.exports = {
    getInventory: (req,res) => {
    const db = req.app.get('db')

    db.get_inventory().then(resp => {
        res.status(200).send(resp)
    })
    
},
    createItem: (req,res) => {
        const db = req.app.get('db')
        
        db.create_item(req.body)
        .then(resp => res.status(200).send(resp))
        .catch(err => console.log(err))
},
    deleteItem: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_item([id]).then(resp => {
            res.status(200).send(resp)
        })
    }
}