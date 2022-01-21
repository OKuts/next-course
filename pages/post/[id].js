import Router, {useRouter} from "next/router";

export default function Post() {
    const {query} = useRouter()

    return <>
        <h1>One post {query.id}</h1>
        <button onClick={() => Router.push('/')}>Go home</button>
    </>
}
