import React, { useRef } from "react";

const Chat: React.FC = () => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onHandleSendMessage = (e) => {
    e.preventDefault();
    messageRef.current.value += `\n ${inputRef.current?.value}`;
    inputRef.current.value = "";
  };

  return (
    <div className="container">
      <div>
        <h1>Chat</h1>
        <div>
          <textarea ref={messageRef}></textarea>
        </div>
        <div>
          <input ref={inputRef} placeholder="Escriba un mensaje..." />
          <button onClick={onHandleSendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
