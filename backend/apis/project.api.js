import express from 'express'
import ProjectModel from '../models/project.model.js'
const router = express.Router()

router.post("/add-project", async (req, res) => {
    const createdProject = await ProjectModel.create(req.body)
    res.json({ message: "Project added successfully", project: createdProject })
})

router.get("/get-projects", async (req, res) => {
    const projects = await ProjectModel.find()
    res.json({ projects })
})

router.delete("/delete-project/:id", async (req, res) => {
    const { id } = req.params
    const deletedProject = await ProjectModel.findByIdAndDelete(id)
    res.json({ message: "Project deleted successfully", project: deletedProject })
})

router.put("/update-project/:id", async (req, res) => {
    const { id } = req.params
    const { title, description, image, link } = req.body
    const updatedProject = await ProjectModel.findByIdAndUpdate(
        id,
        { title, description, image, link },
        { new: true }
    )

    res.json({ message: "Project updated successfully", project: updatedProject })
})

export default router
