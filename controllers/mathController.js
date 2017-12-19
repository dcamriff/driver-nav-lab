const express = require('express')
const router = express.Router().all

router.get('/', (req, res) => {
    res.render('math', {
        math: math
    })
})

router.get('/:operator', (req, res) => {
    const operator = req.params.operator
    const num1 = parseInt(req.query.num1)
    const num2 = parseInt(req.query.num2)
    const value = 0

    if (operator === 'add') {
        res.send(`${value} = ${num1 + num2}`)
    } else if (operator === 'subtract') {
        res.send(`${value} = ${num1 - num2}`)
    } else if (operator === 'multiply') {
        res.send(`${value} = ${num1 * num2}`)
    } else if (operator === 'divide') {
        res.send(`${value} = ${num1 / num2}`)
    } else {
        res.send('Not a valid operator')
    }
    res.render('math', {
        value: value
    })
})


module.exports = router