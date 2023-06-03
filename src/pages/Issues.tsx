import { useState } from 'react';
import { IssuesList } from '../components/IssuesList';
import { LabelList } from '../components/LabelList';
import { StatusSelect } from '../components/StatusSelect';
export default function Issues() {
  const [labels, setLabels] = useState<string[]>([]);
  const [status, setStatus] = useState('');

  const toggleLabel = (label: string) => {
    setLabels((prevLabels: string[]) =>
      prevLabels.includes(label)
        ? prevLabels.filter((currentLabel) => currentLabel !== label)
        : prevLabels.concat(label)
    );
  };

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList labels={labels} status={status}/>
        </section>
        <aside>
          <LabelList selected={labels} toggle={toggleLabel} />

          <h3>Status</h3>
          <StatusSelect status={status} onStatusChange={setStatus} />
        </aside>
      </main>
    </div>
  );
}
