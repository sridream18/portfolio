import { useState } from 'react';
import { FaShareAlt, FaCheck } from 'react-icons/fa';
import './ShareButton.css';

const ShareButton = () => {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'J. Sri Bhuvane | Frontend Developer',
      text: 'Check out this amazing portfolio by J. Sri Bhuvane!',
      url: 'https://sribhuvanej.online/',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (err) {
        console.log('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="share-btn-container">
      <button 
        className={`share-btn ${shared ? 'success' : ''}`} 
        onClick={handleShare}
        aria-label="Share this portfolio"
      >
        {shared ? (
          <FaCheck className="share-icon fade-in" />
        ) : (
          <FaShareAlt className="share-icon" />
        )}
        <span className="share-text">{shared ? 'Link Copied!' : 'Share'}</span>
      </button>
      
      {shared && (
        <div className="share-success-animation">
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`confetti c-${i}`}></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShareButton;
