import { Character } from '../models/Character.js'

export {
    index,
    show,
    create,
    update,
    deleteCharacter as delete
}

function index(req, res) {
    Character.find({})
    .then(characters => {
        res.status(200).json(characters)
    })
    .catch(err => {
        res.json(err)
    })
}

function show(req, res) {
    Character.findById(req.params.id)
    .then(character => {
    })
    .catch(err => {
        res.json(err)
    })
}

function create(req, res) {
    Character.create(req.body)
    .then(character => {
        res.json(character)
    })
    .catch(err => {
        res.json(err)
    })
}

function update(req, res) {
    Character.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(character => {
        res.json(character)
    })
    .catch(err =>{
        res.json(err)
    })
}

function deleteCharacter(req, res) {
    Character.findByIdAndDelete(req.params.id)
    .then(character => {
        res.json(character)
    })
    .catch(err => {
        res.json(err)
    })
}