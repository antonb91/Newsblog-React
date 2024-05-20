import './ContentPage.css';
import { IContentPage } from '../../types';
import { FooterRegForm } from '../FooterRegForm';
import LikeDislike from '../Icons/LikeDislike/LikeDislike';
import BookMark from '../Icons/BookMark/BookMark';
import { Slider } from '../Slider';


const ContentPage = ({
    post,
    title,
    image,
    text
}: IContentPage) => {
    return (
        <article className='content__page-wrapper'>
            <div className='content__page_header'>
                <div className='content__page_header-menu'>
                    <button className='content__page_header-btn'>Home</button>
                    <span className='content__page_header-post'>{`Post ${post}`}</span>
                </div>
                <h3 className='content__page_header-title'>{title}</h3>
            </div>
            <img className="content__page-img" src={image} alt="img name" />
            <div className='content__page_main'>
            <p className='content__page_main-text'>
                {text.split('\n')
                    .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
            ))}</p>
                <div className='content__page_main-buttons'>
                    <div className='buttons-likes'>
                        <div className='btn-like'>
                            <LikeDislike isUp={true} />
                        </div>
                        <div className='btn-dislike'>
                            <LikeDislike isUp={false} />
                        </div>
                            
                        </div>
                    <div className='btn-bookmark'>
                        <BookMark/>
                        <div className='btn-bookmark-text'>Add to favorites</div>
                    </div>
            </div>
                </div>
            <Slider />
            <FooterRegForm />
        </article>
        
    )
}

export { ContentPage }