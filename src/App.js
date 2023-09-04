import './App.css';
import Modal from "./components/Modal"
import NavBar from "./components/NavBar"
import ChatCont from "./components/ChatCont"
import ChatContacts from "./components/ChatContacts"
import React, {useEffect, useRef, useState} from 'react'

function App() {
const [chat, setChat] = useState([]);
const [ChatContactsVisible, setChatContactsVisible] = useState(true)
const chatValue = useRef()

// useEffect(()=>{
//   socket.on('message', (data)=>{
//     setChat([...chat, data])
//   })
// })

const toggleChatContactsVisible = ()=>{
  setChatContactsVisible(!ChatContactsVisible)
}
// const func = (e)=>{
//   try{
//     e.preventDefault();
//     socket.emit('message', chatValue.current.value)
//     chatValue.current.value = ""
//   }
//   catch(err){
//     console.error(err)
//   }
// }

  return (
    <section className="App">
      {/* Modal component for the initial prompt upon accesing the webpage, saving user location, username, and other details needed */}
      <Modal />

      <NavBar toggleChatContactsVisible={toggleChatContactsVisible}/>
      { ChatContactsVisible && <ChatContacts />}
      < ChatCont />
{/*       
{ chat !== null && chat !== undefined &&  chat.length !== 0 ? chat.map((item, index)=>{
        return <div className="chatCont" key={index} > <p className="chat">{item}</p></div>
      }) : <p>No Chats to display!</p>}

      <div className="formCont">
      <input type="text" name="text" id="text" maxLength="20" ref={chatValue}/>
      <input type="submit" value="Send" onClick={func} />
      </div> */}
    </section>
  );
}

export default App;
