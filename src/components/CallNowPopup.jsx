import React from 'react';

function CallNowPopup() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-black/70 text-white p-4 rounded-xl shadow-lg w-64 backdrop-blur-sm">
        <h3 className="text-lg font-semibold mb-1">Barbering with Style</h3>
        <p className="text-sm mb-3">Denton, TX · Open till 7 PM</p>
        <a
          href="tel:+19406129127"
          className="block bg-yellow-500 text-black font-bold text-center py-2 rounded hover:bg-yellow-400 transition"
        >
          📞 Call Now
        </a>
      </div>
    </div>
  );
}

export default CallNowPopup;
