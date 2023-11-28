import styles from './testui.module.css';

/* eslint-disable-next-line */
export interface TestuiProps {}

export function Testui(props: TestuiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Testui!</h1>
    </div>
  );
}

export default Testui;
