
// == Стили
import '../css/addtags.css'

export default function AddTag(props) {
    return (
        <article className="tag">
            <p>{props.text}</p>
        </article>
    )
}