const router = require('express').Router()

let dogs = [{
  name: 'Roxy',
  gender: 'Female',
  age: 3
}, {
  name: 'Gromet McElroy',
  gender: 'Female',
  age: 5
}, {
  name: 'Josie',
  gender: 'Female',
  age: 5
}, {
  name: 'Dug',
  gender: 'male',
  age: 4
}]

router.get('', (req, res, next) => {
  res.status(200).send(dogs)
})

router.get('/:id', (req, res, next) => {
  let dog = dogs[req.params.id]
  if (!dog) {
    return res.status(400).send('No dog at that ID')
  }
  res.status(200).send(dog)
})

router.post('', (req, res, next) => {
  let newDog = req.body
  dogs.push(newDog)
  res.status(201).send(newDog)
})

router.delete('/:id', (req, res, next) => {
  if (req.params.id > -1 && req.params.id < dogs.length) {
    dogs.splice(req.params.id, 1)
    return res.status(200).send('Deleted dog')
  }
  res.status(400).send('no dog at that ID')
})


module.exports = router