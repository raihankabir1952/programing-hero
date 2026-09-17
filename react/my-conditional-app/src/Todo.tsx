interface TodoProps {
  name: string;
  isDone?: boolean;
}

export default function Todo({ name , isDone }: TodoProps) {
    if (isDone === true) {
        return (
        <>
        <li>pending : {name}</li>
        </>
        );
    }

  return (
    <>
    <li>Pending : {name}</li>
    </>
  );
}