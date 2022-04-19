import React, {useState} from 'react'
import MetaTags from 'react-meta-tags';
import { Div } from "atomize";

const Picturepage = () => {
  const [counter, setCounter] = useState(2);

  if (counter === 3) {
    throw new Error("Oops, You triggered Doomsday!");
  }
  const countUntilDoom = () => {
    setCounter(counter + 1);
  };
  return (
    <Div>
      <MetaTags>
            <title>Khoa Nguyễn - Pictures</title>
            <meta id="meta-description" name="description" content="Website vippzo nhất hệ mặt trời!" />
            <meta id="og-title" property="og:title" content="Khoa Nguyễn - Pictures" />
            <meta id="og-image" property="og:image" content="../../assets/macos-big-sur.jpg" />
      </MetaTags>
      <Div>
      <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={countUntilDoom}>Click on me for money</button>
      <h2>{counter}</h2>
      </div>
      </Div>
    </Div>
  )
}

export default Picturepage