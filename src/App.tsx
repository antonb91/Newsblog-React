import React from 'react';
import { Button } from './components/Button'
import { useState } from 'react'
import { Counter } from './components';
import { Username } from './components/Username';
import { Input } from './components/Input'
import { Header } from './components'
import { Registration } from './components';
import { RegistrationConfirm } from './components';
import { INPUT_TYPES, POST_TYPES } from './types';
import { Timer } from './components/Hooks/Timer'
import { Post } from './components/Posts/Post'
import { ThemeContext } from './contexts/themeContext';
import { THEMES } from './types';
import { UseRef } from './components/Hooks/useRef'
import { ContentPage } from './components';
import { IContentPage } from './types'


const mockPost = {
  id: 13,
  image:
    'https://hi-news.ru/wp-content/uploads/2022/07/astronaut_bones_1-1-650x442.jpg',
  text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
  date: '2021-06-11',
  lesson_num: 6,
  title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
  author: 9,
}

const mockPage = {
  post: 14278,
  title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
  image: 'https://thumb.photo-ac.com/51/5194411b5aed0d18cb86a7c38044b5cf_t.jpeg',
  text: `Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.
  During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.
  The stories tracked Hambling’s trailblazing career while focusing on her current and upcoming projects. The artist’s installation Relic (2021), produced alongside sound recordist Chris Watson, was recently on view at Snape Maltings in London. Meanwhile, this October, portraits by Hambling will be presented at the Italian gallery Thomas Brambilla. The artist’s “Wave Series” is also currently being exhibited in the group show “Summer Exhibition” at Marlborough London, which runs through September 10th.
  The excitement surrounding this exhibition delighted longtime fans of the expressive painter while inspiring a legion of new devotees—a trend matched by Neel’s strengthening position in the art market, especially in the past year. In May, Neel’s 1966 canvas Dr. Finger’s Waiting Room roused a flurry of bids from the United States, Asia, and Europe at Christie’s New York, where it ultimately sold for just over $3 million, breaking both its high estimate and the artist’s auction record. Just hours earlier at Sotheby’s New York, Neel’s double portrait Henry and Sally Hope (1977), depicting an art historian and his wife, sold for just under $1.6 million, notching her third-highest auction result.
  The demand for Maggi Hambling’s evocative portraits and exuberant depictions of seascapes and landscapes surged this past week, when the number of collectors inquiring on her work increased more than tenfold from the week before. The British artist, esteemed for her whirling, gestural paintings and bold public sculptures, has seen a consistent wave of interest in her work that has accelerated in the past few years. This recent uptick in interest is consistent with Hambling’s career trajectory, which has been punctuated by a flurry of public commissions, institutional recognition, and secondary-market demand.
  `
}



const arr = ['Hello', 'Anton', 'Developer']

const App = () => {
  const [disabled, setDisabled] = useState(false)

  const [inputValue, setInputValue] = useState('')

  const [input1Value, setInput1Value] = useState('')
  const [input2Value, setInput2Value] = useState(0)
  const [input3Value, setInput3Value] = useState('')

  const [theme, setTheme] = useState(THEMES.DARK)
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div>
{/* Header */}
       <Header/>
      
{/* ContentPage */}
<ContentPage {...mockPage} />

{/* Registration */}
      <Registration/>

{/*RegistrationConfirm */}
      <RegistrationConfirm/>

{/* Timer */}
   <Timer />

{/*UseRef */}
<UseRef/>

{/* Posts */}
<div>
    <Post {...mockPost} type={POST_TYPES.DETAIL} />
    <Post {...mockPost} type={POST_TYPES.VERTICAL} />
    <Post {...mockPost} type={POST_TYPES.SMALL} />
</div>

{/* Counter */}
      <Counter />
      <ul>
        {arr.map((el) => 
           <li key={el}>{el}</li>
        )}
      </ul>

      <label>
        Работает:
        <input
          name='controll'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          />
      </label>

{/* Button */}
      <Button className='primary' isActive={!disabled}
              onClick={() => setDisabled(true)}>
        Text for 1 button
        </Button>

        <Button className='secondary'
              onClick={() => setDisabled(false)}>
        Text for 2 button
        </Button>

        <Button className='third' isActive={!disabled}
              onClick={() => setDisabled(true)}>
        Text for 3 button
        </Button>

        <Button className='fourth'
              onClick={() => setDisabled(false)}>
        Text for 4 button
        </Button>

        <Button className='fifth' isActive={!disabled}
              onClick={() => setDisabled(true)}>
        Text for 5 button
        </Button>

        <Button className='sixth'
              onClick={() => setDisabled(false)}>
        Text for 6 button
        </Button>

        <div>
        <Username className="userblock" username="John Doe" />
        </div>
        <br />

{/* Inputs */}
        <Input
          className='Input'
          placeholder='Enter text'
          type={INPUT_TYPES.TEXT}
          value={input1Value}
          onChange={(e: any) => setInput1Value(e.target.value)}
          label={'Title1'}
        />
        <Input
          className='Input'
          placeholder='Enter text 2'
          type={INPUT_TYPES.NUMBER}
          value={input2Value}
          onChange={(e: any) => setInput2Value(e.target.value)}
          label={'Title2'}
          disabled={input1Value === 'Hello'}
          errorMessage={input2Value > 5 ? 'Error message' : ''}
        />

      <Input
        className='Input'
        placeholder='Enter text 3'
        type={INPUT_TYPES.TEXTAREA}
        value={input3Value}
        onChange={(e: any) => setInput3Value(e.target.value)}
        label={'Title3'}
      />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;

