import {useState} from 'react'
import {useDispatch} from "react-redux";
import {createGame} from '../redux/actions/actions'

export const useForm = (initialForm) => {

    const dispatch = useDispatch()
    const [form, setForm] = useState(initialForm)
    // const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        // setErrors(validation(form))
    }
    const handleSelectGenres = (e) => {
        setForm({
            ...form,
            genres: [...form.genres, e.target.value]
        })
    }
    const handleSelectPlatforms = (e) => {
        setForm({
            ...form,
            platforms: [...form.platforms, e.target.value]
            // platforms: e.target.value.concat(...form.platforms,'')
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createGame(form))
        alert("game created")
        // setErrors(validation(form))
        // if (Object.keys(errors).length === 0) {
        //     dispatch(createGame(form))
        //     setForm({
        //         name:'',
        //         release_date:'',
        //         imagen:'',
        //         rating:'',
        //         description:'',
        //         genres:[],
        //         platforms:[]
        //     })
        // }else {
        //     alert('Not created Game')
        // }
    }
    return {
        form,
        handleChange,
        handleSelectGenres,
        handleSelectPlatforms,
        handleSubmit
    }

}