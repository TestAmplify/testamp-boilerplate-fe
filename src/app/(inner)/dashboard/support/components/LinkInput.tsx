import React, { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  setShowLinkInput: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setTextLink: React.Dispatch<React.SetStateAction<string>>;
  textLink: string;
}

const LinkInput = ({
  setShowLinkInput,
  setMessage,
  setTextLink,
  textLink,
}: Props) => {
  const [link, setLink] = useState('');
  return (
    <div>
      <div className='absolute bottom-16 right-20 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-3 shadow-md rounded-md'>
        <input
          type='text'
          placeholder='Text to display'
          className='w-full border p-2 rounded-md text-sm outline-none focus-within:border-gray-400 dark:bg-gray-800 dark:border dark:border-gray-700 my-1'
          value={textLink}
          onChange={(e) => setTextLink(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter a URL'
          className='w-full border p-2 rounded-md text-sm outline-none focus-within:border-gray-400 dark:bg-gray-800 dark:border dark:border-gray-700 my-1'
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <button
          onClick={() => {
            if (link.trim()) {
              setMessage((prev) => `${prev} ${link}`);
              setShowLinkInput(false);
              setLink('');
            }
          }}
          className='mt-2 bg-foundation-primary-normal text-white px-3 py-2 rounded-md'
        >
          Add Link
        </button>
      </div>
    </div>
  );
};

export default LinkInput;
