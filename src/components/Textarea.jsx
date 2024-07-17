import React,{useEffect,useRef} from 'react';

function Textarea({ response }) {
    const textareaRef = useRef(null);

    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
      }
    }, [response]);
  return (  
    <>
      <div className="h-80 overflow-y-auto p-4 border border-gray-300 rounded-lg">
        <div className="flex flex-col gap-2">
          <div className="bg-green-200 p-2 rounded-lg">
            <span className='text-orange-500'>{response}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Textarea;
