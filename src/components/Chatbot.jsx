import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Chatbot.css';

const PREDEFINED_RESPONSES = {
  greetings: ['hi', 'hello', 'hey', 'greetings', 'namaste'],
  skills: ['skills', 'technologies', 'stack', 'tech', 'languages'],
  experience: ['experience', 'work', 'job', 'roles', 'background'],
  projects: ['projects', 'portfolio', 'work', 'built', 'created'],
  contact: ['contact', 'email', 'hire', 'message', 'reach'],
};

const BOT_ANSWERS = {
  greetings: "Hi there! 👋 I'm J. Sri Bhuvane's virtual assistant. How can I help you today? You can ask me about his skills, experience, projects, or how to contact him.",
  skills: "Sri Bhuvane is a Frontend Developer specializing in React, Next.js, TypeScript, and modern CSS frameworks like Tailwind. He focuses on building premium, high-performance web applications. 🚀",
  experience: "He has experience building responsive web applications and focusing on UI/UX best practices. You can check out the 'Experience' section on this page for a detailed timeline of his roles!",
  projects: "Sri Bhuvane has built several exciting projects! Scroll up to the 'Projects' section to see live demos and GitHub repositories of his best work. 💻",
  contact: "You can reach Sri Bhuvane via email at sribhuvanej@gmail.com, or connect with him on LinkedIn. There's also a contact form at the bottom of the page! 📧",
  default: "I'm a simple bot and I didn't quite catch that. Try asking about his **skills**, **experience**, **projects**, or how to **contact** him!",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: BOT_ANSWERS.greetings, isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput('');

    // Determine bot response
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let matchCategory = 'default';

      for (const [category, keywords] of Object.entries(PREDEFINED_RESPONSES)) {
        if (keywords.some(keyword => lowerInput.includes(keyword))) {
          matchCategory = category;
          break;
        }
      }

      setMessages(prev => [...prev, { text: BOT_ANSWERS[matchCategory], isBot: true }]);
    }, 500); // Small delay to feel more natural
  };

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-title">
            <span className="chatbot-avatar">👋</span>
            <div>
              <h3>Assistant</h3>
              <span className="chatbot-status">Online</span>
            </div>
          </div>
          <div className="chatbot-header-actions">
            <a 
              href="https://wa.me/918072978054" 
              target="_blank" 
              rel="noopener noreferrer"
              className="chatbot-whatsapp-btn"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <FiX size={20} />
            </button>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message-wrapper ${msg.isBot ? 'bot' : 'user'}`}>
              <div className="message-content">
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-form" onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="chatbot-input"
          />
          <button type="submit" className="chatbot-send-btn" disabled={!input.trim()}>
            <FiSend size={18} />
          </button>
        </form>
      </div>

      {/* Floating Toggle Button */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <FiMessageSquare size={24} />
      </button>
    </div>
  );
};

export default Chatbot;
