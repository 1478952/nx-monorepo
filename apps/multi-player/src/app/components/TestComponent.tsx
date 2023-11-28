import { Testui } from '@multi-player/ui';

const TestComponents = () => {
  console.log(process.env.NX_TEST);

  return (
    <div>
      TestComponents
      <Testui />
    </div>
  );
};

export default TestComponents;
