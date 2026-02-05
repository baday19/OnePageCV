import Input from "@/components/Input";
import RichInput from "@/components/RichInput";

interface LabeledInputProps {
  label: string,
  initValue?: string,
  value: string,
  className?: string,
  type?: 'text' | 'rich',
  onChange: (value: string) => void,
}

const LabeledInput = ({
  label,
  initValue,
  value,
  className,
  type = 'text',
  onChange,
}: LabeledInputProps) => {
  console.log('LabeledInput', label, value, initValue);
  const changed = initValue !== value;
  return (
    <div
      className={`${className} w-full`}
    >
      <div className={`${changed ? 'text-orange-400' : ''} mb-2`}>{label}{changed && ' *'}</div>
      {
        type === 'text'
          ? <Input className="w-full" defaultValue={initValue} value={value} onChange={(e) => onChange(e.target.value)} />
          : <RichInput value={value} onChange={(value) => onChange(value)} />
      }
    </div>
  );
};

export default LabeledInput;