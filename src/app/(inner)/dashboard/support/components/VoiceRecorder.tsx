import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";

const VoiceRecorder = ({
  onSendMessage,
}: {
  onSendMessage: (text?: string, audio?: string, linkText?: string) => void;
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);

  const toggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
        setIsProcessing(true);
      }
    } else {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        audioChunksRef.current = []; // Clear previous chunks
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/webm",
          });
          const audioUrl = URL.createObjectURL(audioBlob);

          // Send the audio message once recording stops
          onSendMessage("", audioUrl, "");
          setIsProcessing(false);
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    }
  };

  return (
    <span
      onClick={!isProcessing ? toggleRecording : undefined}
      className={`record-icon ${isProcessing ? "cursor-not-allowed" : ""}`}
    >
      {isRecording ? (
        <Icon icon="carbon:microphone-off" className="w-6 h-6 text-red-500" />
      ) : (
        <Icon
          icon="icon-park-outline:voice"
          className={`w-6 h-6 ${
            isProcessing
              ? "text-gray-400"
              : "text-foundation-white-dark-active dark:text-white"
          }`}
        />
      )}
    </span>
  );
};

export default VoiceRecorder;
