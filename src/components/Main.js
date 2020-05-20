import Box from './Box'
import data from '../data.json'

export default function Main({

}) {
    console.log(data)
    return <Box name="root" data={data['structure']} />
}