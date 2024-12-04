"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { EmojiClickData } from "emoji-picker-react";
import EmojiPicker, { Theme } from "emoji-picker-react";
import LinkInput from "./LinkInput";
import { useTheme } from "@/contexts/ThemeContext";
import VoiceRecorder from "./VoiceRecorder";

interface Props {
  onSendMessage: (text?: string, audio?: string, linkText?: string) => void;
}

const MessageInput = ({ onSendMessage }: Props) => {
  const [message, setMessage] = useState("");
  const [textLink, setTextLink] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const { darkMode } = useTheme();

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message, undefined, textLink);
      setMessage("");
    }
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onSendMessage(`File uploaded: ${file.name}`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex items-end drop-shadow bg-foundation-w">
      <div className="relative flex grow sm:p-4 p-2">
        <input
          type="text"
          className="w-full h-[52px] pl-6 p-2 dark-text-gray-200 bg-white dark:bg-gray-800 rounded-lg outline-none placeholder:font-semibold placeholder:text-foundation-grey-normal dark:placeholder:text-gray-200 border dark:border-gray-700"
          placeholder="Enter message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <div className="flex items-center absolute inset-y-2 right-24 gap-x-5">
          <div className="flex gap-x-5">
            <button
              className="text-foundation-white-dark-active dark:text-white hover:scale-110 transition-all duration-500 ease-in-out"
              onClick={() => setShowLinkInput(!showLinkInput)}
            >
              <Icon icon="ic:sharp-link" className="w-6 h-6" />
            </button>

            <label className="text-foundation-white-dark-active dark:text-white hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer">
              <Icon icon="iconoir:attachment" className="w-6 h-6" />

              <input
                type="file"
                id="file-upload"
                className="sr-only"
                onChange={handleFileUpload}
              />
            </label>
            <button
              type="button"
              className="text-foundation-white-dark-active dark:text-white hover:scale-110 transition-all duration-500 ease-in-out"
            >
              <VoiceRecorder onSendMessage={onSendMessage} />
            </button>
            <button
              type="button"
              className="text-foundation-white-dark-active dark:text-white hover:scale-110 transition-all duration-500 ease-in-out"
              onClick={toggleEmojiPicker}
            >
              {" "}
              <Icon icon="ri:emoji-sticker-line" className="w-6 h-6" />
            </button>
            {showEmojiPicker && (
              <div className="absolute bottom-14 right-0 z-10">
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  theme={darkMode ? ("dark" as Theme) : ("light" as Theme)}
                />
              </div>
            )}
          </div>
        </div>
        <button
          onClick={handleSend}
          className="flex justify-center items-center w-[52px] h-[52px] ml-4 bg-foundation-primary-normal rounded-md hover:bg-opacity-95"
        >
          <Icon
            icon="fa:send"
            className="w-6 h-6 text-white hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer shrink-0"
          />
        </button>
        {showLinkInput && (
          <LinkInput
            setShowLinkInput={setShowLinkInput}
            setMessage={setMessage}
            setTextLink={setTextLink}
            textLink={textLink}
          />
        )}
      </div>
    </div>
  );
};

export default MessageInput;
