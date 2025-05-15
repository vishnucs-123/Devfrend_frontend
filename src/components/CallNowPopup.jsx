import React from 'react';

function CallNowPopup() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black bg-opacity-70 backdrop-blur-sm text-white p-3 rounded-lg shadow-xl w-48">
        <h3 className="text-base font-semibold mb-1">Barbering with Style</h3>
        <p className="text-xs mb-2">Denton, TX · Open till 7 PM</p>
        <a
          href="tel:+19406129127"
          className="block bg-yellow-500 text-black text-sm font-bold text-center py-1.5 rounded hover:bg-yellow-400 transition"
        >
          📞 Call Now
        </a>
      </div>
    </div>
  );
}

export default CallNowPopup;
