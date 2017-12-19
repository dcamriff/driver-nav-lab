const express = require('express')
const router = express.Router()

router.get('/:operator', (req, res) => {
    const id = req.params.id
    const add = req.params.add
    const num1 = parseInt(req.query.num1)
    const num2 = parseInt(req.query.num2)

    res.render('math', {
        add: `${num1 + num2}`
        })
    })

    module.exports = router