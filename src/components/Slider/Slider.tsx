import Arrow from '../Icons/Arrow/Arrow';
import './Slider.css'

const Slider = () => {
    return (
        <div className='slider'>
            <div className='slider__left'/>
                <div className='slider__arrow-left'>
                    <Arrow  isLeft={true} />
                </div>
                <div className='slider__left_main'>
                    <button className='slider__left_main-btn'>Prev</button>
                    <div className='slider__left_main-text'>10 Things to Know About Salvador Dalí</div>  
                </div>

                <div className='slider__right'>
                <div className='slider__arrow-right'>
                    <Arrow  isLeft={false} />
                </div>
                <div className='slider__right_main'>
                    <button className='slider__right_main-btn'>Next</button>
                    <div className='slider__right_main-text'>8 Beautiful Villas Belonging to Artists You Need to See</div>
                </div>
            </div> 
        </div>
    )
}


export { Slider } 