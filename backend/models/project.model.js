import mongoose from 'mongoose'

const Project = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    link: {
        type: String,
        required: true
    }
})

const ProjectModel = mongoose.model("Project", Project)

export default ProjectModel