import { useState } from 'react'
import SignUp from './SignUP'
import EventsHandler from './EventsHandler'
import Profile from './Profile'
import ConditionalRen from './ConditionalRen'
import CondiRenChall from './CondiRenChall'
import CondiRenChall2 from './CondiRenChall2'
import CondiRenChall3 from './CondiRenChall3'
import RenderingList from './RenderingList'
import ProductPage from './CallBackHook'
import './App.css'
import ContextApi from './ContextApi'


export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <h1>Welcome to My App</h1>
      {/* <h1>{user.name}</h1>
    <img src={user.imageUrl} alt={'Photo of' + user.name} className='avatar'/>
     <MyButton/> */}
      {/* <SignUp/> */}
      {/* <EventsHandler/> */}
      {/* <Profile/> */}
      {/* <ConditionalRen/>+ */}
      {/* <CondiRenChall />
      <CondiRenChall2 />
      <CondiRenChall3/> */}
      {/* <RenderingList/> */}


      {/* dark mod code */}
      {/* <label>
        <input type="checkbox" checked={isDark} 
        onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId= "wizard_of_oz"
        productID={123}
        theme={isDark ? 'dark' : 'light'}
      /> */}

      <ContextApi/>
    </>
  );
}
