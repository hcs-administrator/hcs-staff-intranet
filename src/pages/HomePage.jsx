import ReactMarkdown from 'react-markdown'
import MarkDownFile from '../../docs/_posts/static/home-page.md';
import { useEffect, useState } from "react"
import axios from 'axios'

const HomePage = () => {

    const [content, setContent] = useState("")

    useEffect(() => {

        const getData = async () => {
            await axios({ method: 'get', url: MarkDownFile})
            .then(async resp => { setContent(resp.data.split('---')[2]) })
        }
      
        getData()

    })

    return (
        <ReactMarkdown children={content} />
    )
  }
  
  export default HomePage