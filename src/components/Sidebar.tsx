import CodeLink from './CodeLink';
import styles from '../styles/Components.module.css';

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<CodeLink link="/">home</CodeLink>
		</div>
	);
}
