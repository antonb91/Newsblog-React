import { IPost, IPostWithType, POST_TYPES } from "../../../types"
import { PostDetail } from "./PostDetail"
import { PostVertical } from "./PostVertical"
import { PostSmall } from "./PostSmall"
import { ThemeContext } from "../../../contexts/themeContext"
import './Post.css';

const getResultPostComponent = (type: POST_TYPES) => {
    switch(type) {
        case POST_TYPES.VERTICAL: {
            return PostVertical
        }
        case POST_TYPES.SMALL: {
            return PostSmall
        }
        default: {
            return PostDetail
        }
    }
}

const Post = ({ type, ...other }: IPostWithType) => {
    const ResultComponent = getResultPostComponent(type)
    return (
        <div>
          <ResultComponent {...other} />
        </div>

    )
}

export { Post }