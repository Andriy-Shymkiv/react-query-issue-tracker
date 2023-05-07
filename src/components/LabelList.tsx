import { useLabelsData } from '../hooks/useLabelsData';

interface LabelListProps {
  selected: string[];
  toggle: (label: string) => void;
}
export const LabelList: React.FC<LabelListProps> = ({ selected, toggle }) => {
  const { data: labels, isLoading: labelsIsLoading } = useLabelsData();

  return (
    <div className="labels">
      <h3>Labels</h3>
      {labelsIsLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {labels?.map((label) => (
            <li key={label.id}>
              <button
                onClick={() => toggle(label.id)}
                className={`label ${
                  selected.includes(label.id) ? 'selected ' : ''
                }${label.color}`}
              >
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
