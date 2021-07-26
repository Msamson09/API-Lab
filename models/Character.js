import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
    Character
}

const characterSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    house: {
        type: String,
        default: "Gryffindor"
    },
    year: {
        type: Number,
        default: 1
    },
    patronus: {
        type: String,
        default: "Otter"
    }
})