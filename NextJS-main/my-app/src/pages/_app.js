import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/styles/index.module.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.content}>
      <Navbar />

        <Component {...pageProps} />

      <Footer />
    </div>
  );
}
