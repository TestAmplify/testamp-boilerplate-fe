import Image from 'next/image';
import { Messages } from '../page';
import { Icon } from '@iconify/react';
import Linkify from 'react-linkify';

interface Props {
  messages: Messages[];
}

const MessageList = ({ messages }: Props) => {
  const renderTextWithLinks = (text: string, linkText: string) => {
    const urlRegex = /https?:\/\/[^\s$.?#].[^\s]*/gi;

    return text.split(' ').map((word, index) => {
      if (urlRegex.test(word)) {
        return (
          <a
            key={index}
            href={word}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 underline'
          >
            {linkText || word}
          </a>
        );
      }
      return ` ${word} `;
    });
  };

  const profileImageTime = (msg: Messages) => {
    return (
      <div className='mt-1'>
        {msg.isUser ? (
          <div className='flex items-center gap-x-2 mb-1'>
            <Image
              src='/profile.jpg'
              alt='User image'
              width={30}
              height={30}
              className='rounded-full'
            />
            <small className='text-sm'>{msg.timestamp}</small>
          </div>
        ) : (
          <div className='flex items-center justify-end gap-x-2 my-2'>
            <span className='justify-self-start w-[34px] h-[34px] text-foundation-white-light rounded-full bg-[#EFF4FF]'>
              <Icon icon='carbon:headset' className='w-5 h-5' />
            </span>
            <span className='text-xs'>{msg.timestamp}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='overflow-y-scroll h-[550px] py-4 px-8 bg-[#F7F7F7] dark:bg-gray-800 border-y border-foundation-white-normal'>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mt-2 ${msg.isUser ? 'text-left' : 'text-right'}`}
        >
          {msg.text ? (
            <span
              className={`inline-block px-2 py-1 rounded text-sm mb-1 ${
                msg.isUser
                  ? 'bg-white text-black rounded-t-2xl rounded-bl-2xl border border-foundation-grey-newLight'
                  : 'bg-foundation-primary-normal text-white rounded-t-2xl rounded-b-r-2xl'
              }`}
            >
              <Linkify>
                {' '}
                {renderTextWithLinks(msg.text as string, msg?.linkText || '')}
              </Linkify>
            </span>
          ) : (
            <>
              <audio
                key={`audio-${index}`}
                controls
                src={msg.audio}
                className=''
              ></audio>
            </>
          )}
          {profileImageTime(msg)}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
