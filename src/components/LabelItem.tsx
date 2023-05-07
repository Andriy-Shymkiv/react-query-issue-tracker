import { useLabelsData } from '../hooks/useLabelsData';

interface LabelItemProps {
  label: string;
}

export const LabelItem: React.FC<LabelItemProps> = ({ label }) => {
  const { isLoading, data } = useLabelsData();
  const foundLabel = data?.find((l) => l.id === label);

  return (
    <>
      {!isLoading && !!foundLabel && (
        <span key={label} className={`label ${foundLabel.color}`}>
          {foundLabel.name}
        </span>
      )}
    </>
  );
};
