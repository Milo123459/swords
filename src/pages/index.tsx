import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';

export default function Home() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code>Swords provides widgets for the terminal. Just like shields, but swords!</Code>
					<Code>coming soon to a cinema near you</Code>
				</div>
			</main>
		</div>
	);
}
