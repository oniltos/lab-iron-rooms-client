import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiService from '../../services/api.service'
import TextInput from '../../components/TextInput'

const CreateRoom = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const room = { name, description, imageUrl }

        try {
            await apiService.createRoom(room)
            setName('')
            setDescription('')
            setImageUrl('')
            navigate('/')
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="m-2">
            <h1>New Room</h1>
            <form onSubmit={handleSubmit}>
                <TextInput
                    label="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextInput
                    label="Description"
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextInput
                    label="Image URL"
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default CreateRoom