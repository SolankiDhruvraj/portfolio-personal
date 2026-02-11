import express from 'express'
import ContactModel from '../models/contact.model.js'
const router = express.Router()

router.post("/add-contact", async (req, res) => {
    const createdContact = await ContactModel.create(req.body)
    res.json({ message: "Contact added successfully", contact: createdContact })
})

router.get("/get-contacts", async (req, res) => {
    const contacts = await ContactModel.find()
    res.json({ contacts })
})

router.delete("/delete-contact/:id", async (req, res) => {
    const { id } = req.params
    const deletedContact = await ContactModel.findByIdAndDelete(id)
    res.json({ message: "Contact deleted successfully", contact: deletedContact })
})

export default router