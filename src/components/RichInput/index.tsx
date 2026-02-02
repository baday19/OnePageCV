import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'link'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    // [{ 'indent': '-1' }, { 'indent': '+1' }],
    ['clean']
  ]
};

interface RichInputProps {
  value: string;
  placeholder?: string;
  onChange: (val: string) => void;
  className?: string;
}

const RichInput = ({
  value,
  placeholder = '',
  onChange,
  className = '',
}: RichInputProps) => {

  return (
    <ReactQuill
      placeholder={placeholder}
      className={`bg-gray-100 rounded-md overflow-hidden ${className}`}
      theme="snow"
      value={value}
      modules={modules}
      onChange={(val, _, source)=>{
        if (source !== 'user') return;
        onChange(val);
      }}
    />
  )
}

export default RichInput



