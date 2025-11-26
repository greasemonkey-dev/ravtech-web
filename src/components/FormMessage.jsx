import React from "react";

const FormMessage = ({ show, success, text, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-[90%] max-w-md animate-in zoom-in-95 duration-500">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Top gradient bar */}
          <div
            className={`h-2 ${
              success
                ? "bg-gradient-to-r from-[#0373BA] via-[#CCE7FA] to-[#0373BA]"
                : "bg-gradient-to-r from-red-500 via-red-300 to-red-500"
            }`}
          />

          <div className="p-8 text-center">
            {/* Icon */}
            <div className="relative inline-block mb-6">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg ${
                  success
                    ? "bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]"
                    : "bg-gradient-to-br from-red-100 to-red-50"
                }`}
              >
                <span className="text-6xl">{success ? "✉️" : "⚠️"}</span>
              </div>
              <div
                className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${
                  success ? "bg-green-500" : "bg-red-500"
                }`}
              >
                <span className="text-white text-xs">
                  {success ? "✓" : "!"}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {success ? "Message Sent!" : "Oops!"}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{text}</p>

            <button
              onClick={onClose}
              className={`w-full py-4 rounded-2xl text-white text-lg font-bold transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] ${
                success
                  ? "bg-gradient-to-r from-[#0373BA] to-[#025a94]"
                  : "bg-gradient-to-r from-red-500 to-red-600"
              }`}
            >
              {success ? "Great!" : "Try Again"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMessage;