import mongoose from 'mongoose'

const Contact = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const ContactModel = mongoose.model("Contact", Contact)

export default ContactModel